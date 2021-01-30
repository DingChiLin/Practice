record = {
    1: 1/2,
    2: 1/5,
    3: 1/10,
    4: 1/10,
    5: 1/10
}
print(record)

sum = 0;
for i in range(1,6):
    for j in range(1,6):
        for k in range(1,6):
            total = i * j * k * record[i] * record[j] * record[k]
            sum += total

print(sum)
