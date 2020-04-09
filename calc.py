from math import sqrt
numbers = []

def mean(numbers):
    return sum(numbers) / len(numbers)

def variance(numbers):
    theMean = mean(numbers)
    tmp = []
    for n in numbers:
        tmp.append((n - theMean)**2)
    varSum = sum(tmp)
    return varSum / (len(numbers) - 1)

def median(numbers):
    numbers = sorted(numbers)
    count = len(numbers)
    median = 0
    if count % 2 == 0:
        median = mean([numbers[int((count/2) - 1)], numbers[(int(count/2))]])
    else:
        median = numbers[int(count/2)]
    return median

def standard_deviation(numbers):
    return sqrt(variance(numbers))

val = input("Enter your value: ") 
numbers.append(int(val))
while val != '':
    val = input("Enter your value: ") 
    if val != '':
        numbers.append(int(val))


print(numbers)
print("median: ", median(numbers))
print("mean: ", mean(numbers))
print("variance: ", variance(numbers))
print("standard deviation", standard_deviation(numbers))
