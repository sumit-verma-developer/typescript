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









// public, mein name is required Access kr pa rhe hain hiBuddy ko.
// public write nhi karoge tab bhi wo invisible hota hain.

class hiBuddy {
  public name: string;
  private age: number;
  // class ke bahar private access nhi kr paoge  only class ke ander access kr skte hain.
  //  Private ko bahar access krne ke liye getter method use krte hain

  // constructor basically initialised the values which is definde for that class .
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // Private ko bahar access krne ke liye getter method use krte hain
public getAge():number{
    return this.age
}

}

// creating a instance of the Person class
const hiBuddyPerson = new hiBuddy("sumit ", 27);

console.log(hiBuddyPerson.name);

//private
//class ke bahar private access nhi kr paoge  like this
//   console.log(hiBuddyPerson.age);
console.log(hiBuddyPerson.getAge());
