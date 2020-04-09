from math import sqrt
import os, time

numbers = []
timer = False

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

try:
    val = input("Enter your value: ") 
    numbers.append(int(val))
    while val != '':
        val = input("Enter your value: ") 
        if val != '':
            numbers.append(int(val))
except ValueError:
    print("You must enter an integer.")
    os._exit(2)

print(numbers)
start = time.perf_counter()
print("median: ", median(numbers))
if timer:
    print("median time: ", time.perf_counter() - start)
start = time.perf_counter()
print("mean: ", mean(numbers))
if timer:
    print("mean time: ", time.perf_counter() - start)

start = time.perf_counter()
print("variance: ", variance(numbers))
if timer:
    print("variance time: ", time.perf_counter() - start)

start = time.perf_counter()
print("standard deviation", standard_deviation(numbers))
if timer:
    print("standard deviation time: ", time.perf_counter() - start)
