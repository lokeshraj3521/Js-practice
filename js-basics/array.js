let fruits=["apple","orange","banana"];

fruits.join("*");
console.log(fruits.join("*"));
fruits.push("coconut");//add element
fruits.pop();//deleat last elemrnt
fruits.unshift("mango");//adds at the front
fruits.shift();//removes first element

console.log(fruits);
console.log(fruits[2]);

//dot operators
let numoffruits = fruits.length;
let index = fruits.indexOf("orange");

console.log(numoffruits);
console.log(index);

//iterate an array
for(let i=0; i<fruits.length;i+=2){
    console.log(fruits[i])
}
console.log(" ");

for(let fruit of fruits){
    console.log(fruit)
}

//sort 
fruits.sort()
console.log(fruits);
//sort reverse
fruits.sort().reverse();
console.log(fruits);

//array is variable like structure that could hold more than one value
