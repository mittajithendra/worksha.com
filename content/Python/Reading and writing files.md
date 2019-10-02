---
title: Reading and writing files
date: 2019-09-26
author: madhuriodugu
categories:
  - Python
---

### Reading  Files:

To open a file we use the built-in –function open() function. The open() function returns a file object ,which has a read() method for reading content of file.

### Example:

text1.txt

Hello!  Welcome to text1.txt

Goodluck! 

Bye.


```python
>>>f=open(“text1.txt”.”r”)

>>>print(f.read))

Hello!  Welcome to text1.txt

Goodluck!

Bye.
```
read()   method returns the whole text but we specify how characters to return.

### Example:
```python
>>>f=open(“text1.txt”.”r”)

>>>print(f.read(5))

Hello
```
Read line technique:

This technique is used to read only one line of file.

### Example:
```python
>>>f=open(“text1.txt”.”r”)

>>>print(f.readline())

Hello!  Welcome to text1.txt
```
By looping through the lines of files we can  read  whole file.



### Example:
```python
>>>f=open(“text1.txt”.”r”)

>>>for i in f:

           Print(x)

Hello!  Welcome to text1.txt

Goodluck!

Bye.
```
### Writing Files:

Creating a new file:

To create a new file we use open() method .

#### Example:
```python
>>>f=open(“myfile.txt”,”x”)      // A new empty file is created

Or

>>>f=open(“myfile.txt”,”w”)      // Create a new file if doesn’t exist.

Writing to an existing file:

To write to an existing file  we  must add a parameter to open() function.

text2.txt

Hello!World.
```

#### Example:
```python
>>>f=f.open(“text2.txt”,”a”)     //Will append to the end of the file.

>>>f.write(“Now the file has more content”)

>>>f.close()

>>>f=open(“text2.txt”.”r”)

>>>print(f.read())

Hello!World. Now the file has more content

>>>f=f.open(“text2.txt”,”w”)     //Will over write the content

>>>f.write(“Now the file has more content”)

>>>f.close()

>>>f=open(“text2.txt”.”r”)

>>>print(f.read())
```
Now the file has more content

