// InterView question

// what is a TypeScript and how does it differ from javascript?
// ans-  TypeScript  is a superset of javascript that adds static types.
// its Provides type safety and better tooling support compared to Javascript.

// what are the basic type in typeScript?
// Basic types include number, string, boolean, null, undefined , void , unknow, and any.

// how do you declare a variable with a specific type in TypeScript.

// let age:number=30

// what is an interface in typeScript?
// An interface is a way to define a contract for classes or objects, specifying what properties and methods they should have.

// what is the purpose of type and interface in typescript?
// Both type and interface are used to define shapes of objects and functions.
//Interfaces are preferred for defining object structures and extanding class,
// while type is more flexible and can defined complex union  and intersection types.

// what are typeScript enums and how are they used?
// Enums are a way to define a set of named constants.
// They can be numeric or string-based.


// explanin the concept of union types in typeScript.
// Union types allow a variable to be one of several types.
// Example: let value :number | string.

// how do you handle optional properties in typeScript?
// optioanl properties are decleared with a question mark?
// after the property name. 
//Example:- interface User { name:string,age?:number}



// what are generics in typeScript and why are they useful?
// Generics allow you to create reusable components that can work with any data type.
// they help in maintaining type safety while writing reusable code.



// what is type inference in typescript?
// Type inference is TypeScript's ability to automatically deduce the tye of a variable based on its value.


// what are the gaurds and how do they work?
// Type  gaurds are functions or constructs that help TypeScript narrow down the type of a variable within a conditional block.



//explain type Script's type mapping and utility type like partial, pick and record.
//partial makes all properties optioanl, pick selects a subset of properties
//and record  create a type  with specified key and values.



// How does Type Script handle module resolution and what are the different startegies.
// Type Script handles module resolution based  on configuration option  like baseUrl
// paths and module resolution strategies include node.js and class.

// what are declaration file (d.ts) and how are they used?.
// declaration file provide type information  about javascript libraries. they help type Script understand types from 
// non typescript code.




//how do you work with advanced types like mapped type conditional types in typeScript?
//mapped types create new  types by transforming existing onces while conditional types provide a way to define 
// type based on conditions . example of conditional type : type TrueFalse<T>=T extends  true?Yes :'No'




// why do  we use tupples in type Script ? loopwhole  ofr limitation  when using tupples in typeScript ?

//A tupple is a special type of array in type script that allows you to define an array with  a fixed number 
// of element , each with a specific type .
// tuples are useful when you need to hetrogeneous collection of values.

// example of tupples loopwhole:

// let person:[string, number ]=["Alice", 30,];
// person[2]="newValue"