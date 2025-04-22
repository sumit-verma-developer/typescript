// Literral types in typescript (exact value - constant value)

//string Literal type // number // object // boolean //mix 

type Greeting ="Hello" | 2 | "kya haal chaal"

function greet(greeting:Greeting){
    console.log(greeting);
    
}

greet('kya haal chaal')