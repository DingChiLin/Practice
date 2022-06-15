ans = []

def backtracking(n, start, nums): 
    if (n >= 2): # 終止條件觸發，代表走到最底層 #3
        ans.append(nums[:])
        return

    for i in range(start + 1, 4):  #5
        nums.append(i)
        backtracking(n+1, i, nums)
        nums.pop()

backtracking(0, 0, [])
print(ans)