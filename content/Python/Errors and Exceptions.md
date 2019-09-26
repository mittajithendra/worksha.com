---
title: Errors and Exceptions
date: 2019-09-26
author: SireeshaBandari
categories:
  - Python
---


### Errors and Exceptions in Python

Errors are problems in the program that the program should not recover from. If at any point in the program an error occurs, then the program should exit gracefully. On the other hand, Exceptions are raised when an external event occurs which in some way changes the normal flow of the program.

### Handling Exceptions with Try/Except/Finally

Errors and Exceptions in Python are handled with the Try: Except: Finally construct. You put the unsafe code in the try: block. You put the fall-back code in the Except: block. The final code is kept in the Finally: block.

For example, look at the code below.
```python
>>> try:

...     print("in the try block")

...     print(1/0)

... except:

...     print("In the except block")

... finally:

...     print("In the finally block")

...

in the try block

In the except block

In the finally block
```
Raising exceptions for a predefined condition

Exceptions can also be raised if you want the code to behave within specific parameters. For example, if you want to limit the user-input to only positive integers, raise an exception.

# exc.py
```python
while True:

    try:

        user = int(input())

        if user < 0:

        raise ValueError("please give positive number")

        else:

        print("user input: %s" % user)

except ValueError as e:

        print(e)
```
So the output of the above program is:

➜  python exc.py

4

user input: 4

3

user input: 3

2

user input: 2

1

user input: 1

-1

please give positive number

5

user input: 5

2

user input: 2

-5

please give positive number

