---
title: Pallindrome
date: 2019-09-19
author: hackerbharath
categories:
  - strings
---

Input string is given we need to check whether the string is palindrome or not.pallindrome means the sequence that reads same from backwards.
Note: 'a'=='A'

### Description

let us enter a string and store it a variable my_str using casefold() method makes all string in a
lowercased. Now string is reversed using string slicing and compared back to non-reversed string
 if both the strings are equal then the given string is palindrome or else it is not

### Python Program

```python2
    My_str=raw_input("enter a string")
    string=My_str.casefold()
    if string==string[::-1]:
      print(f"the string {My_str} is a palindrome")
    else
      print(f"the string {My_str} is not a palindrome")
```

### Input

enter a string:malayALAm

### Output

the string malayALAm is a palindrome 
