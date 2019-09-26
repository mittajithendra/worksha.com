---
title: string formatting
date: 2019-09-26
author: DimpleGalla
categories:
  - Python
---

### String  Formatting :

The format() method used to  format  selected  parts of string. Some time there are parts of text that we can’t control or they come from a database.

To control such values , add placeholders({}) in the text and run the values through format() method.

### Example:
```python
>>>name=”Krishna”

>>>txt=”His name is {}”

>>print(txt.formate(name))

His name is Krishna
```
We can add parameters inside curly braces to specify how to convert value.

### Example:
```python
>>>price=49

>>>txt=”The price is {:.2f} dollars”

>>>print(txt.format(price))

The price is 49.00 dollars
```
### Multiple Values:

We can add more values to the format() method and add more placeholders.

### Example:
```python
>>>quantity=4

>>>items=546

>>>price=50

>>>myorder=”I want {} pieces of item number {} for {:.2f} dollars.”

>>>print(myorder.format(quantity,items,price)

I want 4 pieces of item number 546 for 50.00 dollars.
```


### Index Numbers:

Index numbers   ( {0} ) are used to refer to the same value more than once.

### Example:
```python
>>>age=36

>>>name=”Ravi”

>>>txt=”His name is {1}.{1} is {0}.

>>>print(txt.format(age,name))

His name is Ravi. Ravi is 36.
```
### Named Indexing:

We use named indexing by entering a name inside the curly brackets {carname}, but when we pass the parameters we must use names.

### Example:
```python
>>>myorder=”I have a {carname}  ,it is a {model}.

>>>print(myorder.format(carname=”Ford”,model=”Mustang”))

I have a Ford ,it is a Mustang
```
