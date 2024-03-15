export function addition(a, b) {
  return a + b;
}

export function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a + b;
}

export function mod(a, b) {
  return a % b;
}

export default function printMessage() {
  console.log("HELLO WORLD !!!");
}

export { multiplication as Multiply, division as Divide };
