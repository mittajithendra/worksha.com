---
title: Password detect
date: 2019-09-19
author: DimpleGalla
categories:
  - strings
---

### Program :
 A list of passwords of danny’s facebook account.All passwords length is odd.But Sunny knows that Danny is a big fan of palindromes.so, his password and reverse of his password both should be in the list.You have to print the length of Danny’s password and it’s middle  character.
### DESCRIPTION :
Here we will have number of possible passwords  and list of all possible passwords of danny’s account among which both a password and its palindrome exists.so we have to find a password which is in the input  and also has its palindrome in the input.
### INPUT AND OUTPUT : 
The first line of input contains an integer N, the number of possible passwords.Each of the following N lines contains a single word, its length being an odd number greater then 2 and lesser than 14.All characters are lowercase letters of the English alphabet. 
### PROGRAM  : 
```python
N = int(input())
s = []
a=0
for i in range(N):
  x = str(input())
  x.casefold()
  s.append(x)
for i in range(N):
     if(2<len(s[i])<14 and len(s[i])%2!=0):
           for j in range(i+1,N):
                  if s[i]==s[j][::-1]:
                       a = i
                       break
length=len(s[a])
print (length,s[a][length//2])
```

 
### SAMPLE INPUT:
4
abc
def
 fgh
cba
### SAMPLE OUTPUT:
3 b
### TIME COMPLEXITY:
The time complexity of this program is O(n^2).
