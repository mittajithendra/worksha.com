---
title: conditional statements
date: 2019-09-26
author: madhuriodugu
categories:
  - Python
---


### CONDITIONAL STATEMENTS:

1.if statement

2.else statement

3.elif statement

4.Nested if

### if statement:

   An if statement’s clause (that is, the block following the if statement) will execute if the statement’s condition is True. The clause is skipped

if the condition is False.

syntax:

if(condition):
   #statements

for example, 
```python
if(n==0):
   print("number is zero")
```
### else statement:

An if clause can optionally be followed by an else statement. The else clause is executed only when the if statement’s condition is False. 

syntax:
```python
if(condition):
   #statements

else:
   #statements
```
for example,
```python
if(n==0):
      print("number is zero")
else:
       print("number is nonzero")
```
### elif statement:

While only one of the if or else clauses will execute, you may have a case where you want one of many possible clauses to execute. The elif statement is an “else if” statement that always follows an if or another elif statement. It provides another condition that is checked only if any of the previous conditions were False. In code, an elif statement always consists of the following: 

for example,
```python
if name == 'Diya':    
     print('Hi, Diya.') 
elif age < 12:    
     print('You are not Diya, kiddo.') 
```
### Nested if statement:

if statement inside an another if statement

for example,

#largest number in a,b,c
```python
if(a>b):
   if(a>c):
      print("a is largest",a)

   else:
      print("c is largest",c)

else:
   if(b>c):
      print("b is largest",b)
   else:
      print("c is largest",c)

```