const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  // console.log(num)
}

const employee = {
  name: "Hi ASIF",
  designation: "QA",
  salary: 25000,
  experience: 3,
  age: 25,
};

for (const key in employee) {
  const value = employee[key];
  console.log(key, value);
}

const keys = Object.keys(employee);
console.log(keys);
for (const key of keys) {
  const value = employee[key];
}
