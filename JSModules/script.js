// Default and named exports
import PrintMsg, {
  addition as Add,
  Multiply,
  Divide as divide,
  subtraction,
  mod,
} from "./utility.js";

// Module Object
import * as Utility from "./utility.js";

// Named export renamed
printResult(Add(12, 32));
printResult(subtraction(62, 32));
printResult(Multiply(12, 32));
printResult(divide(12, 32));
printResult(mod(12, 9));

// Default export renamed
PrintMsg();

// Default export using module object
Utility.default();

// Named exports using module object
printResult(Utility.addition(12, 32));
printResult(Utility.Multiply(12, 32));
printResult(Utility.Divide(12, 6));
printResult(Utility.subtraction(52, 32));
printResult(Utility.mod(36, 6));

function printResult(result) {
  console.log(result);
}

/**
 *
 * Output
 *
 * 44
 * 30
 * 384
 * 44
 * 3
 * HELLO WORLD !!!
 * HELLO WORLD !!!
 * 44
 * 384
 * 18
 * 20
 * 0
 */
