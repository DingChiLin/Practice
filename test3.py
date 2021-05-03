import threading
from time import sleep

def do_job(number):
    sleep(3)
    print(f"Job {number} finished")

def main():
    threads = []
    for i in range(5):
        t = threading.Thread(target = do_job, args = (i,))
        threads.append(t)
        t.start()
    for t in threads:
        t.join()
    print("finish all jobs")
main()

