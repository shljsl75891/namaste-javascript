// Toggling strict mode
"use strict";

/*  inside global space:
 *  this -> globalObject which can refer to different thing
 *  in different JS runtimes like
 *  in browser = window & in nodejs = global
 */
console.log(this);

/*
 * inside functional space: 2 scenarios => strict and non strict mode
 * this = (strict mode) depends on how function is invoked { runtime binding }
 * this = (strict mode) undefined or null -> (non strict mode) globalObject
 *
 * 'this substitution' : If the value of this keyword
 * anytime in strict mode = undefined or null,
 * that will be replaced with globalObject in non strict mode.
 */
function sampleFunction() {
  console.log(this);
}

sampleFunction(); // undefined (strict mode) & window (non strict mode)
window.sampleFunction(); // window (in both modes)

/*
 * inside object's methods
 * this = depends on how functions is invoked { runtime binding }
 * generally, this keyword refer to the object
 * but can be changed using sharing methods
 */
const obj = {
  a: 220,
  x: function () {
    console.log(this);
  },
};

obj.x(); // this = object

/*
 * What are sharing methods ? these methods exists in function's proto
 * 1. call() : using this method, we can do function borrowing
 *   eg. function.call(thisArg, param_1, param_2, ... param_n)
 * 2. apply() : same as call() with only difference in the way of passing args
 *   eg. function.apply(thisArg, [param_1, param_2, ... param_n])
 * 3. bind() : same signature of call() but returns a copy of function with
 * same functionality with binded this keyword value
 */
const student1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

const student2 = {
  firstName: "Sanket",
  lastName: "Singh",
};

const student3 = {
  firstName: "Hitesh",
  lastName: "Choudhary",
};

const printFullName = function (hometown, state) {
  console.log(`${this.firstName} ${this.lastName} from ${hometown} (${state})`);
};

// call method
printFullName.call(student1, "Dehradun", "Uttarakhand");

// apply method
printFullName.apply(student2, ["Surat", "Gujarat"]);

// bind method
const printName = printFullName.bind(student3, "Jaipur", "Rajasthan");
printName();

/*
 * behavior of this keyword inside arrow functions
 * () => {} don't provide their special this binding
 * but it retains the this keyword value
 * of enclosing lexical context
 * => this = this in it's lexical scope
 */
const obj1 = {
  a: 10,
  // normal function has its own this binding
  x: function () {
    console.log(this);
  },
  /* arrow function hasn't its own this binding
   * the function body behave as it is written in it's lexical context i.e. here globalSpace
   */
  y: () => {
    console.log(this);
  },
  z: function () {
    // arrow function's this will behave as it's body was
    // written in its parent z as b is lexically enclosed in z.
    const b = () => {
      console.log(this);
    };
    b();
  },
};

obj1.x(); // obj1
obj1.y(); // globalObject
obj1.z(); // obj1

/*
 * this keyword inside DOM => refers to HTML Elements
 */

// skipping this in classes, constructors as Akshay not covered OOPS in JS
