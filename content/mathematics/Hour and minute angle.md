---
title: Angle Between Hour and Minute hand
date: 2019-09-30
author: varuntheruler
categories:
  - mathematics
  - Data Structures
  - clock problems
---

### PROGRAM DESCRIPTION:
<br>
       This problem is known as clock angle problem.
where we need to find angle between handsof an analog
clock at a given time.
       here user should provide input of hour and minute.
and angle between them is found by tking reference to 12:00.

### ALGORITHM:
<br>
      Firstly calculate the angle made by hour hand with 
respect to 12:00 in h hours and m minutes.
      Secondly Calculate the angle made by minute hand with respect
to 12:00 in h hours and m minutes.
      The difference between two angles is the difference between
two hands.

### SOURCE CODE:
```python
def calc_angle(h,m):

    if(h<0 or m<0 or h>12 or m>60):

        print("wrong input")

    if (h==12):

        h=0

    if (m==60):

        m=0

    hour_angle = 0.5*(h*60+m)

    minute_angle= 6*m

    angle = abs(hour_angle-minute_angle)

    mangle = min(360-angle,angle)

    return angle

h = int(input("enter h value"))

m = int(input("enter m value"))

print(calc_angle(h,m))

```

### INPUT:
<br>
     enter h value=3
     enter m value=30

### OUTPUT:
<br>
    75.0

### EXPLANATION:
<br>
The minute hand moves 360 degrees in 60 minutes (6 degrees in 1 min)
and the hours hand moves 360 degrees in 12 hours(0.5 degrees in 1 min).
     In h hours and m minutes, the minute hand would move(h*60+m)*6
and hour hand would move (h*60+m)*0.5.
       therfore,as h = 3 and m = 30<br />
                   abs((3*60+30)*0.5)-((3*60+30)*6))=75.0 degrees
                   <br />
   i.e..,the angle between hour and minute hand is 75.0 degrees.


### TIME COMPLEXITY:
<br />
      The time complexity for above programme is O(1).