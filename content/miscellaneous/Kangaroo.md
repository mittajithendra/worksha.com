---
title: Kangaroo
date: 2019-10-02
author: DimpleGalla
categories:
  - mathematics
---


### PROBLEM:
You are choreographing a circus show with various animals.for one act,you are given two kangaroos on a number line ready to jump in the positive direction.(i.e, toward positive infinity)

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.you have to figure out a way to get both kangaroos at the same time as part of the show.if it is possible,return YES,otherwise return NO.



### DESCRIPTION:
we know that if x1 is less than x2 and also v1 is less than v2 then the two kangaroos can never meet so when this condition occurs we print NO. And we know that  kangaroos meet at same number of jumps if x1+t*v1=x2+t*v2 where t is the jump number this is same as
<br />
(x1-x2) ℅(v2-v1) ==0.



### INPUT AND OUTPUT:
A single line of four space-separated integers denoting the respective values of x1 ,v1 ,x2 , and v2 .

Print YES if they can land on the same location at the same time; otherwise, print NO.

Note: The two kangaroos must land at the same location after making the same number of jumps.



### PROGRAM:
```python
x1,v1,x2,v2=map(int,input().split())

def kang(x1,v1,x2,v2):

    if(v2>v1) and ((x1-x2)%(v2-v1))==0:

        print("YES")

    else:

        print("NO")

kang(x1,v1,x2,v2)  
```


### SAMPLE INPUT:
0&nbsp3&nbsp4&nbsp2



### SAMPLE OUTPUT:
YES



### TIME COMPLEXITY:



Time complexity of this program is O(1).