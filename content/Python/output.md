---
title: output
date: 2019-09-26
author: SireeshaBandari
categories:
  - Python
---



### OUTPUT:

We use the print() function to output data to the standard output device (screen).

for example,

### PROGRAM CODE:
```python
def area_of_rectangle(width,height):

          return  width*height

def  area_of_circle(radius):

          return   3.14* radius**2

width=int(input("enter width"))

height=int(input("enter height"))

radius=int(input("enter radius"))

A_R=area_of_rectangle(width,height)

A_C=area_of_circle(radius)

print("Areaof rectangle: " A_R,"Area of circle:",A_C)
```
### OUTPUT:

enter width: 4

enter height: 16

enter radius: 7

Area of rectangle: 64

Area of circle: 154

