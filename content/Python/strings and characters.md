---
title: Strings and Characters
date: 2019-09-26
author: SireeshaBandari
categories:
  - Python
---

### Strings:

Strings in Python are arrays of bytes representing unicode characters.

However, Python does not have a character data type, a single character is simply a string with a length of 1.

Square brackets can be used to access elements of the string.

### Example:
```python
>>>a = "Hello, World!"

>>>print(a[1])

“e”
```
### Slicing:

Returns  a  range of characters of string. We specify the range by giving starting and ending index.

Example:
```python
>>>b=”Array of numbers”

>>>print (b[2:5])

ray
```
*Negative indexing is used to slice from the end of the string

### Example:
```python
>>>b=”Array of numbers”

>>>print(b[-5:-2])

mbe
```
### String Length: To get the length of a string we use len() function.

Example:
```python
>>>c=”Computer Science”

>>>print(len(c))

16
```
### String Methods:

Python has a set of built-in-functions.

strip(),lower(),upper(),replace(),split() are some built-in-functions used on strings.

Example:
```python
>>>c=”Vikram Adithya”

>>>print(c.strip())

Vikram Adhitya

>>>print(c.lower())

vikram adhitya

>>>print(c.upper())

VIKRAM ADHITYA

>>>print(c.replace(“V”,”v”)

vikram  Adhitya

>>>print(c.split())

[‘Vikram’,’Adhitya’]


```
### Method	Description

capitalize()  :  Converts the first character to upper case

casefold()    :  Converts string into lower case

center()      :  Returns a centered string

count()       :  Returns the number of times a specified value occurs in a string

encode()      :  Returns an encoded version of the string

endswith()    :  Returns true if the string ends with the specified value

expandtabs()  :  Sets the tab size of the string

find()        :  Searches the string for a specified value and returns the position of where it was found

format()      :  Formats specified values in a string

index()       :  Searches the string for a specified value and returns the position of where it was found

isalnum()     :  Returns True if all characters in the string are alphanumeric

isalpha()     :  Returns True if all characters in the string are in the alphabet

isdecimal()   :  Returns True if all characters in the string are decimals

isdigit()     :  Returns True if all characters in the string are digits

isidentifier():  Returns True if the string is an identifier

islower()     :  Returns True if all characters in the string are lower case

isnumeric()   :  Returns True if all characters in the string are numeric

isprintable() :  Returns True if all characters in the string are printable

isspace()     :  Returns True if all characters in the string are whitespaces

istitle()     :  Returns True if the string follows the rules of a title

isupper()     :  Returns True if all characters in the string are upper case

join()        :  Joins the elements of an iterable to the end of the string

ljust()       :  Returns a left justified version of the string

lower()       :  Converts a string into lower case

lstrip()      :  Returns a left trim version of the string

maketrans()   :	Returns a translation table to be used in translations

partition()   : Returns a tuple where the string is parted into three parts

replace()     : Returns a string where a specified value is replaced with a specified value

rfind()       : Searches the string for a specified value and returns the last position of where it was found

rindex()      : Searches the string for a specified value and returns the last position of where it was found

rjust()       : Returns a right justified version of the string

rpartition()  : Returns a tuple where the string is parted into three parts

rsplit()      : Splits the string at the specified separator, and returns a list

rstrip()      : Returns a right trim version of the string

split()       : Splits the string at the specified separator, and returns a list

splitlines()  : Splits the string at line breaks and returns a list

startswith()  : Returns true if the string starts with the specified value

strip()       : Returns a trimmed version of the string

swapcase()    : Swaps cases, lower case becomes upper case and vice versa

title()       : Converts the first character of each word to upper case

translate()   :	Returns a translated string

upper()       : Converts a string into upper case

zfill()       : Fills the string with a specified number of 0 values at the beginning

String concatenation:  ‘+’ operator is used to concatenate or combine two strings.

### Example:
```python
>>>a=”Computer”

>>>b=”Science”

>>>print(a+b)

ComputerScience

>>>a=”Computer”

>>>b=”Science”

>>>print(a+ “ “+b)

Computer Science
```
### String Format:

We can’t combine strings and number. Using format() function we can add string and numbers.



### Example:
```python
>>>age=36

>>>txt=”My name is  Ravi  and I am {}”

>>>print(txt.format(age))
```
My name is Ravi and I am 36

