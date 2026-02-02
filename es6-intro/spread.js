const numbers = [5, 25, 625];
// console.log(numbers);
// console.log(...numbers);

// GetMaxNumber
// const maxNumber = Math.max(5, 25, 625);
const maxNumber = Math.max(...numbers);
// console.log(maxNumber);

const first = [1, 2, 3];
const second = [...first];
second.push(4, 5);
// console.log(first, second);

// Note: Spread operator can be use to copy an array

const total = (a, b, c) => a + b + c;
const result = total(5, 10, 15);
const digits = [25, 35, 45];

console.log(result);
total(...digits);
