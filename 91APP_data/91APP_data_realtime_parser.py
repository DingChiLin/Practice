import re
import pymysql  
import pymysql.cursors
from urllib.parse import unquote
from collections import defaultdict
from datetime import datetime, timedelta
import time

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

def clean_data(last_time, current_time):
    print(last_time.strftime('%Y-%m-%d %H:%M:%S'), current_time.strftime('%Y-%m-%d %H:%M:%S'))
    cursor = conn.cursor()
    select_sql = "SELECT * FROM tracking_raw_realtime WHERE created_at > %s AND created_at <= %s"
    print(select_sql)
    cursor.execute(select_sql, (last_time.strftime('%Y-%m-%d %H:%M:%S'), current_time.strftime('%Y-%m-%d %H:%M:%S')))
    # cursor.execute("SELECT * FROM tracking_raw_realtime WHERE created_at > '2021-01-30 23:14:28' AND created_at <= '2021-01-30 23:14:33'")
    rows = cursor.fetchall()

    for row in rows:  
        obj = parse(row)
        event = obj['event']
        view_detail = obj.get('view_detail')
        item_id = obj.get('item_id')
        item_id = item_id if (item_id and item_id.isdigit()) else None
        checkout_step = obj.get('checkout_step')
        
        print(obj['cid'], obj['start_time'], event, view_detail, item_id)
        insert_sql = "INSERT INTO tracking_realtime (client_id, time, event_type, view_detail, item_id, checkout_step) \
              VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(insert_sql, (obj['cid'], obj['start_time'], event, view_detail, item_id, checkout_step))
    conn.commit()

def aggregate_data(current_time):
    current_time = current_time.strftime('%Y-%m-%d 00:00:00')

    cursor = conn.cursor()
    select_today_user_sql = "SELECT DISTINCT(client_id) FROM tracking_realtime WHERE time >= %s"
    select_before_user_sql = "SELECT DISTINCT(client_id) FROM tracking_realtime WHERE time < %s"
    cursor.execute(select_today_user_sql, (current_time))
    today_users = cursor.fetchall()
    cursor.execute(select_before_user_sql, (current_time))
    before_users = cursor.fetchall()


    all_users = set()
    unique_user_count = 0
    new_user_count = 0
    return_user_count = 0

    for user in before_users:
        all_users.add(user['client_id'])
        print(user)

    for user in today_users:
        unique_user_count += 1
        if (user['client_id'] in all_users):
            return_user_count += 1
        else:
            new_user_count += 1

    print('unique:', unique_user_count)
    print('new:', new_user_count)
    print('return', return_user_count)
    # print("today:", today_users)
    # print(before_users)

    select_user_behavior_sql = '''
        SELECT 
            SUM(CASE WHEN event_type = 'view' then 1 ELSE 0 END) as "view_count",
            SUM(CASE WHEN event_type = 'view_item' then 1 ELSE 0 END) as "view_item_count",
            SUM(CASE WHEN event_type = 'add_to_cart' then 1 ELSE 0 END) as "add_to_cart_count",
            SUM(CASE WHEN (event_type = 'checkout_progress' AND checkout_step = '1') then 1 ELSE 0 END) as "checkout_count"
        FROM tracking_realtime
        WHERE time >= %s
    '''

    cursor.execute(select_user_behavior_sql, (current_time))
    user_behavior = cursor.fetchone()
    print(user_behavior)

    update_analysis_sql = '''
        INSERT INTO tracking_analysis (`date`, unique_user_count, new_user_count, return_user_count, view_count, view_item_count, add_to_cart_count, checkout_count) 
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
        ON DUPLICATE KEY UPDATE
        unique_user_count = %s,
        new_user_count = %s,
        return_user_count = %s,
        view_count = %s,
        view_item_count = %s,
        add_to_cart_count = %s,
        checkout_count = %s
    '''
    cursor.execute(update_analysis_sql, (
        current_time, unique_user_count, new_user_count, return_user_count,
        user_behavior['view_count'], user_behavior['view_item_count'], user_behavior['add_to_cart_count'], user_behavior['checkout_count'],
        unique_user_count, new_user_count, return_user_count,
        user_behavior['view_count'], user_behavior['view_item_count'], user_behavior['add_to_cart_count'], user_behavior['checkout_count']
    ))
    conn.commit()

def main():
    last_time = datetime.now() - timedelta(seconds=5)
    for i in range(1,100):
        current_time = datetime.now() - timedelta(seconds=5)
        clean_data(last_time, current_time)
        aggregate_data(current_time)
        last_time = current_time
        time.sleep(5)

main()