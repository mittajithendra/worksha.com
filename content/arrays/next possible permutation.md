---
title: Next permutation
date: 2019-09-24
author: shavalibadvel
categories:
  - Data Structures
  - arrays
---
### DESCRIPTION:
<br />
    The problem given is to fine the next permutation for the given input.
In the description we will discus about the following,

1.process and algorithm
2.sourcecode
3.input and output
4.input and output explanation
5.time complexity

### PROCESS AND ALGORITHM:
<br>
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
    flag=0
    for i in range(n-1,0,-1):
        if nums[i]>nums[i-1]:
              nums[i],nums[i-1]=nums[i-1],nums[i]
              flag=1
              break
    if flag==0:
        nums=nums[::-1]
          
nums=list(map(int,input().split()))
n=len(nums)
nextpermut(nums,n)
print(nums)

 ```
            
 ### INPUT:
  <br>
  5 8 9

 ### OUTPUT:
 <br>
  5 9 8

 ### EXPLANATION 
 <br>
  we process the array from last element when the current element is greater than previous element then swap with previous
  and halts the loop.Because on swapping the next permutation will occur.
 
 ### TIME COMPLEXITY:
 <br>
 Time complexity of the next permutation is the linear.
