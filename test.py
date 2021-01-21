def countAandB(input):
    counter=0;
    for n in input:
        if (n=='a' or n=='b'):
            counter+=1;
    return counter;

def toNumber(input):
    return [ord(n)-96 for n in input];

input1 = ['a', 'b', 'c', 'a', 'c', 'a', 'c']
print(countAandB(input1)) # should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
print(toNumber(input1)) # should print [1, 2, 3, 1, 3, 1, 3]

input2 = ['e', 'd', 'c', 'd', 'e']
print(countAandB(input2)) # should print 0
print(toNumber(input2)) # should print [5, 4, 3, 4, 5]
