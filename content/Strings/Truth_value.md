---
title: Truth Value
date: 2019-09-22
author: SireeshaBandari
categories:
  - strings
---



### Problem:
You have been given two strings, A and B (of length N each) and Q queries.
The strings contain only 0s and/or 1s.
For every query, you are given an index i. You have to update the value at index i to 1 in
string B and check if B is lexicographically equal to or larger than A or not.
If yes, then print &quot;YES&quot; and if not, print &quot;NO&quot; (without quotes).
### Description:
In the given program we take two integers and two strings as input. We compare the two
strings and print “YES” if they are equal else “NO”.
### Input and Output:
First line contains two space-separated integers N and Q. Next line contains the string A.
Next line contains the string B.
### Output: For each query, print the desired output in a new line.
### Code:
```python
li=list(map(int,input().split()))
n=li[0]
q=li[1]
a=input()
b=input()
def truthvalue(a,b,n,q):
    x=int(a,2)
    y=int(b,2)
    for i in range(0,q):
        if(y>=x):
        print("YES")
        else :
            b=list(b)
            if b[i]=='0':
                b[i]='1';
                b="".join(b)
                y=int(b,2)
                if(y>=x):
                    print("YES")
                else :
                    print("NO")
            else :
                print("NO")
truthvalue(a,b,n,q)
```
### Sample input:
5 5
11111
00010
### Sample output:
NO
NO
NO
NO
YES
### Time Complexity:
The time complexity of this program is O(n).