// alias are used for assigning the type definition
//"Aliases are used for assigning type definitions in TypeScript."

//Or, more naturally:

//"Type aliases are used to define custom types in TypeScript."

type UserID = string | object;

type UserDetail = {
  id: UserID;
  name: string;
  email: string;
};

let userId: UserID = "3";
