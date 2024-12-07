# A Fibonacci series in  is written as following:
# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 and so on.
# As we have seen, the Fibonacci sequence is the integer sequence in which the first two terms are 0 and 1. After that, the following term is defined as the sum of the previous two terms. 
# Having this piece of information, let's start to code the Fibonacci series in .

# note: both fibonacci_series() and fibonacci_generator() do the same thing but fibonacci_generator is space efficient as it outputs a stream and so does not need to save all the numbers in a variable
def fibonacci_series(number_of_terms) -> None:
    n1 = 0
    n2 = 1 
    for i in range(number_of_terms):
        next_term = n1 + n2
        n1 = n2
        n2 = next_term
        print(n1)

number_of_terms = 10        
# fibonacci_series(number_of_terms)

# fibonacci_series implemented using generator function, it saves memomory for large data sets
def fibonacci_generator(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

# Generate Fibonacci numbers lazily using a generator
fibonacci_gen = fibonacci_generator(5)

# Use the generated Fibonacci numbers
for num in fibonacci_gen:
    print(num)