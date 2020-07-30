from datetime import datetime

now = datetime.now()


a = 20401317
b = 17007237
for i in range(10**7):
    c = a | b

print(datetime.now() - now)

