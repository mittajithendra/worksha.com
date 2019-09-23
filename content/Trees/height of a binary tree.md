---
title: Height of a binary tree
date: 2019-09-23
author: shavalibadvel
categories:
  - Binary Tree
  - Trees
---

### DESCRIPTION:
 #### PROBLEM:
     The given program is to find the length of the binary tree.
 In the desciption we will discus about,

 1.program process and algorithm
 2.program code
 3.input/output
 4.time complexity
 
 ### PROGRAM PROCESS AND ALGORITHM:
         The program main theme is to get the max height of the binary tree,
 in this we need to take intially an array.
 
 Then we will append the values to the two duplicte arrays ,we namely initialise
 a=[],b=[].

 Then by using for loops we will append values.
 
 Now by using another two loops for a,b, we will find the right side and left side size
 we will increase the values of right side and left side value by 1 by each condition.
 
 By checking the maximum value of left side and right side value for a and by to the b.

 Then by printing the value we get height of the binary tree for the input.
  
 
 ### PROGRAM PYTHON CODE:
 ```python
 arr=[86,52,9,6,78,54,96,87,88,23,41,35,26,19]
 a=[]
 b=[]
 for i in range(len(arr)):
     if(arr[0]>arr[i]):
         b.append(arr[i])
     else:
         a.append(arr[i])
     i+=1
 l1=1
 r1=1
 for j in range(len(a)):
     if(a[0]>a[j]):
         l1+=1
     else:
         r1+=1
     a[0]=a[j]
     j+=1
 l2=1
 r2=1
 for k in range(len(b)):
     if(b[0]>b[k]):
         r2+=1
     else:
         l2+=1
     b[0]=b[k]
     k+=1
 m=max(l1,r1)
 n=max(l2,r2)
 s=max(m,n)
 print("height of binary tree is:")
 print(s+1)
```

 ### INPUT :

 [86,52,9,6,78,54,96,87,88,23,41,35,26,19]


 ### OUTPUT:

 the height of the binary tree is :
 9


 ### TIME COMPLEXITY:
 
  The time complexity of the binary tree above program is big O of n.
        
   O(n)