from itertools import combinations
dict1 = {
	"3": {"1":1, "2":3,"3":2},
	"1": {"1":1, "2":3,"3":2},	
	"2": {"1":1, "2":3,"3":2},	
	"4": {"1":1, "2":3,"3":2}	
}

res = combinations(dict1, 2)
print(list(res))
