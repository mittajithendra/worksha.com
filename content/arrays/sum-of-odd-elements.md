---
title: Sum of Odd Elements
date: 2019-09-14
author: mittajithendra
categories:
  - arrays
  - Data Structures
---

In the given array if there are any odd elements then sum up all and print the result.If no such add element is found just print 0.

This problem can be solved in linear time.We evaluate from first element of the array to last element of the array.Initially the sum is 0.If the element is odd then we add the element to sum.If it is even just ignore that.

### Python Program

```python
	def sum_odd_elements(arr):
    	su=0
    	for i in arr:
        	if i%2!=0:
            su+=i
    	return su

	arr=list(map(int,input().split()))
	print(sum_odd_elements(arr))
```

### Input

2 5 7 1 9

### Output

22
