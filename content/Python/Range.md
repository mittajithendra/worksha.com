---
title: Range
date: 2019-09-26
author: DimpleGalla
categories:
  - Python
---

### Range:

 The range() is a built-in function of python which returns a range object, which is nothing but a sequence of integers. 

### Example:
```python
>>>x=range(0,4)        // Contain sequence of numbers from 0 to 3

>>>for n in x:

           Print(n)

0

1

2

3
```
•	The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.

________________________________________

### Syntax: 

range(start, stop, step)

Parameter Values:

Parameter	Description

start	Optional. An integer number specifying at which position to start. Default is 0

stop	Required. An integer number specifying at which position to end.

step	Optional. An integer number specifying the incrementation. Default is 1



Example:

Create a sequence of numbers from 0 to 12, but increment by 2 instead of 1:
```python
>>>x=range(0,12,2)    // Contain sequence of numbers from 0 to 12 with difference 2.

>>>for i in x:

          print(i)
```
0

2

4

6

8

10 