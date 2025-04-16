interface User {
  name: string;
  age: number;
}

let personDetail: User = {
  age: 22,
  name: "sumit",
};

//  interface extend kr skte hain jisse pichhe ki values inherit ho jati hain (like union).

interface carInterfacee extends Vehicle {
  isElectric: boolean;
}

const iCar: Car = {
  isElectric: true,
  make: "Tesla",
  model: "S series",
};

// declaration merging and create optional using this ? key

interface carInterface {
  make: string;
  model?: string;
}
interface carInterface {
  isElectric: boolean;
}

const CarDetails: carInterface = {
  make: "Tesla",
  
  isElectric: true,
};

//interview Question - declaration  and merging is the most importent key difference.
//you can define with the same name that will be  autometically merge but in the type you can not do that use union operation then merge.
