// FunctionDeclaration
function functionName(parameter1, parameter2) {
  const result = parameter1 + parameter2;
  //   console.log(result);
  return result;
}
functionName(10, 20); // CallTheFunction

// FunctionExpression
const variableName = function (parameter1, parameter2) {
  const result = parameter1 + parameter2;

  //   console.log(result);
  return result;
};
variableName(15, 10); // CallTheFunction

// SingleLine / Simple - ArrowFuntion
const varriableNameAF = (parameter1, parameter2) => parameter1 + parameter2;
const result = varriableNameAF(20, 20);
// console.log(result);

const isFirstBig = (x, y) => x > y;
const isBig = isFirstBig(40, 25);
// console.log(isBig);

// MultiLine - ArrowFunction
const functionNameAF = (parameter1, parameter2) => {
  const result = parameter1 + parameter2;
  console.log(result);
};
functionNameAF(15, 10); // CallTheFunction
