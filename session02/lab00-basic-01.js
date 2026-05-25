a = 10;

console.log("a = ", a, " - ", typeof(a));

a = 'hello world!!!'; 

console.log("a = ", a, " - ", typeof(a));

// define CONSTANT

const MAX = 10;

try {
    MAX = 100; 
    console.log(MAX);
} catch (err) {
    console.error('=> ERR: ', err.message);
}

// define variable

var b = 99; 
console.log("Global variable: ", b);

function show_variable() {
    console.log(b);
    let c = 100; 
    console.log(`Local variable c = ${c}`);
}

show_variable();

// console.log(`Outside of function: c = ${c}`);

// define object

let obj = [
    1, 
    2.5,
    {
        id: 99, 
        name: "product"
    }, 
    [1, 2, 3, 4, 5]
];

console.log(`Object obj = ${obj}`);