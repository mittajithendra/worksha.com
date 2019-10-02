---
title: Monk and Trees
date: 2019-09-22
author: madhuriodugu
categories:
  - strings
---

### Problem:
Today, Monk went for a walk in a garden. There are many trees in the garden and
each tree has an English alphabet on it. While Monk was walking, he noticed that all
trees with vowels on it are not in good state. He decided to take care of them. So, he
asked you to tell him the count of such trees in the garden.

### Description:
In this problem we take string as input. We check each character of input string
and print no .of vowels which gives count of trees that are not in good state
### Input and Output:
The first line consists of an integer T denoting the number of test cases.
Each test case consists of only one string, each character of string denoting the
alphabet (may be lowercase or uppercase) on a tree in the garden.
### Output : 
gives no of trees not in good state
### Code:
```python
t=int(input())
while(t):
    t-=1
    s=input()
    s=s.lower()
    c=0
    for i in s:
        if i=='a' or i=='e' or i=='i' or i=='o' or i=='u':
            c+=1
    print(c)

```
### Sample input:
2<br />
AsiutOre<br />
ouIaPifhj
### Sample output:
5<br />
4

### Time Complexity:
The time complexity of this program is O(n)
