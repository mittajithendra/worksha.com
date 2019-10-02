---
title: Enumerate
date: 2019-09-26
author: madhuriodugu
categories:
  - Python
---


### Enumerate Function:

A lot of times when dealing with iterators, we also get a need to keep a count of iterations. Python eases the programmers’ task by providing a built-in function enumerate() for this task.

Enumerate() method adds a counter to an iterable and returns it in a form of enumerate object. This enumerate object can then be used directly in for loops or be converted into a list of tuples using list() method.

### Syntax:

enumerate(iterable, start)

Parameter Values:

Parameter	Description

iterable	An iterable object

start	A Number. Defining the start number of the enumerate object. Default 0

#### Example:
```python
>>>x = ('cse', 'mech', 'ece')

>>>y = enumerate(x)

>>>print(list(y))

[(0,’cse’),(1,’mech’),(2,’ece’)]

```

