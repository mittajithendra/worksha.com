---
title: subset of array
date: 2019-09-21
author: suhelshaik
categories:
  - Data Structures
  - arrays
---

### Problem:
print the subsets of a given array.
### Description:

    To find the subsets of a given set,we convert the given input into list of
 integers and our defined function 'powerset' is called with suitable arguments.
    we find the binary of required integer using built-in-function 'bin(x)'
 where x is an integer.if the digit in binary is '1' append suitable element of
 given set in result.
SOURCE CODE:
### programe to print subsets excluding empty set
```python
def powerset (li,n):
    for i in range(1,pow(2,n)):  #pow(2,n)==2**n is built-in-function
        result=[]
        tmp=list(map(int,list(bin(i)[2:])))  #declaring temporary variable'tmp'
        m=len(tmp)
        for j in range(m):
            if(tmp[m-j-1]==1):
                result.append(li[j])
        print(result)
li=list(map(int,input().split()))
n=len(li)
powerset(li,n)
```

### INPUT:
<br />
    let 2 3 4 be input

### OUTPUT:
[2]<br />
[3]<br />
[4]<br />
[2,3]<br />
[2,4]<br />
[3,4]<br />
[2,3,4]<br />

### ANALYSIS:
    input is taken as a string'2,3,4'.using split and map functions we convert
 input into integers then initialising them in list 'li'.
    i.e., [2,3,4]
   using 'bin' function we get binary numbers of a given number and these are
 stored as a list in 'tmp'.if the digit in 'tmp' is '1' then append li[j] into
 result.print result for every iteration in loop.continue the process untill 
 loop terminates.
 
### COMPLEXITY:

    Time complexity of this algorithm is in order of 'n*2**n'. 