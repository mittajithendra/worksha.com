---
title: for loops
date: 2019-09-26
author: DimpleGalla
categories:
  - Python
---

### For LOOP:

The for loop is a generic sequence iterator in Python: it can step through the items in any ordered sequence object. The for statement works on strings, lists, tuples, other built-in iterables, and new objects that we’ll see how to create later with classes.

### SYNTAX:	
```python
for<< variable name >>   in    << list >>:
      << block >>
```
for example,
```python
>>>vowels=['a','e','i','o','u']

>>> for i in vowels:

...            print(i)

...

a

e

i

o

u
```
### NESTED for LOOPS:

for example,
```python
>>> outer=['Li','Na','K']

>>> inner=['F','Cl','Br']

>>> for metal in outer:

...            for halogen in inner:

...                       print(metal + halogen)

...

LiF         LiCl        LiBr

NaCl      NaF       NaBr

KBr         KF          KCl

```