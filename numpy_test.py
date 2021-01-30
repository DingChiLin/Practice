import numpy as np
np1 = np.array([1, 3, 2, 5])

def double(x):
    return x*2

np2 = double(np1)

print(np1)
print(np2)

np3 = np2 * 10
print(np3)

np4 = np3[np3 > 50]
print(np4)

print(np3.max())