
let name = "Lokesh raj";
console.log(name);

// Cannot be a reserved keyword 6 
// Should be meaningful 7 
// Cannot start with a number (Iname)
// Cannot contain a space or hyphen (-)
// Are case sensitive

let firstname = "lokesh", lastname = "Raj";
console.log(lastname);


const intrestRate = 0.3;
//cannot reassign constant
console.log(intrestRate);


let age = 16; //number literal
let isapprove = false; //boolean and also undefined and null

//object
let person = {
    name: "john",
    age: 22,
    hight: 6.2
};

console.log(person);

//dot notation
person.name="Jonathan";
console.log(person);
//Bracket notation
person["name"] = "Janani" //can be used when user chooses what to change
console.log(person.name);

//Arrays
let selectedColours = ["red","blue","green"];
console.log(selectedColours);
console.log(selectedColours[1]);
//append
selectedColours[3] = 4;
console.log(selectedColours);

//typeof command in console is used to know the data type
//array is technically an object
console.log(selectedColours.length);

//performing a task
function greet(name,lastname) {
    console.log("Hello World " + name +" "+ lastname);
}
greet("Johnny","Plays");
greet("Kishore");

//calculate a value
function square(num){
    return num*num;
}
console.log(square(4));
