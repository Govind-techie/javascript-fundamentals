/* 
Operator Precedence

Operator precedence determines the order in which operations are performed in an expression.
Higher precedence operators are evaluated before lower precedence ones.

Common Arithmetic Operator Precedence (from highest to lowest):
1. Parentheses         ( )      // Highest precedence: evaluated first
2. Exponentiation      **       // Next: right to left
3. Multiplication      *        // Left to right
   Division            /
   Modulus             %
4. Addition            +        // Left to right
   Subtraction         -

Examples:
1. Parentheses
   let result = (2 + 3) * 4; // (2 + 3) = 5, then 5 * 4 = 20

2. Exponentiation
   let result = 2 ** 3 ** 2; // 3 ** 2 = 9, then 2 ** 9 = 512

3. Multiplication, Division, Modulus
   let result = 10 * 2 / 5 % 3; // 10 * 2 = 20, 20 / 5 = 4, 4 % 3 = 1

4. Addition and Subtraction
   let result = 5 + 4 - 2; // 5 + 4 = 9, 9 - 2 = 7

Combining operators:
   let result = 2 + 3 * 4 ** 2; // 4 ** 2 = 16, 3 * 16 = 48, 2 + 48 = 50
*/

// 1. Parentheses
let parenthesesResult = (2 + 3) * 4;
console.log("Parentheses: (2 + 3) * 4 =", parenthesesResult); // (2 + 3) = 5, 5 * 4 = 20

// 2. Exponentiation
let exponentiationResult = 2 ** 3 ** 2;
console.log("Exponentiation: 2 ** 3 ** 2 =", exponentiationResult); // 3 ** 2 = 9, 2 ** 9 = 512

// 3. Multiplication, Division, Modulus
let multDivModResult = 10 * 2 / 5 % 3;
console.log("Multiplication/Division/Modulus: 10 * 2 / 5 % 3 =", multDivModResult); // 10 * 2 = 20, 20 / 5 = 4, 4 % 3 = 1

// 4. Addition and Subtraction
let addSubResult = 5 + 4 - 2;
console.log("Addition/Subtraction: 5 + 4 - 2 =", addSubResult); // 5 + 4 = 9, 9 - 2 = 7

// 5. Combined operators example
let combinedResult = 2 + 3 * 4 ** 2;
console.log("Combined operators: 2 + 3 * 4 ** 2 =", combinedResult); // 4 ** 2 = 16, 3 * 16 = 48, 2 + 48 = 50


