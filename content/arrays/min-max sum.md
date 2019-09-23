---
title: min-max sum
date: 2019-09-23
author: Pavanuppari
categories:
  - arrays


---



### QUESTION:
Given A Series Of N Positive Integers a1,a2,a3........an. ,
Find The Minimum And Maximum Values That Can Be
Calculated By Summing Exactly N-1 Of The N Integers.
Then Print The Respective Minimum And Maximum
Values As A Single Line Of Two Space-Separated Long
Integers.

Input Format : First Line Take Input Value Of N
Second Line Take Input N Space Separated Integer Value

Output Format : Two Space Separated Value ( One
Maximum Sum And One Minimum Sum )

### PROGRAM:
```python
n=int(input(&quot;enter n value: &quot;))
l=[]
for i in range (n):

l.append(int(input()))
l.sort()
max_sum=0
min_sum=0
for i in range(n-1):
min_sum=min_sum+l[i]
max_sum=min_sum-l[0]+l[n-1]
print(f&#39;maximum sum is {max_sum}&#39;)
print(f&#39;minimum sum is {min_sum}&#39;)
```

### SAMPLE INPUT :
Enter n value: 5<br />
1<br />
2<br />
3<br />
4<br />
5

### SAMPLE OUTPUT :
maximum sum is 14
minimum sum is 10

### EXPLANATION :
First input the n value.Create an empty list l.Here n give s
the number of elements in list.In the next line ,input n
values in list l using for loop.And then in the next line
using sort() function ,sort the elements in the array.
When the elements are sorted ,the minimum sum of
exactly n-1 of n integers is the sum of first n-1 integers in
the sorted list.So the maximum sum will be the sum of
last n-1 integers in sorted list,whicj is minimum sum-first
element in sorted list+last element in sorted list.Print
maximum sum and minimum sum.