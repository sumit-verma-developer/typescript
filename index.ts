// Run this in your ts folder
//yarn global add ts-node
// config ts
// tsc --init

// Run ts
// ts-node index.ts

console.log("Hello typeScript");

let a: number = 22;
let array: number[] = [1, 2, 34, 4];
let arrayStr: string[] = ["sumit", "suno"];
let arrayBool: boolean[] = [true];
// let bigint: bigint = 123123123123n;

let user: object = {
  name: "Ritik",
  age: 33,
};

let userDetails: { name: string; age: number } = {
  name: "Ritik",
  age: 33,
};

let userdata: null = null;

// new in js (Tupples) - hetrogeneous  nature Array(mixture of another data type)
let tuple: [number, string, boolean, number] = [1, "sumit", true, 3];

// const [getter,setter]=useState(second)  this is tupple

// enums are  constant

enum Color {
  Primary = "Red",
  secondry = "blue",
}

let mycolor: Color = Color.Primary;

//use any
let anything: any = "could be a string";
anything = 12;

// unknow - not sure which type of datatype
let notsure: unknown = 5;
if (typeof notsure === "number") {
  notsure.toFixed();
}
if (typeof notsure === "string") {
  notsure.charAt(1);
}

// Never-- value or function kuchh return nhi krne wali hain no output

function infinite(): never {
  while (true) {}
}

function infiniteloop(message: string): never {
  throw new Error(message);
}

//void---- jo kuch  return na  kre, action perform krte hain.
function subtractt(): void {
  console.log(2 + 2);
}
