// typeAssertions  wo type Assume krna jo aane wala ho  like props .

// const route={
//     params:2
// };

// const value=route.params as number;



// tyepAssertion
let someValue:any="this is string";

let strlength:number=(someValue as string).length // first way 

let strlength1:number=(<string>someValue).length // second way 



