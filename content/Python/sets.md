---
title: sets
date: 2019-09-26
author: SireeshaBandari
categories:
  - Python
---

### Sets:

A set is an unordered and unindexed collection. Sets are written with curly braces ({}).

### Example:
```python
>>>s = {“white”,”yellow”,”purple”}

>>>print(s)

{‘white’,’yellow’,’purple’}

```

#### Accessing of Items in a Set:

Set is an unordered collection so we can’t access items using index. But we can access items in sets using for loop.

### Example:
```python
>>>s = {“white”,”yellow”,”purple”}

>>>for x in s :

             print(x)

white

yellow

purple
```
#### 	To find  an  item is present in the given set or not

### Example:
```python
>>> s = {“white”,”yellow”,”purple”}

>>>print(“white” in s)

True
```
### Sets Methods:

Python has a set of built-in-functions used on sets.

add() method is used to add an item to a set.

#### Example:
```python
>>> s = {“white”,”yellow”,”purple”}

>>>s.add(“pink”)



>>>print(s)

{‘white’,’yellow’,’purple’,’pink’}

>>> s = {“white”,”yellow”,”purple”}

>>>print(len(s))

3
```
#### remove() or discard() method is used to remove an item from set.

#### Example:
```python
>>> s = {“white”,”yellow”,”purple”}

>>>s.remove(“yellow”)

>>>print(s)

{‘white’,’purple’}
```
##### clear() method is used to empty a  set.

#### Example:
```python
>>> s = {“white”,”yellow”,”purple”}

>>>s.clear()

>>>print(s)
```
set()

•	delete() method is used to delete set completely.

union() or update() method is used to join to sets.

#### Example:
```python
>>> s = {“white”,”yellow”,”purple”}

>>>p={“”a”,”b”,”c”}

>>>s.update(p)



>>>print(s)

{‘a’,’yellow’,’b’,’c’,’purple’,’white’}
```
### Method	Description

add()       :   Adds an element to the set

clear()     :   Removes all the elements from the set

copy()      :   Returns a copy of the set

difference()    :   Returns a set containing the difference between two or more sets

difference_update() : Removes the items in this set that are also included in another, specified set

discard()   :   Remove the specified item

intersection()  :   Returns a set, that is the intersection of two other sets

intersection_update()   :   Removes the items in this set that are not present in other, specified set(s)

isdisjoint()    :   Returns whether two sets have a intersection or not

issubset()  :   Returns whether another set contains this set or not

issuperset()    :   Returns whether this set contains another set or not

pop()   :   Removes an element from the set

remove()    :   Removes the specified element

symmetric_difference()  :   Returns a set with the symmetric differences of two sets

symmetric_difference_update()   :   inserts the symmetric differences from this set and another

union()     :      Return a set containing the union of sets

update()    :   Update the set with the union of this set and others



