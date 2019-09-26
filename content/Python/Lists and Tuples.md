---
title: Lists and Tuples
date: 2019-09-26
author: DimpleGalla
categories:
  - Python
---



### LISTS:   

 A list is a value that contains multiple values in an ordered sequence and they have no fixed size, a list begins with an opening square bracket and ends with a closing square bracket, []. Values inside the list are also called items. Items are separated with commas ,they are also mutable.it is possible to store both homogeneous and heterogenous data in lists.

The general form of a list expression is as follows: [«expression1», «expression2», ... , «expressionN»] The empty list is expressed as [].

### ACCESSING LIST VALUES USING INDEX:

The integer inside the square brackets that follows the list is called an index. The first value in the list is at index 0, the second value is at index 1, the third value is at index 2, and so on.

### For example:     
```python
>>>odd=[1,3,5,7,9] 

>>>odd[0]

1

>>>odd[3]

7
```
### NEGATIVE INDEXES:

While indexes start at 0 and go up, you can also use negative integers for the index. The integer value -1 refers to the last index in a list, the value -2 refers to the second to last index in a list, and so on. 

### For example:
```python
>>>odd=[1,3,5,7,9]

>>>odd[-1]

9

>>>odd[-5]

1

```
### OPERATIONS ON LISTS:

Function                                   Description

 len(L)                                        Returns the number of items in the list

 max(L)                                      Returns the maximum value in list 

 min(L)                                       Returns the minimum value in list

 sum(L)                                      Returns the sum of the values in list 

 sorted(L)                                               Returns a copy of list L where the items are in order from smallest to largest    

### LIST METHODS:

       

Method	Description

append()        :   Adds an element at the end of the list

clear()         :   Removes all the elements from the list

copy()          :   Returns a copy of the list

count()         :   Returns the number of elements with the specified value

extend()        :   Add the elements of a list (or any iterable), to the end of the current list

index()         :   Returns the index of the first element with the specified value

insert()        :   Adds an element at the specified position

pop()           :   Removes the element at the specified position

remove()        :   Removes the item with the specified value

reverse()       :   Reverses the order of the list

sort()          :   Sorts the list



### SLICING A LIST:

Just as an index can get a single value from a list, a slice can get several values from a list, in the form of a new list. A slice is typed between square brackets, like an index, but it has two integers separated by a colon. Notice the difference between indexes and slices.Slicing creates a new sub list.

[i:j]

i-starting index of sublist -inclusive

j-ending index of sublist-exclusive

### For example:
```python
>>>prime=[2,3,5,7,11,13,17,19]

>>>prime[0:4]

[2,3,5,7]

>>>prime[:]

[2,3,5,7,11,13,17,19]

>>>prime[ : 4]

[2,3,5,7]

>>>prime[4 : ]

[11,13,17,19]
```


### TUPLE:

The tuple object is roughly like a list that cannot be changed—tuples are sequences, like lists, but they are immutable, like strings. Syntactically, they are coded in parentheses instead of square brackets, and they support arbitrary types, nesting, and the usual sequence operations.


```python
>>> T = (1, 2, 3, 4)

 >>> len(T) 

 4

>> T + (5, 6)

 (1, 2, 3, 4, 5, 6)

>>> T[0] 

 1
```
### Converting Types with the list() and tuple() Functions:

 Just like how str(42) will return '42', the string representation of the integer 42, the functions list() and tuple() will return list and tuple versions of the values passed to them. Enter the following into the interactive shell, and notice that the return value is of a different data type than the value passed:
```python
>>> tuple(['cat', 'dog', 5]) 

('cat', 'dog', 5) 

>>> list(('cat', 'dog', 5)) 

['cat', 'dog', 5]

 >>> list('hello') 

['h', 'e', 'l', 'l', 'o']

```