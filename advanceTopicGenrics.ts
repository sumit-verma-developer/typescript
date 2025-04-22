// Generics
// what is generics -- generics in type script is powerfull feature that allow you to recreate reusible and flexcible component
// you can create components that can work with any data type while still maintaing the type.

//By chatGpt
// What is Generics?
// Generics in TypeScript is a powerful feature that allows you to create reusable and flexible components.
// It enables you to write functions, classes, and interfaces that can work with any data type while still maintaining type safety and code readability.
// Keywords: Generics, Reusability, Type Safety, Flexibility, Type Inference, Constraints, T, K, V, Generic Functions, Generic Interfaces, Generic Classes

function identity<T>(args: T): T {
  return args;
}

let numberIdentity = identity<number>(11);
let stringIdentity = identity<string>("sumit");

interface Pair<R, S> {
  first: R;
  second: S;
}
// yha abstraction mil rha hain jb esko create  kr rhe hain tb define ho rha hain

let numberStringPair: Pair<number, string> = {
  first: 1,
  second: "ho there",
};

let BooleanStringPair: Pair<string, boolean> = {
  first: "is Boolean",
  second: true,
};

 