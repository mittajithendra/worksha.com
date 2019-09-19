---
title: Table of numbers
date: 2019-09-19
author: tharunchowdary192112
categories:
  - miscellaneous
  - easy programs
---
## Program
 write a program to print tables of given number

### Description
 1. counting sort Process and algorithm,
 2. program code,
 3. input and output,
 4. complexity.

### Description

The program takes in a number and prints the table of a given number.If we give any number as a input it will displays that tables of that number it the values teriminate the "FOR" loop  

### PROBLEM SOLUTION:

1. Take in a number and store it in a variable.
2. Print the multiplication tables of a given number.
3. Exit.
### Python Program

```python
    n=int(input("Enter the number to print the tables for:"))
    rang=int(input("Enter the number to print how many numbers"))
    #it terminate from 1 to 10.
    for i in range(1,rang):
        print(str(n)+'*'+str(i)+'='+str(n*i))#it diplays as n*i=resulting of that number.
```

### PROGRAM EXPLANATION:

1. User must enter a number.
2. Using a print statement, print the multiplication tables of the given number.

Case 1:

### INPUT:

Enter the number to print the tables for:7

### EXCPECTED OUTPUT:

7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
 
### Case 2:

### INPUT:

Enter the number to print the tables for:17

### EXCPECTED OUTPUT:

17 x 1 = 17
17 x 2 = 34
17 x 3 = 51
17 x 4 = 68
17 x 5 = 85
17 x 6 = 102
17 x 7 = 119
17 x 8 = 136
17 x 9 = 1530

### TIME COMPLEXITY:

Time complexity for printing tables of a given number is linear.
