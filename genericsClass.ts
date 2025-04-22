// create a generic data structure

//Generics in TypeScript is a powerful feature that allows you to create reusable and flexible components.

class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
console.log("numberStack", numberStack);
console.log("numberStack", numberStack.pop());



const stringStack = new Stack<string>();
stringStack.push("sumit");
console.log("numberStack", stringStack);