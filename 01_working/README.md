# How Javascript actually works ?

**_Javascript is a Synchronous and Single threaded language. Everything in Javascript happens in Execution Context._**

<hr />

#### What is Execution Context ?

It is a special environment which handles the transformation and execution of javascript code. Javascript is not possible without this beautiful environment. It is like a big box which has two components:

![](../img/2024-03-17-15-10-56.png)

1. **Memory Component**: It is also known as _Variable environment_. This is the place where all our variables and functions are stored as key-value pairs.

1. **Code Component**: It is also known as _Thread of execution._ This is the just like a thread where all our code is executed line by line.

**Single threaded** means javascript can only execute one command at a time.<br/> **Synchronous** means it can execute multiple commands in specific order only. It can execute next line, once the current line is executed.
