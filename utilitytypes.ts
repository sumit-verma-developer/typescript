// utility types

interface Animal {
  name?: string;
  sound?: string;
  color: string;
}

// type PartialAnimal=Partial<Animal>;

type requiredAnimal = Required<Animal>;
const puppy: requiredAnimal = {
  name: "Tommy",
  sound: "",
  color: "",
};

type readOnlyAnimal = Readonly<Animal>;
const dog: readOnlyAnimal = {
  name: "Tommy",
  sound: "",
  color: "",
};

// In record pass two arguments
type Records = Record<string, any>;
const record: Records = {
  name: {},
};

//pick only one item
type NameOnly = Pick<Animal, "name">;
let cat: NameOnly = {
  name: "sophie",
};

// omit means  remove kr diya or filter kr diya
type omitOnly = Omit<Animal, "name">;
let rabit: omitOnly = {
  color: "red",
  sound: "cheep",
};
