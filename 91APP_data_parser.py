import re
import pymysql  
import pymysql.cursors
from urllib.parse import unquote
from collections import defaultdict

conn = pymysql.connect(
    host = 'localhost',
    user = 'arthurlin',
    password = '1234',
    database = 'tracking_service',
    cursorclass=pymysql.cursors.DictCursor
)

all_events = defaultdict(list)

def parse(row):
    start_time = row['created_at']
    data = row['request_url']
    obj = {}
    client_id = re.search(r"cid=([\w-]*)&", data)
    obj['cid'] = client_id.group(1)
    # event_start_time = re.search(r"_gid=(\d*).(\d*)&", data)
    # print(event_start_time)
    obj['start_time'] = start_time # event_start_time.group(2)
    event_type = re.search(r"evtn=(\w*)&", data)
    obj['event'] = event_type.group(1)
    contents = re.findall(r"evtk\w*=([\w%]*)&evt\w*=([\w%]*)", data)
    for (key, value) in contents:
        obj[key] = unquote(value)
    return obj
 
def main():
    cursor = conn.cursor()  
    cursor.execute('SELECT * FROM tracking_raw') 
    rows = cursor.fetchall()
    i = 0
    for row in rows:  
        obj = parse(row)
        all_events[(obj['cid'], obj['start_time'])].append(obj)
        i+=1

    cursor.execute('TRUNCATE table tracking')
    counter = 0
    for key, values in all_events.items():
        print(counter)
        value = values[-1]
        event = value['event']
        view_detail = value.get('view_detail')
        view_detail = view_detail if view_detail else 'NULL'
        item_id = value.get('item_id')
        item_id = item_id if (item_id and item_id.isdigit()) else 'NULL'

        # if (event == 'view' and view_detail == 'NULL'):
        #     print(value)

        cursor.execute(
            f"INSERT INTO tracking (client_id, time, event_type, view_detail, item_id) \
              VALUES('{key[0]}', '{key[1]}', '{event}', '{view_detail}', {item_id})"
        )

        counter += len(values)
    print(counter)
    conn.commit()

main()