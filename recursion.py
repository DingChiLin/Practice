def fibonacci(n):
    if (n <= 2):
        return 1
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(3)) # 2
print(fibonacci(5)) # 55

def fibonacci_1():
    return 1

def fibonacci_2():
    return 1

def fibonacci_3():
    return fibonacci_2() + fibonacci_1()

def fibonacci_4():
    return fibonacci_3() + fibonacci_2()

def fibonacci_5():
    return fibonacci_4() + fibonacci_3()

print(fibonacci_3())
print(fibonacci_5())

def my_sum(n):
    if (n == 1):
        return 1
    return n + my_sum(n-1)

print(my_sum(10))


def reverse(nums, N):
    if (N == 0):
        return []
    return [nums[N-1]] + reverse(nums, N-1)

print(reverse([1,2,3,4,5], 5))

def pow(X, N):
    if (N==1):
        return X
    return X * pow(X, N-1)

print(pow(3,4))