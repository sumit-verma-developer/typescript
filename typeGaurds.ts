// type Gaurds
// type gaurd allow you to create more specific types checks within code blocks .

function isString(value: any): value is string {
  return typeof value === "string";
}

function checking(value: string | number) {
  if (isString(value)) {
    console.log("yes this is string ");
  } else {
    console.log("this is number");
  }
}

checking(3535);
// console.log(checking(3535));

// index signature
//allow you to define types for dynamic property  keys (add  dynamic property  keys)

interface StringArray {
  [index: number]: string;
}

let myarray: StringArray;

myarray = ["sumit", "typescript"];

let mystr: string = myarray[0];
console.log("mystr", mystr);

// keyof operator  only find key

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

let male: PersonKeys = "name"; // ✅ valid key of Person

console.log(male); // Output: name
