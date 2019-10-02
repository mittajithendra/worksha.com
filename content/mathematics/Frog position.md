---
title: Frog position
date: 2019-10-02
author: suhelshaik
categories:
  - mathematics
  - Data Structures
---

### PROBLEM:
    To calculate the number of positions of frogs inside or on the square of
given dimensions.
DESCRIPTION:
    Let (x,y) be initial position of frog.'X','Y' be dimensions of one of the
vertex of the square of side lenght 'S'.let 't' be the time interval.assume v=0
initially and it terminate upto v=t.
     if the current position of frog is inside or on the square dimension then
increment the count value.finally print the number of positions the frog lies
on and inside the dimension of square.
### SOURCE CODE:
```python
def position(x,y,t,v,count):
    if(v==t):
        if((X<=x<=X+S)and(Y<=y<=Y+S)):
            count.append(x*10+y)
        return
    position(x+1,y,t,v+1,count)
    position(x,y+1,t,v+1,count)
    position(x,y,t,v+1,count)      
X=int(input("enter p ordinate:"))
Y=int(input("enter p abscica:"))
S=int(input("enter the lenght of side of square:"))
t=int(input("enter the time period:"))
count=[]
position(0,0,t,0,count)
a=set(count)  
print(a)
b=len(a)
print(b)
```
### INPUT:
enter p ordinate:2
enter p abscica:2
enter the lenght of side of square:3
enter the time period:6

### OUTPUT:
{32,33,42,22,23,24}    #xy represents xis ordinate and yis abscica of a position<br />
6     &nbsp&nbsp&nbsp  #represents number of positions frog lies inside and on square dimension

### ANALYSIS:
    Here the function 'position' is recursive.for every iteration the v is
incremented by 1.when v==t return the count and function will terminate.
The count is modified into set and its lenght is calculated.This value
gives the required output.
