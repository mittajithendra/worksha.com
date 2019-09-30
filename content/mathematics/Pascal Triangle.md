---
title: Pascal Triangle
date: 2019-09-30
author: varuntheruler
categories:
  - mathematics
  - Data Structures
---


### PASCAL TRIANGLE
#### PROGRAM DISCRIPTION:
         This is a python programme to print
the pascal triangle for n number of rows given as
an input.
         Number of rows is given by the user and
the pascal triangle having n number of rows is printed.

### ALGORITHM:
      1.Take in the number of rows the triangle should have
and store it in a seperate variable.
<br />
      2.Using for loop which ranges from 0 to n-1,append the
 sub-lists into the list.
<br />
      3.Then append 1 into sub-lists.
<br />
      4.Then use a for loop to determine the value of the

number inside the triangle.
<br />
      5.Print the pascal triangle acording to the format.
<br />
      6.Exit.

### source code:

       ```python  

           n = int(input("enter number of rows"))

           a = []

           for i in range(n):

               a.append([])

               a[i].append(1)

               for j in range(1,i):

                   a[i].append(a[i-1][j-1]+a[i-1][j])

               if(n!=0):

                   a[i].append(1)

           for i in range(n):

               print(" "*(n-i),end = " ",sep = "  ")

               for j in range(0,i+1):

                   print('{0:5}'.format(a[i][j]),end=" ",sep="  ")

               print()
```


### INPUT:

    enter number of rows:4



### OUTPUT:

      1

    1    1

  1    2    1

1   3     3   1



### EXPLANATION:
        When user enters the number of rows that the pascal's triangle
have,the for loop is used to append sub-lists into an empty list which is
declared earlier.
       Then 1 is appended into all the sub-list.then another for
loop is used to determine the value of the number inside the triangle which 
is the sum of two numbers above it.
       The other for loop is used to print the pascal's triangle according
to that format.



### TIME COMPLEXITY:
      The time complexity of the above given programme is O(n^3).