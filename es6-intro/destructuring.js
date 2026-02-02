// ObjectDestructuring
const device = { brand: "One Plus", price: 25000 };
const { brand, price } = device;
console.log(brand, price);

// ArrayDestructuring
const numbers = [1, 2, 3, 4, 5];
const [one, two, three, four, five] = numbers;
console.log(one, two, three, four, five);

const [English, Math] = [80, 75];
console.log(English, Math);
