import re
import pymysql  
import pymysql.cursors
from urllib.parse import unquote
from collections import defaultdict
from datetime import datetime, timedelta

conn = pymysql.connect(
    host = 'localhost',
    user = 'arthurlin',
    password = '1234',
    database = 'tracking_service',
    cursorclass=pymysql.cursors.DictCursor
)

all_events = defaultdict(list)

def main():
    current = datetime(2019,11,22)
    end = datetime(2020,1,21)
    all_user = set()
    while(current < end):
        view_count = 0
        view_item_count = 0
        add_to_cart_count = 0
        checkout_count = 0

        unique_user = set()
        new_user = set()
        return_user = set()

        print(current)
        cursor = conn.cursor()
        cursor.execute(f"SELECT * FROM tracking WHERE time BETWEEN '{current}' AND '{current + timedelta(days = 7)}'")
        rows = cursor.fetchall()
        
        print(len(rows))
        for row in rows:
            # funnel
            event = row['event_type']
            if event == 'view':
                view_count += 1
            elif event == 'view_item':
                view_item_count += 1
            elif event == 'add_to_cart':
                add_to_cart_count += 1
            elif event == 'checkout_progress':
                checkout_count += 1

            # user status
            cid = row['client_id']
            unique_user.add(cid)
            if (cid in all_user):
                return_user.add(cid)
            else:
                new_user.add(cid)
                all_user.add(cid)

        print('unique:', len(unique_user))
        print('new:', len(new_user))
        print('return:', len(return_user))
        current = current + timedelta(days = 7)

        print('view count: ', view_count)
        print('view item count: ', view_item_count)
        print('add to cart count: ', add_to_cart_count)
        print('checkout count: ', checkout_count)

    print('all:', len(all_user))
main()