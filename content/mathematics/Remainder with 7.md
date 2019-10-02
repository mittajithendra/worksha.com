---
title: Remainder with 7
date: 2019-09-26
author: suhelshaik
categories:
  - mathematics
  - easy programs
---


### PROBLEM:
A number n is given,find the remainder of that number when divisible by 7
using a function 'remainderwith7.    
### DESCRIPTION:
A input value n is given.using the function remainderwith7 we need to print
the remainder of that number when divisible by7.
### SOURCE CODE:
```python
def remainderwith7(li):
    if(len(li)==t):
        for i in range(len(li)):
            x=li[i]%7
            print(x)
    else:
        print("invlid input")
t=int(input("enter number of trails:"))
n=input("enter n values:")
li=list(map(int,n.split()))
remainderwith7(li)
```
### INPUT:
enter number of trails: 2
enter n values: 4 7

### OUTPUT:
4
0

### ANALYSIS:
The list of n values are created.if number of trails is equals to lenght of
list of n values then in range of len(list), for every iteration x is printed.    

### COMPLEXITY:
Time complexity of this algorithm is O(n).