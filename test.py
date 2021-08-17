class Solution:
	def __init__(self):
		self.a = 0 # 將你需要的全域變數定義在這邊

	def foo(self):
		self.a += 5
		print(self.a)

s = Solution()
s.foo()
