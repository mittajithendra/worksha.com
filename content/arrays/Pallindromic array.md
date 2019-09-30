---
title: Pallindromic array
date: 2019-09-30
author: varuntheruler
categories:
  - Data Structures
  - arrays
---

### PALINDROMIC ARRAY

#### programme description:
   You are given an array of size n.
   Your task is to find an the minimum number of operations
to convert the given array to palindromic array.

### ALGORITHM:
     Let number operations be count.
     First of all take two indices i,j and assign them to
0 and n-1 respectively.
    If array[i]==array[j],then then no need to do any 
merging operations at index i or index j.and make
 i = i+1 and j = j-1 and count becomrs count+=1
     Elseif array[i]>array[j],then merging operation
takes place at j and array[j] = array[j]+array[j-1]
and j becomes j-1 and count becomes count+=1
     Else if array[i]<array[j],then merging operation 
takes place at i and array[i]+=array[i+1] and i becomes
i+1.

### Python PROGRAMME:
```python
     def min_number_of_operators(a,n):

    count = 0

    i =0

    j=n-1

    while(i<=j):

        if a[i] == a[j]:

            i = i+1

            j = j-1

        elif a[i]>a[j]:

            j =j-1

            a[j] = a[j]+a[j+1]

            count+=1

        else:

            i = i+1

            a[i]+=a[i-1]

            count+=1

    return count

a =list(map(int,input().split()))

n = len(a)

print(min_number_of_operators(a,n))

```



### INPUT:
   1 2 3 4 5

### OUTPUT:
   2

### EXPLANATION FOR INPUT AND OUTPUT:
     When input is given with integers with spaces first it converts
them into an array as we have used map() function.
     for example 1 2 3 4 5 wil be coverted as[1,2,3,4,5].
      Now we check weather array[i]==array[j-1] or not and as 1!=5
it goes with which is greater as 1<5 then merging takes place array[i].
      i.e.,array[i]+=array[i+1]
      i.e.., 1--->3
  and i becomes 1. it continues and prints total number of operations took
place for getting a palindromic array.

### TIME COMPLEXITY:
      Time complexity for the above given programme is O(n),since only one
for loop is used.  