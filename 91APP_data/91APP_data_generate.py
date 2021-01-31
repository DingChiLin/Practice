import csv
import pymysql  
import pymysql.cursors
from urllib.parse import unquote
from collections import defaultdict
from datetime import datetime, timedelta
import random
random.seed(datetime.utcnow())

conn = pymysql.connect(
    host = 'localhost',
    user = 'arthurlin',
    password = '1234',
    database = 'tracking_service',
    cursorclass=pymysql.cursors.DictCursor
)

now = datetime(2020,3,1,9,10,3)
current = now - timedelta(days=100)
# print(current)
# print(current.hour)
t = 0
mod = random.randint(20, 200)
cursor = conn.cursor()
cursor.execute('TRUNCATE table tracking_raw')
with open('/Users/arthurlin/Downloads/AppWorks_School_Data_Training.csv', newline='') as csvfile:
    rows = csv.reader(csvfile)
    next(rows, None)
    for row in rows:
        # random timestamp
        ran_seconds = random.randint(0, 10)
        current += timedelta(seconds = ran_seconds)
        t += 1
        if (t % mod == 0):
            t = 0
            mod = random.randint(20, 200)
            if (current.hour >= 1 and current.hour <= 7):
                ran_minutes = random.randint(60, 300)
            else:
                ran_minutes = random.randint(5, 300)
            current += timedelta(minutes = ran_minutes)

        print(current)
        cursor.execute(f"INSERT INTO tracking_raw (request_url, created_at) VALUES('{row[0]}', '{current.strftime('%Y-%m-%d %H:%M:%S')}')")
conn.commit()
