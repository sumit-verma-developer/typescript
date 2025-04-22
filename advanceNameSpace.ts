// namespaces
// In TypeScript, a namespace is a way to logically group related code and avoid name collisions, especially in larger applications.
//It’s similar to modules but used primarily for organizing code in a single file or multiple files (before ES6 modules became the standard).




namespace registerValidation {
    export function validateName(name: string): boolean {
      return name.trim().length > 0; // trims spaces and checks for empty string
    }
  }
  
  const isValid = registerValidation.validateName("sumit");
  
  console.log(isValid); // Output: true
  
