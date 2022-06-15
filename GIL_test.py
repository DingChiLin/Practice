from time import time
from threading import Thread

def count(n):
    while n > 0:
        n -= 1

def sequential():
    start_time = time()
    count(10000000)
    count(10000000)
    print("Spent:", time() - start_time)

def parallel():
    start_time = time()
    t1 = Thread(target=count,args=(10000000,))
    t1.start()
    t2 = Thread(target=count,args=(10000000,))
    t2.start()
    t1.join(); t2.join()
    print("Spent:", time() - start_time)

sequential()
parallel()

