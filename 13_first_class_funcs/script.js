// Function Statement or Declaration
function a() {
  console.log("a is called");
}

// Function Expression
var b = function () {
  console.log("b is called");
};

// Named Function Expression
var c = function xyz() {
  console.log(xyz);
};

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
