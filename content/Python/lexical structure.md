---
title: lexical structure
date: 2019-09-26
author: DimpleGalla
categories:
  - Python
---



### Python lexical structure

The lexical structure of a programming language is the set of basic rules that govern how you write programs in that language. It is the lowest-level syntax of the language and specifies such things as what variable names look like and which characters denote comments. In Python language, we have comments, variables, literals, operators, delimiters, and keywords.

### Python comments

Comments are used by humans to clarify the source code. All comments in Python language follow the # character.



### Python variables

A variable is an identifier which holds a value. In programming we say that we assign a value to a variable. Technically speaking, a variable is a reference to a computer memory, where the value is stored. In Python language, a variable can hold a string, a number, or various objects like a function or a class. Variables can be assigned different values over time.

Variables in Python can be created from alphanumeric characters and the underscore _ character. A variable cannot begin with a number. This way the Python interpreter can easier distinguish between a number and a variable.

Value

value2

company_name

These are valid identifiers.

12Val

exx$

first-name

These are examples of invalid identifiers.

The variables are case sensitive. This means that Price, price, and PRICE are three different identifiers.


<br />


number = 10

Number = 11

NUMBER = 12



print(number, Number, NUMBER)
<br />
In our script, we assign three numeric values to three identifiers. While it is possible to define three variables differing in their case, it is not considered a good programming practise.


10 11 12

This is the output of the script.

### Python literal

A literal is any notation for representing a value in a Python source code. Technically, a literal is assigned a value at compile time, while a variable is assigned at runtime.

age = 29<br />
nationality = "Hungarian"

Here we assign two literals to variables; number 29 and string "Hungarian" are literals.


### Python operators

An operator is a symbol used to perform an action on some value.

+  &nbsp&nbsp&nbsp&nbsp  - &nbsp&nbsp&nbsp&nbsp   ~  &nbsp&nbsp&nbsp&nbsp  * &nbsp&nbsp&nbsp&nbsp   ** &nbsp&nbsp&nbsp&nbsp   /   &nbsp&nbsp&nbsp&nbsp //

%  &nbsp&nbsp&nbsp&nbsp  <<  &nbsp&nbsp&nbsp&nbsp  >> &nbsp&nbsp&nbsp&nbsp   &   &nbsp&nbsp&nbsp&nbsp | &nbsp&nbsp&nbsp&nbsp   ^

and &nbsp&nbsp&nbsp&nbsp   or  &nbsp&nbsp&nbsp&nbsp  not &nbsp&nbsp&nbsp&nbsp   in  &nbsp&nbsp&nbsp&nbsp  not in 

is  &nbsp&nbsp&nbsp&nbsp  is not  &nbsp&nbsp&nbsp&nbsp  <  &nbsp&nbsp&nbsp&nbsp  >  &nbsp&nbsp&nbsp&nbsp  !=  &nbsp&nbsp&nbsp&nbsp  <>

==  &nbsp&nbsp&nbsp&nbsp  <=  &nbsp&nbsp&nbsp&nbsp  >=

This is a list of operators available in Python language. We will talk about operators later in the tutorial.

### Python indentation

Indentation is used to delimit blocks in Python. Where other programming languages use curly brackets or keywords such as begin, end, Python uses white space. An increase in indentation comes after certain statements; a decrease in indentation signifies the end of the current block. The Python style guide recommends using four spaces per indentation level.
```python
if age > 18:

    print("adult person")

for i in range(5):

    print(i)
```
After the if keyword a code block is expected. A new statement is started on a new line, indented with four space characters. The indentation for the following for keyword is decreased back to the initial one. The for keyword starts a new code block, where its statement(s) are indented.

### Python delimiters

A delimiter is a sequence of one or more characters used to specify the boundary between separate, independent regions in plain text or other data stream.

(  &nbsp&nbsp&nbsp&nbsp    )   &nbsp&nbsp&nbsp&nbsp    [  &nbsp&nbsp&nbsp&nbsp     ] &nbsp&nbsp&nbsp&nbsp      {  &nbsp&nbsp&nbsp&nbsp     }      

,  &nbsp&nbsp&nbsp&nbsp     :   &nbsp&nbsp&nbsp&nbsp    .   &nbsp&nbsp&nbsp&nbsp    ` &nbsp&nbsp&nbsp&nbsp      =   &nbsp&nbsp&nbsp&nbsp    ;

+=    &nbsp&nbsp&nbsp&nbsp  -=  &nbsp&nbsp&nbsp&nbsp    *=   &nbsp&nbsp&nbsp&nbsp   /=  &nbsp&nbsp&nbsp&nbsp    //=  &nbsp&nbsp&nbsp&nbsp   %=

<=  &nbsp&nbsp&nbsp&nbsp    |=  &nbsp&nbsp&nbsp&nbsp    ^=  &nbsp&nbsp&nbsp&nbsp    >>=  &nbsp&nbsp&nbsp&nbsp   <<=    &nbsp&nbsp&nbsp&nbsp **=

'   &nbsp&nbsp&nbsp&nbsp    "  &nbsp&nbsp&nbsp&nbsp     \   &nbsp&nbsp&nbsp&nbsp    @

Delimiters are used in various area of the Python language. They are used to build expressions, string literals, tuples, dictionaries, or lists.

### Python keywords

A keyword is a reserved word in the Python programming language. Keywords are used to perform a specific task in a computer program. For example, import other code, do repetitive tasks or perform logical operations. A programmer cannot use a keyword as an ordinary variable.

and  &nbsp&nbsp&nbsp&nbsp     del  &nbsp&nbsp&nbsp&nbsp     global   &nbsp&nbsp&nbsp&nbsp   not  &nbsp&nbsp&nbsp&nbsp   with   

as  &nbsp&nbsp&nbsp&nbsp      elif  &nbsp&nbsp&nbsp&nbsp    if  &nbsp&nbsp&nbsp&nbsp        or  &nbsp&nbsp&nbsp&nbsp     yield

assert &nbsp&nbsp&nbsp&nbsp   else  &nbsp&nbsp&nbsp&nbsp    import  &nbsp&nbsp&nbsp&nbsp    pass  &nbsp&nbsp&nbsp&nbsp   False

break  &nbsp&nbsp&nbsp&nbsp   except &nbsp&nbsp&nbsp&nbsp   in  &nbsp&nbsp&nbsp&nbsp        raise &nbsp&nbsp&nbsp&nbsp   None 

class &nbsp&nbsp&nbsp&nbsp    finally &nbsp&nbsp&nbsp&nbsp  is   &nbsp&nbsp&nbsp&nbsp       return &nbsp&nbsp&nbsp&nbsp  True     

continue &nbsp&nbsp&nbsp&nbsp for  &nbsp&nbsp&nbsp&nbsp     lambda  &nbsp&nbsp&nbsp&nbsp    try     

def  &nbsp&nbsp&nbsp&nbsp     from  &nbsp&nbsp&nbsp&nbsp    nonlocal  &nbsp&nbsp&nbsp&nbsp  while     

This is a list of Python keywords.

This was the Python lexical structure.

