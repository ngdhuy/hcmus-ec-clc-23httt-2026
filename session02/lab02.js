function sum(a, b) {
    return a + b;
}

let a = 10; 
let b = '20';
console.log(`Sum(a, b) = ${sum(a, b)}`);

// anonymous function
const swap = function (a, b) {
    let c = a; 
    a = b; 
    b = c;
}

swap(a, b);
console.log(`a = ${a} - b = ${b}`);

// arrow function
const swap_2 = (a, b) => {
    let c = a.value;
    a.value = b.value; 
    b.value = c;
}

let o_a = { value: 100 };
let o_b = { value: '200' };

swap_2(o_a, o_b);
console.log(`o_a = ${o_a.value} - o_b = ${o_b.value}`);

// arrow function
const double_value = (a) => a * 2;
console.log(double_value(5));