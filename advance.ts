console.log("advanced topic inferse ");

// type script itself knows which datatype   of vale is assigned. (based on datatype value)

let inferredNumber = 42;
//infers in ts

// const sumit: user = {
//   name: "sumit",
//   age: 22,
// };

//type is used as globally

// union juda hua

type Vehicle = {
  make: string;
  model: string;
};
type Car = Vehicle & {
  isElectric: boolean;
};

//result

let Carresult: Car = {
  make: "tesla",
  model: "Model S",
  isElectric: true,
};

let Person: string | object="Sumit" 

Person={
  name:'Ram'
}