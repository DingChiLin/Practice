import re
import pymysql  
import pymysql.cursors
from urllib.parse import unquote
from collections import defaultdict
import random
import time

conn = pymysql.connect(
    host = 'localhost',
    user = 'arthurlin',
    password = '1234',
    database = 'tracking_service',
    cursorclass=pymysql.cursors.DictCursor
)

all_events = defaultdict(list)

def parse(url):
    change = random.randint(0, 100)
    if (change < 50):
        parts = re.search(r"(.*)cid=([\w-]*)&(.*)", url)
        cid = parts.group(2)
        N = 5
        last_N_digit = ""
        for i in range(N):
            last_N_digit += chr(random.randint(0, 25) + 97)
        new_cid = cid[0:-N] + last_N_digit
        return parts.group(1) + "cid=" + new_cid + "&" + parts.group(3)
    else:
        return url

def generate():
    cursor = conn.cursor()
    cursor.execute(f'SELECT COUNT(*) as count FROM tracking_raw')
    count = cursor.fetchone()['count']

    limit = random.randint(5, 100)
    offset = random.randint(0, count - limit) 
    print(offset, ":", limit)

    cursor.execute(f'SELECT request_url FROM tracking_raw LIMIT {offset}, {limit}')
    rows = cursor.fetchall()
    print('=======')
    for row in rows:  
        print('ori: ', row["request_url"])
        new_request_url = parse(row["request_url"])
        print('new: ', new_request_url)
        cursor.execute(
            f"INSERT INTO tracking_raw_realtime (request_url) \
              VALUES('{new_request_url}')"
        )
        time.sleep(random.randint(1,5))
        conn.commit()

def main():
    for i in range(1,100):
        generate()

main()