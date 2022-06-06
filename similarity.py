from math import acos, pi
vector = [4.0, 5.0, 1.0]
compare_vector = [3.0, 5.0, 2.0]

cos_sim = round(sum([x * y for x, y in zip(vector, compare_vector)]) / ((sum([x*x for x in vector])**0.5) * (sum([x * x for x in compare_vector])**0.5)), 4)
similarity = round(1 - (acos(cos_sim) / pi), 4)

print(similarity)
