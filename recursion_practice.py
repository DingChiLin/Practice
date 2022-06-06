# '''
# Fibonacci
# '''

# def fibonacci1(n): # can give you answer of 1st fibonacci number
#     return n

# def fibonacci2(n): # can give you answer of 2nd fibonacci number
#     return n

# def fibonacci3(n): # can give you answer of 3rd fibonacci number
#     return fibonacci2(2) + fibonacci1(1)

# def fibonacci4(N): # can give you answer of 4th fibonacci number
#     return fibonacci3(3) + fibonacci2(2)

# def fibonacci5(N): # can give you answer of 5th fibonacci number
#     return fibonacci4(4) + fibonacci2(2)







# '''
# Pascal Triangle
# '''
# N = 5
# ans = []
# def find(n, current):
#     if (n == N) {
#         ans = current;
#         return;
#     }

#     nxt = []
#     nxt.append(1)
#     for i in range(len(current)-1):
#         nxt.append(current[i+1] + current[i])
#     nxt.append(1)

#     find(n+1, nxt)
# }
# find(1, [1])
# print(ans)







'''
Tower of Hanoi
'''
def move(A, B, C, n):
    if (n == 1):
        print(A, "->", C)
        return
    else:
        move(A, C, B, n-1)
        move(A, B, C, 1)
        move(B, A, C, n-1)
        return

N = 3
move(1, 2, 3, N)
