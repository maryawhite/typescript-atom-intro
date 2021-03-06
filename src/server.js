var myName = "Mary";
console.log(myName);
//type annotations, we can use : string to explicitly specify that we want to use a string
var id = 5;
var isFun = true;
var x = "Any String";
var age;
age = 30;
//you can specify a type for an array
var ids = [1, 2, 3, 4, 5];
ids.push(6);
console.log("ids array 1-6: " + ids);
//Tuple-you can specify types within an array
var person = [1, "Mary", true];
console.log("tuple array number string boolean: " + person);
//Tuple array
var employee;
employee = [
    [1, "Brad"],
    [2, "Sarah"],
    [3, "Jane"],
];
console.log("Tuple Array: number, string: " + employee);
//Union--this could be a string or a number
var productId;
productId = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
//by default these will have values of 0, 1, 2, 3
console.log("Direction1 UP:  " + Direction1.Up + " Down " + Direction1.Down + " Left " + Direction1.Left + " Right " + Direction1.Right);
var user = {
    id: 1,
    name: "Carmela"
};
console.log("------------------");
console.log(user.id + " " + user.name);
console.log("------------------");
//Type assertion
var cid = 1;
var customerId = cid;
//or you could say:
// let customerId = cid as number;
//we can specify the return type for each parameter and the return type
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 6));
console.log("------------------");
//if there's not a return type, you can use the void return type
function log(message) {
    console.log(message);
}
console.log(log("This is a function with a void return type."));
console.log(log(5553334444));
console.log("------------------");
var user1 = {
    id: 1,
    name: "Janet"
};
console.log("id:" + user1.id + " name: " + user1.name);
console.log("------------------");
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
console.log(add(10, 5));
console.log(sub(10, 5));
console.log("------------------");
//Classes.
//The properties are public by default
//you could also create an interface and implement it in the class
//you could also create another class and use the extends keyword
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered.");
    };
    return Person;
}());
var brad = new Person(1, "Brad Traversy");
var mike = new Person(2, "Mike Jordan");
console.log(brad.id + " " + brad.name);
console.log(brad, mike);
console.log(brad.register());
console.log("------------------");
//Generics
function getArray(items) {
    return new Array().concat(items);
}
var numArray = getArray([1, 2, 3, 4]);
var strArray = getArray(["Brad", "John", "Jill"]);
// numArray.push("hello");  //we can't do this bc we used a generic in the function and then defined the type in the variable
console.log("------------------");
function foo(bar) {
    return "Hello " + bar;
}
var baz = "World";
console.log(foo(baz));
//remember to control s, atom doesn't autosave
console.log("------------------");
//in the tsconfig.json, set "noImplicitAny": false otherwise the code below will throw an error for not specifying the type. Or, specify a type for every variable.
function showNumberPlusOne(input) {
    return input + 1;
}
console.log(showNumberPlusOne(1));
//to run: in your terminal, naviagate to this project directory, type tsc and enter. tsc is the compiler for TypeScript
