---
title: Possiblities to get sum
date: 2019-09-26
author: suhelshaik
categories:
  - mathematics
  - permutations
---

### PROBLEM:
    Given n dice each with m faces,numbered from 1 to m,if the sum of numbers
appeared on face of each dice is x.find the number of possibilities to get the
sum equals to x?
### DESCRIPTION:
    Let n be number of dice given,m be number of faces of dice.if x be the
required sum appeared on dice.if the sum equals to x increment the count with 1
print the count.
### SOURCE CODE:
```python
def num_of_ways(m,n,x):
    li=list(range(1,m+1))
    from itertools import permutations
    perm=permutations(li,n)
    y=list(perm)
    count=0
    for j in y:
        sum=0
        for k in j:
            sum+=k
        if(sum==x):
            count+=1
    print(count)
n=int(input("enter the number of dice:"))    
m=int(input("enter the number of faces of each dice:"))
x=int(input("enter the sum on dice:"))
num_of_ways(m,n,x)
```
### INPUT:

enter the number of dice: 3  
enter the number of faces of each dice: 6
enter the sum on dice: 12

### OUTPUT:
18

### ANALYSIS:
    Initialise li as list of values ranging from 1 to m+1.from itertools import
permutations and permutations of li with lenght n is assigned to perm.
     perm is touple consisting values of li.by converting touple into list we
access the values of each touple and we sum the values of every touple.if
the sum is equals to the input x,we increment count by '1'.finally the count
is printed.
### COMPLEXITY:
     Time complexity of this algorithm is O(n**2).