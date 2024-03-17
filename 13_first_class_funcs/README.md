# Functions are <3 of Javascript

**Anonymous Functions:** These are the functions without any name or identity. These are used always as values.

```javascript
// anonymous function
var a = function () {
  console.log("a is called");
};
```

#### What is the difference between function statement and function expression?

- There is difference of hoisting between them. Function statements are hoisted as whole function body with its name, whereas function expression are hoisted as normal variables.
- Means we can call function statements before its declaration but function expression will be undefined before its declaration.

#### Why we can't call named function expressions?

Because named function expressions are not scope outside of that expression. It is treated as local variable within that function expression. But, it will be not defined outside that scope.

```javascript
xyz(); // ReferenceError: xyz not defined
c(); // TypeError: c is not a function

var c = function xyz() {
  /* xyz will be treated as function statement here
   * in this functional execution context
   */
  console.log(xyz); // no error, xyz is local variable here
};

c(); // c is called
xyz(); // ReferenceError: xyz not defined
```

#### Difference between parameters and arguments ?

```javascript
/*
 *message here is parameter and
 *will be treated as local variable in
 *this functional execution context
 */
function printMessage(message) {
  console.log(message);
}

printMessage("namaste"); // namaste is argument here
```

_Parameters_ are local variables of function in which we pass values as _Arguments_.

#### What are First Class Functions ?

Functions are very beautiful <3 in javascript.

- Just like we can use them as values, we can also use them as arguments to another functions and it will copied into parameters of that function.
- And moreover, we can return functions from functions. That's crazy !!!

```javascript
// First class functions
function d(param1) {
  param1(); // I am parameter
  return function () {
    console.log(param1);
  };
}

const e = d(function () {
  console.log("I'm parameter");
});
e(); // f() { console.log("I am parameter"); }
```

So, the ability of functions to be used as values, arguments and return values is called **First Class Functions or Citizens**.
