# 基本想法
def count_zero(nums):
    if len(nums) == 0:
        return 0
    return (nums[0] == 0) + count_zero(nums[1:])

# 優化效能
def count_zero(index, nums):
    if index == len(nums):
        return 0
    return (nums[index] == 0) + count_zero(index+1, nums)

nums = [0,1,0,1,0,1,0]
print(count_zero(0, nums))
