import threading
import time

N = 10000000

def job():
	print("yoyo")
	cnt = 0
	for i in range(N):	
		cnt += i
		#print("Child thread:", i)
	print(cnt)

start = time.time()

t1 = threading.Thread(target = job)
t2 = threading.Thread(target = job)
t3 = threading.Thread(target = job)
t1.start()
t2.start()
t3.start()
t1.join()
t2.join()
t3.join()

print("Spend: ", time.time() - start)
