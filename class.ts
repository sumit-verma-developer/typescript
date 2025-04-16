// Class and uses

// (like name) ko initialize krne ke liye chahiye hota hain constructor.

class BuddyName {
  name?: string;

  // constructor basically initialised the values which is defind for that class .

  constructor(name?: string) {
    this.name = name;
  }
}

// creating a instance of the Person class
const person1 = new BuddyName();
const person2 = new BuddyName("typeScript");

console.log(person1);
console.log(person2);

class hiBuddy {
  // public, mein name is required Access kr pa rhe hain hiBuddy ko.
  // public write nhi karoge tab bhi wo invisible hota hain.
  public name: string;

  // class ke bahar private access nhi kr paoge  only class ke ander access kr skte hain.
  // Private ko bahar access krne ke liye getter method use krte hain
  //Private members are accessible only within a class and cannot be accessed outside, even by derived (extending) classes.
  private age: number;

  //protected  only access within a class
  protected address: string;

  //   readonly birthDate: string;
  birthDate: string;

  // constructor basically initialised the values which is definde for that class .
  constructor(name: string, age: number, address: string, birthDate: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.birthDate = birthDate;
  }

  // Private ko bahar access krne ke liye getter method use krte hain
  public getAge(): number {
    return this.age;
  }

  // setter method
  public setAddress(address: string): void {
    this.address = address;
  }
}

// creating a instance of the Person class
const hiBuddyPerson = new hiBuddy("sumit ", 27, "India", "10/6/1994",);

console.log(hiBuddyPerson.name);

//private
//class ke bahar private access nhi kr paoge  like this
//   console.log(hiBuddyPerson.age);
console.log(hiBuddyPerson.getAge());

//protected -  hiBuddy class ko inherit krke   Manager class ke ander hum Address ko access kr skte hain.
//protected ko extends krke inherit kr skte hain.
class Manager extends hiBuddy {
  // constructor(age:number,address:string){
  // this.address=address
  // }
}

//read only
console.log((hiBuddyPerson.birthDate = "5 may 1993"));


// setterMethod
hiBuddyPerson.setAddress("America")
console.log(hiBuddyPerson);
