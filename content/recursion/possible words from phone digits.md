---
title: Possible words from phone digits
date: 2019-09-19
author: varuntheruler
categories:
  - recursion
---
## PROGRAM DESCRIPTION:

  Here, you will get python program to print
all possible combinations of strings for
the given phone number(digits) that is selected.

### 1.ALGORITHM:
    This program is used to print all the possible combinations
    of strings for that given phone number in lexicographical order.
    
    We use recursion function call method to execute this program.
    Initially we have to initialize a list with strings 
which are alphabet present on the phone number digits.
  i.e.,element with index 2 as "abc"
       element with index 3 as "def" etc..
  -------------------------------
The user will be asked to provide an input.
That input will be taken as a list and if the index value 
of the list is equal to the length of the list then the output
will be printed
       i.e..,if value==n:
                 print(''.join(word),end=" ")
                 return
         ".join()" is used to convert string into list.
initially word is taken as empty list[].

 ### 2.SOURCE CODE:
 ```python
     phone_digits = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
     
     def words(number,value,word,n):
         if value==n:
             print(''.join(word),end=" ")
             return

         for i in range(len(phone_digits[number[value]])):
             word.append(phone_digits[number[value]][i])
             words(number,value+1,word,n)
             words.pop()
     print("Enter the number with spaces:")
     number=list(map(int,input().split())) #map() converts string into list
     n=len(number)
     words(number,0,[],n)
"""initially value is taken as 0 and word as an empty list."""
```
 ### 3.INPUT:
  
     2 3

 ### 4.OUTPUT:
    ad ae af bd be bf cd ce cf

 ### 5.EXPLANATION FOR INPUT AND OUTPUT:
    When user enters a number as 2 3 then it converts them as [2,3] and as initially
value is taken as 0 and length of the number list is 2 and as 0!=2 therefore for loop 
is executed.
From that for loop a letter present in the 0th index of an number list and 2nd index of 
phone_digit list i.e.., a is appended to the word which is empty list initially.
later the value is incremented by 1(value+1) and now the value becomes 3 and the letter "d"is 
appended to the word where "a" is already present therefore the word becomes 'ad'.
         and so on..the possible letters will be printed in lexicographical order
the output will be:
        ad  ae af bd be bf cd ce cf.


 ### 6.TIME COMPLEXITY:
   
     The time complexity of above program is O(4^n).
Since, the keys 0 and 1 does not have any corresponding alphabet
and many digits has 3 characters as there corresponding alphabet
therefore,4^n will be the upper bound of number of words and not 
the minimum words.
Here, "n is number of digits in input number."
