---
title: flipping image
date: 2019-09-21
author: varuntheruler
categories:
  - Data Structures
  - arrays
---

### FLIPPING OF IMAGE
<br>
1.PROBLEM DISCRIPTION:
    Here,you will get a python programme to horizontally flip
a binary matrix.
     i.e..,the task is to flip the matrix horizontally(find the image
of the matrix),then invert it.

### 2.ALGORITHM:
<br>
  To flip a matrix horizontally means that reversing
each row of the matrix.
  for example,flipping[1,1,0,0] horizontally results
in [0,0,1,1]
       use print(row[::-1],end=" "]) to flip the list.
  To invert a matrix means that replacing each 0 by 1
and viceversa.
  for example, inverting[0,0,1,1] results in[1,1,0,0]

### 3.SOURCE CODE:
```python
def image(mat):
    val=[]
    for row in mat:
        x = row[::-1]
        for i in range(len(x)):
            if (x[i]==0):
                x[i]=1
            else:
                x[i]=0
        val.append(x)
    print(val)         
n=int(input())
mat=[]
for i in range(n):
    mat.append(list(map(int,input().split())))
                
image(mat)
```

### 4.INPUT:
  <br>
   [[1,1,0,0],[1,0,0,0]]

### 5.OUTPUT:
  <br>
   [[1,1,0,0],[1,1,1,0]]

### 6.EXPLANATION FOR INPUT AND OUTPUT:
<br>
       When a horizontal binary matrix is given by the user,
firstly each row will be reversed.
               i.e..,[1,1,0,0] will be reveresed as [0,0,1,1]
and secondly we will find the invert of the reversed matrix or
we will find the invert of an image.
               i.e..,[0,0,1,1] will be inverted as [1,1,0,0]
and finally the flipped matrix will be printed.

### 7.TIME COMPLEXITY:
<br>
   If the given matrix has n elements in total then the
time compexity wil be O(n).Because we need to iterate all
the elements.

### 8.SPACE COMPLEXITY:
<br>
 The space compelexity of the above program will be O(1).

    