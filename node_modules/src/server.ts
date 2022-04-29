let myName: String = "Mary";
console.log(myName);

//type annotations, we can use : string to explicitly specify that we want to use a string

let id: number = 5;
let isFun: boolean = true;
let x: any = "Any String";
let age: number;
age = 30;

//you can specify a type for an array
let ids: number[] = [1, 2, 3, 4, 5];
ids.push(6);
console.log("ids array 1-6: " + ids);

//Tuple-you can specify types within an array
let person: [number, string, boolean] = [1, "Mary", true];
console.log("tuple array number string boolean: " + person);

//Tuple array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "Sarah"],
  [3, "Jane"],
]

console.log("Tuple Array: number, string: " + employee);

//Union--this could be a string or a number
let productId: string | number;
productId = "22";

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right
}

//by default these will have values of 0, 1, 2, 3
console.log("Direction1 UP:  " + Direction1.Up + " Down " + Direction1.Down + " Left " + Direction1.Left + " Right " + Direction1.Right);


//Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: "Carmela"
}

console.log("------------------");
console.log(user.id + " " + user.name);

console.log("------------------");

//Type assertion
let cid: any = 1;
let customerId = <number>cid;
//or you could say:
// let customerId = cid as number;

//we can specify the return type for each parameter and the return type
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(5, 6));
console.log("------------------");

//if there's not a return type, you can use the void return type
function log(message: string | number): void {
  console.log(message);
}

console.log(log("This is a function with a void return type."));
console.log(log(5553334444));

console.log("------------------");

//Interfaces. When using an object, you may want to use an interface instead of a type.
//type can be used with primitives and unions
// use a ? question mark for an optional property of the interface
//you can set a property to readonly

interface UserInterface {
  id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: "Janet",
}

console.log("id:" + user1.id + " name: " + user1.name);

console.log("------------------");

//You can also use an interface with functions.
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x + y;
const sub: MathFunc = (x: number, y:number): number => x - y;

console.log(add(10, 5));
console.log(sub(10, 5));

console.log("------------------");

//Classes.
//The properties are public by default
//you could also create an interface and implement it in the class
//you could also create another class and use the extends keyword

class Person {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

console.log(brad.id + " " + brad.name);
console.log(brad, mike);

console.log(brad.register());

console.log("------------------");

//Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(["Brad", "John", "Jill"]);

// numArray.push("hello");  //we can't do this bc we used a generic in the function and then defined the type in the variable



console.log("------------------");

function foo(bar) {
  return "Hello " + bar;
}

let baz = "World";

console.log(foo(baz));

//remember to control s, atom doesn't autosave
console.log("------------------");

//in the tsconfig.json, set "noImplicitAny": false otherwise the code below will throw an error for not specifying the type. Or, specify a type for every variable.
function showNumberPlusOne(input : number) {
  return input + 1;
}

console.log(showNumberPlusOne(1));

//to run: in your terminal, naviagate to this project directory, type tsc and enter. tsc is the compiler for TypeScript
