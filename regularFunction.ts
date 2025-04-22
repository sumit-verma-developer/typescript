// Regular Function

function add(a: number, b: number): number {
  return a + b;
}

console.log("add", add(2, 5));

//Function Expression

const multiply = function (a: number, b: number): number {
  return a * b;
};

console.log("multiply", multiply(6, 4));

// Arrow functions
const subtract = (a: number, b: number): number => {
  return a - b;
};

console.log("subtract", subtract(10, 5));

// optional
function greete(name: string, greeting?: string): string {
  return greeting ? `${greeting} ${name}` : `Hello Buddy ${name}`;
}

console.log(greete("sumit"));

console.log(greete("Ritik", "welcome to ts"));

// how to pass default parameters
function defaultParameters(
  name: string,
  greeting: string = "hi there"
): string {
  return `${greeting} ${name}`;
}

console.log(defaultParameters("defaultParms"));

//importent  restOperator

function sumOfSeriese(...number: number[]): number {
  return number.reduce((acc, curr) => curr + acc, 0);
}

console.log("sum of rest operator ", sumOfSeriese(1, 2, 3, 4, 5, 6, 7, 8, 9));

// using type
type Operation = (a: number, b: number) => number;

const AddNum: Operation = (a, b) => a + b;

console.log("AddNum",AddNum(1,3));
