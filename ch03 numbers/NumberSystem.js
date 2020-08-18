console.log(0.1 + 0.2 === 0.3);
console.log((0.3) - (0.1 + 0.2) < Number.EPSILON);

/* Integer Rounding*/
console.log("=== Integer rounding ===");

console.log(5 / 4);

console.log(Math.floor(5 / 4));
console.log(Math.round(5 / 4));
console.log(Math.ceil(5 / 4));

console.log(Math.floor(0.9));
console.log(Math.floor(1.1));

console.log(Math.round(0.49));
console.log(Math.round(0.5));

console.log(Math.round(2.9));
console.log(Math.ceil(0.1));

/* Number.EPSILON */
console.log("=== Epsilon ===");

function numberEquals(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3));

/* Maximums */
console.log("=== Maximus ===");

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1);
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2);

/* Minimums */
console.log("=== Minimums ===");

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER + 1);
console.log(Number.MIN_SAFE_INTEGER + 1 === Number.MIN_SAFE_INTEGER + 2);

console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE + 1);
console.log(Number.MIN_VALUE + 1 === Number.MIN_VALUE + 2);

/* Infinity */
console.log("=== Infinity ==="); 

console.log(Infinity);
console.log(Infinity > Number.MAX_SAFE_INTEGER);
console.log(-Infinity < Number.MAX_SAFE_INTEGER);

/* -Infinity < Number.MIN_SAFE_INTEGER < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER < Number.MAX_VALUE < Infinity */

/* Number Algorithms */

// SEE PrimerNumber.js

// SEE PrimeFactorization.js

/* Random Number */
// number between 0 and 1
console.log("=== Random Numbers ===");
console.log(Math.random() * 100);
console.log(Math.random() * 25+5);
console.log(Math.random() * 10-100);

console.log(Math.floor(Math.random() * 100));
console.log(Math.round(Math.random() * 25+5));
console.log(Math.ceil(Math.random() * 10-100));

