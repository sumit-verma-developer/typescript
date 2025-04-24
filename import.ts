// module Es6

//ek saath pura file export kr skte hain * (star) se  aur sb kuch use kr skte hain ek single name se .

import * as MathExport from "./mathExport";
// second way
import { add, PI, Calculator } from "./mathExport";

console.log("MathExport", MathExport.add(2, 2));

// class use krne ke liye instance create krke hi access kr skte hain.
const calc = new MathExport.Calculator();
console.log("calc", calc.add(3, 4));
console.log("calc", calc.multiply(3, 4));
