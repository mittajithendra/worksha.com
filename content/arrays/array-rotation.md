---
title: Array Rotation
date: 2019-09-17
author: mittajithendra
categories:
  - arrays
  - Data Structures
---

Input array is given and an Integer x.Now we print the output after x rotations of an array to the left.

After x rotations means xth element comes to starting point of an array and o to x-1 comes at the end of an array.We apply the same concept in below program.

### Python Program

```python
    def array_rotation(arr,x):
        arr=arr[x:]+arr[:x]
        return arr
    arr=list(map(int,input().split()))
    x=int(input())
    print(array_rotation(arr,x))
```

### Input

2 3 4 5 6 7 8 9<br />
3

### Output

[5, 6, 7, 8, 9, 2, 3, 4]
