import copy
class Solution:

	def get_candidate_rows(self, visited, n, cur_sum, cur_nums, length, target, candidates):
		if cur_sum > target:
			return
		if len(cur_nums) > length:
			return
		if cur_sum == target and len(cur_nums) == length:
			candidates.append(cur_nums[:])
		
		for i in range(1,n+1):
			if i not in visited:
				visited.add(i)
				cur_nums.append(i)
				self.get_candidate_rows(visited, n, cur_sum+i, cur_nums, length, target, candidates)
				cur_nums.pop()
				visited.remove(i)

	def validate(self, square):
		N = len(square)
		total = sum(square[0])
		for i in range(N):
			if sum(square[i]) != total:
				return False
		for j in range(N):
			if sum(square[i][j] for i in range(N)) != total:
				return False
		diag = 0
		for i in range(N):
			diag += square[i][i]
		if diag != total:
			return False

		anti_diag = 0
		for i in range(N):
			anti_diag += square[i][N-1-i]
		if anti_diag != total:
			return False

		return True

	def backtracking(self, used_candidate_set, candidates, used_value_set, square, n):
		if self.ans:
			return
		if len(square) == n:
			if self.validate(square):
				self.ans = copy.deepcopy(square)
			return
		for i in range(len(candidates)):
			if i not in used_candidate_set:
				row = candidates[i]
				row_set = set(row)
				if not (row_set & used_value_set):
					used_candidate_set.add(i)
					square.append(row)
					self.backtracking(used_candidate_set, candidates, used_value_set | row_set, square, n)				
					square.pop()
					used_candidate_set.remove(i)

	def fill_square(self, n):
		total = (1 + n*n) * n / 2
		candidates = []
		self.get_candidate_rows(set(), n*n, 0, [], n, total, candidates)
		self.ans = None
		self.backtracking(set(), candidates, set(), [], n)
		return self.ans

S = Solution()
print(S.fill_square(4))
		




