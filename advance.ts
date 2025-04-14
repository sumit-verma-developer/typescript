console.log("advanced topic inferredNumber");

// type script itself knows which datatype   of vale is assigned. (based on datatype value)
//inferse in ts

let inferredNumber = 42;

// const sumit: user = {
//   name: "sumit",
//   age: 22,
// };

// union

type Vehicle = {
  make: string;
  model: string;
};
type Car = Vehicle & {
  isElectric: boolean;
};

//result

// let Carresult:Car =  {
//   make: string;
//   model: string;
//   isElectric: boolean;
// };
