---
title: Dictionaries
date: 2019-09-26
author: madhuriodugu
categories:
  - Python
---

### DICTIONARIES:

Like a list, a dictionary is a collection of many values. But unlike indexes for lists, indexes for dictionaries can use many different data types, not just integers. Indexes for dictionaries are called keys, and a key with its associated value is called a key-value pair. In code, a dictionary is typed with braces, {}. 

Any particular key can appear only once atmost in a dictionary.Empty dictionary is represented as {}.

for example,
```python
>>> student={'Jack': 28,'Mickey': 11,'Rosy': 2}

>>>student['Rosy']

2

>>>student['Jack']=25

>>>student

{'Jack': 25,'Mickey': 11,'Rosy': 2}
```

### CHECKING WHETHER A KEY OR VALUE EXISTS IN A DICTIONARY:

we can use in operator to check whether a key or value is present in a dictionary.

for example,
```python
>>> student={'Jack': 25,'Mickey': 11,'Rosy': 2}

>>>'jack' in student.keys()

True

>>> 11 in student.values()

True

>>> 'Rosy' in student.values()

False
```
### DICTIONARY METHODS:

1.dict.clear()                                  

Removes all elements of dictionary dict

2.dict.copy()                                   

Returns a shallow copy of dictionary dict

3.dict.fromkeys()                           

Create a new dictionary with keys from seq and values set to value.

4.dict.get(key, default=None)     

For key key, returns value or default if key not in dictionary

5.dict.has_key(key)                       

Removed, use the in operation instead.

6.dict.items()                                  

Returns a list of dict's (key, value) tuple pairs

7.dict.keys()                                  

 Returns list of dictionary dict's keys

8.dict.setdefault(key, default = None)   

Similar to get(), but will set dict[key] = default if key is not already in dict

9.dict.update(dict2)                     

 Adds dictionary dict2's key-values pairs to dict

10.dict.values()

Returns list of dictionary dict's values



### LOOPING OVER DICTIONARIES:

Like the other collections you’ve seen, you can loop over dictionaries. The general form of a for loop over a dictionary is as follows: 
```python
for «variable» in «dictionary»: 

      «block»

for example,

>>> student={'Jack': 25,'Mickey': 11,'Rosy': 2}

>>>student

{'Jack': 25,'Mickey': 11,'Rosy': 2}

>>> for member  in student:

...             print(member,student[member])

...

Jack         25

Mickey    11

Rosy         2

```