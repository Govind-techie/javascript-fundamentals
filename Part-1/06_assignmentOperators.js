/*
Assignment Operators in JavaScript

Basic Assignment Operator
=   Simple assignment
    let x = 5;        // Assigns 5 to x

Compound Assignment Operators
+=  Addition
    x += 3;           // x = x + 3

-=  Subtraction    
    x -= 2;           // x = x - 2

*=  Multiplication
    x *= 4;           // x = x * 4

/=  Division
    x /= 2;           // x = x / 2

%=  Modulus
    x %= 3;           // x = x % 3

Example Usage:
let number = 10;      // Start with 10
number += 5;          // 15  (10 + 5)
number -= 3;          // 12  (15 - 3)
number *= 2;          // 24  (12 * 2)
number /= 4;          // 6   (24 / 4)
number %= 4;          // 2   (6 % 4)
*/

// Assignment (=)
let a = 5;
console.log("After 'let a = 5;', a =", a); // 5

// Addition assignment (+=)
a += 3; // a = a + 3
console.log("After 'a += 3;', a =", a); // 8

// Subtraction assignment (-=)
a -= 2; // a = a - 2
console.log("After 'a -= 2;', a =", a); // 6

// Multiplication assignment (*=)
a *= 4; // a = a * 4
console.log("After 'a *= 4;', a =", a); // 24

// Division assignment (/=)
a /= 2; // a = a / 2
console.log("After 'a /= 2;', a =", a); // 12

// Modulus assignment (%=)
a %= 5; // a = a % 5
console.log("After 'a %= 5;', a =", a); // 2

