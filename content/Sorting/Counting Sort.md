---
title: Counting Sort
date: 2019-09-19
author: shavalibadvel
categories:
  - Sorting
  - arrays
---
## Counting Sort
 In the description we will show the following,

 1. counting sort Process and algorithm,
 2. program code,
 3. input and output,
 4. complexity.

### Description

counting sort algorithm sorts the array using frequency of each array 
 elements and array elements are sorted based on counter value
 of each elements.
          Initially we have to find the maximum element in the 
 list of elements.
  Initialise duplicate array with 0 for all elements range from 
 0 to maximum element plus 1 value.
     Next we find frequency for all array elements and updates 
 frequency value in duplicate array.
    sorted array based on the duplicate array.

### Python Program

```python
    def counting sort(arr):
     m=max(arr)
     dup_arr=[0]*(m+1)
     for i in arr:
         dup_arr[i]+=1
     j=0
     while(j<(m+1)):
         if dup_arr[i]>0:
             print(j,end=" ")
             dup_arr[j]-=1
         else:
             j+=1
 arr=list(map(int,input().split()))
 counting_sort(arr)
```

### Input

1 5 7 8 5 1 2 1 1 3

### Output

1 1 1 1 2 3 5 5 7 8 

### EXPLANATION FOR INPUT AND OUTPUT:
We are just intially giving input to the program it will read 
 input, then it split to integers,then it reads and replace '0' with 1' 
 in their places ,if same number occurs then it adds 1 ,where element
 present in the duplicate array.
         it will shows like below
      [0,4,1,1,0,2,0,1,1]
          here 4 in the index 1 implies there are 4, '1's prasent.
 there by you can check the following.
      then using for loop it prints the sorted array is shown below 
      1 1 1 1 2 3 5 5 7 8


  ### TIME COMPLEXITY OF COUNTING SORT:
         
          The time complexity for the counting sort is O(n).
  here you may think that, here we taken two for loops we may think the
 complexity will be O(n^2),but it will iterate only n times so 
 time complexity will be O(n).
 