---
title: Next permutation
date: 2019-09-24
author: shavalibadvel
categories:
  - Data Structures
  - arrays
---
### DESCRIPTION:
    The problem given is to fine the next permutation for the given input.
In the description we will discus about the following,

1.process and algorithm
2.sourcecode
3.input and output
4.input and output explanation
5.time complexity

### PROCESS AND ALGORITHM:
 The program next permutation,which rearranges numbers into the lexicographycally next greater permutation of numbers.

 If such arrangement is not possible,it must rearrange it as the lowest posiible order.
 
 the replacement must be in-place and use only constant extra memory.
 
 here are some examples. inputs are in the left hand column and its correspomding outputs are in the right hand column.
  
       1,4,7  --->  1,7,4
       
       3,2,1  --->  1,2,3
 
       5,5,8  --->  5,8,5
 
### SOURCECODE:
```python
 def nextpermut(nums,n):
     for i in range(0,n-1):
         if(nums[i]>nums[i+1]):
             nums[n-1],nums[i] = nums[i],nums[n-1]
            
           
         else:
             nums[n-1],nums[n-2]=nums[n-2],nums[n-1]
         break    
 nums=list(map(int,input().split()))
 n=len(nums)
 nextpermut(nums,n)
 print(nums)
 ```
            
 ### INPUT:
  
  5 8 9

 ### OUTPUT:
  5 9 8

 ### EXPLANATION 
 
  In the def function we intialise with the function nextpermut with two variables nums,n.
 then the by giving input list value it splits into int values.
 
 then function calls the nums and n the excute the for loop and the conditions gives the
 satisfactory output as we performed above process.
 
 here n is the length of the list nums.
 
 ### TIME COMPLEXITY:
 Time complexity of the next permutation is the linear.
