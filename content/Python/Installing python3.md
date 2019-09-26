---
title: Installing Python3
date: 2019-09-26
author: madhuri55
categories:
  - Python
---


### DOWNLOADING AND INSTALLING PYTHON:

You can download Python for Windows, OS X, and Ubuntu for free from http://python.org/downloads/. 

Be sure to download a version of Python 3 (such as 3.4.0).you’ll find Python installers for 64-bit and 32-bit computers for each operating system on the download page, so first figure out which installer you need. 

If you bought your computer in 2007 or later, it is most likely a 64-bit system. Otherwise, you have a 32-bit version, but here’s how to find out for sure.On Windows, select Start4Control Panel4System and check whether System Type says 64-bit or 32-bit. 

-On OS X, go the Apple menu, select About This Mac4More Info4 System Report4Hardware, and then look at the Processor Name field. If it says Intel Core Solo or Intel Core Duo, you have a 32-bit machine. If it says anything else (including Intel Core 2 Duo), you have a 64-bit machine. 

-On Ubuntu Linux, open a Terminal and run the command uname -m. A response of i686 means 32-bit, and x86_64 means 64-bit.

-On Windows, download the Python installer (the filename will end with .msi) and double-click it. Follow the instructions the installer displays on the screen to install Python, as listed here:

1. Select Install for All Users and then click Next. 

2. Install to the C:\Python34 folder by clicking Next. 

3. Click Next again to skip the Customize Python section.

-On Mac OS X, download the .dmg file that’s right for your version of OS X and double-click it. Follow the instructions the installer displays on the screen to install Python, as listed here:

1. When the DMG package opens in a new window, double-click the Python.mpkg file. You may have to enter the administrator password. 

2. Click Continue through the Welcome section and click Agree to accept the license.

3. Select HD Macintosh (or whatever name your hard drive has) and click Install.

-If you’re running Ubuntu, you can install Python from the Terminal by following these steps:

1. Open the Terminal window. 

2. Enter sudo apt-get install python3. 

3. Enter sudo apt-get install idle3. 

4. Enter sudo apt-get install python3-pip.

### STARTING IDLE:

While the Python interpreter is the software that runs your Python programs, the interactive development environment (IDLE) software is where you’ll enter your programs, much like a word processor. Let’s start IDLE now. 

-On Windows 7 or newer, click the Start icon in the lower-left corner of your screen, enter IDLE in the search box, and select IDLE (Python GUI).On Windows XP, click the Start button and then select Programs4 Python 3.44IDLE (Python GUI). 

-On Mac OS X, open the Finder window, click Applications, click Python 3.4, and then click the IDLE icon. On Ubuntu, select Applications4Accessories4Terminal and then enter idle3. (You may also be able to click Applications at the top of the screen, select Programming, and then click IDLE 3.) 

