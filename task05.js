/*1.What is the difference between var, let, and const?
Answer:
------
    var can be re-declared and re-assigned.
    let can be re-assigned but cannot be re-declared.
    const cannot be re-assigned or re-declared

example code:
=============
var name = "Rajesh";
let age = 27;
const city = "Virudhachalam";

console.log(name);
console.log(age);
console.log(city);*/

/*2.Can you re-declare a variable with var? What about let and const?
Answer:
-------
var → Yes, it can be re-declared.
let → No, it cannot be re-declared.
const → No, it cannot be re-declared.

example code:
=============
var x = 10;
var x = 20; // Allowed

let y = 10;
// let y = 20; // Error

const z = 10;
// const z = 20; // Error */

/*3: What is the output of this code?
var x = 5;

let y = 10;

const z = 15;

x = 20;

y = 25;

z = 30;

console.log(x, y, z);

Answer:
-------
    TypeError-const variables cannot be reassigned. Therefore, z = 30 causes an error.*/


/*4: What is the difference between declaring and initializing a variable?
Answer:
-------
    Declaration means creating a variable.==>let age;
    Initialization means assigning a value to a variable.==>let age = 20;*/


/*5: What will be the output?
let a;
console.log(a);

Answer:
-------
    undefined==>The variable is declared but no value is assigned.*/


/*6: What is hoisting? Give an example.
Answer:
-------
    Hoisting is a JavaScript behavior where variable and 
function declarations are processed before the code is executed.

example code:
=============
    console.log(x);
    var x = 10;*/


/*7: What is the difference between null and undefined?
Answer:
-------
    undefined means a variable has been declared but no value has been assigned.
example code:
=============
    let a;
    console.log(a);         ==undefined

    null means an empty or intentionally absent value.
example code:
=============
    let b = null;
    console.log(b);     ==null*/


/*8: What will be the output?
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
Answer:
=======
    object
    undefined
    object
    object*/

/*Operators:
==========
9: What is the difference between == and ===?
Answer:
-------
    == compares values and allows type conversion.
example code:
=============
    console.log(5 == "5");      ==>true

    === compares both value and data type.
example code:
=============
    console.log(5 === "5");      ==>false*/


/*    
10: What is the difference between ++i and i++?
Answer:
-------
    ++i is called pre-increment. The value is increased first and then used.
example code:
=============
    let i = 5;
    console.log(++i);           ==>6

    i++ is called post-increment. The current value is used first and then increased.
example code:
=============
    let i = 5;
    console.log(i++);           ==>5
*/


/*
11: What will be the output?
let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
Answer:
-------
    105
    5
    50
    2
*/

/*    
12: What are logical operators? Explain with examples.
Answer:
-------
    Logical operators are used to combine or reverse conditions.
    There are three main logical operators:
        && → AND
        || → OR
        ! → NOT
example code:
=============
    console.log(true && true);
    console.log(true || false);
    console.log(!true);
*/

/*    
13: What will be the output?
console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));
Answer:
-------
    true
    true
    false
*/

/*    
14: What is the ternary operator? Give an example
Answer:
-------
    The ternary operator is a short form of the if-else statement.
Syntax:
-------
    condition ? trueValue : falseValue;
example code:
=============
    let age = 20;
    let result = age >= 18 ? "Adult" : "Minor";
    console.log(result);                            ==>Adult
*/

/*    
Type Casting:
=============
15: What is the difference between implicit and explicit type casting?
Answer:
-------
    Implicit type casting means JavaScript automatically converts one data type into another.
example code:
============
    let x = "10";
    let y = 5;
    console.log(x + y);             ==>105

    Explicit type casting means the programmer manually converts the data type.
example code:
=============
    let x = "10";
    console.log(Number(x));             ==>10
*/


/*    
16: What will be the output?
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
Answer:
-------
    123
    NaN
    1
    0
    false
    true
*/

/*    
17: What is NaN? Give an example.
Answer:
-------
    NaN stands for Not a Number.
    It occurs when a value cannot be converted into a valid number.
example code:
=============
    let x = Number("hello");
    console.log(x);                 ==>NaN
*/


/*    
Conditional Statements:
========================
18: What is the difference between if-else and switch?
Answer:
-------
    if-else is used to check conditions.
example code:
=============
    if (age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }

    switch is used to compare one value with multiple fixed values.
example code:
============
    let day = 1;

    switch(day) {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;
    }
*/


/*    
19: What will be the output?
    let age = 20;
    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Minor");
    }
Answer:
-------
    Adult
*/

/*
20: What is nested if? Give an example.
Answer:
-------
    An if statement inside another if statement is called a nested if.
example code:
============
    let age = 20;
    let hasId = true;
    if (age >= 18) {
        if (hasId) {
            console.log("Allowed");
        }
    }                   ==>Allowed

*/

/*    
21: Write a program to check if a number is even or odd using ternary operator.
Answer:
=======
    let num = 10;
    let result = num % 2 === 0 ? "Even" : "Odd";
    console.log(result);            ==>Even

*/

/*
Loops:
======
22: What is the difference between while and do-while?
Answer:
-------
    while checks the condition first and then executes the code.
example code:
=============
    let i = 1;
    while (i <= 3) {
        console.log(i);
        i++;
    }
    do-while executes the code first and then checks the condition.
example code:
=============
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 3);
*/

/*    
23: What will be the output?
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
Answer:
--------
    1
    2
    3
    4
    5
*/

/*    
24: What is the difference between for-of and for-in?
Answer:
-------
    for-of is used to get the values of an array.
example code:
=============
    let fruits = ["Apple", "Mango", "Orange"];
    for (let fruit of fruits) {
        console.log(fruit);              ===>Apple,Mango,Orange
    }

    for-in is used to get the indexes or keys.
example code:
==============
    let fruits = ["Apple", "Mango", "Orange"];
    for (let index in fruits) {
        console.log(index);
    }                                           ===>0,1,2
*/

/*    
25: Write a program to find sum of numbers from 1 to 100.
Answer:
-------
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
*/

/*    
Arrays:
=======
26: What is the difference between slice and splice?
Answer:
-------
    slice() is used to extract a portion of an array. 
It does not change the original array
example code:
=============
    let arr = [1, 2, 3, 4, 5];
    let result = arr.slice(1, 4);
    console.log(result);
    console.log(arr);

    splice() is used to add or remove elements from an array. 
It changes the original array.
example code:
==============
    let arr = [1, 2, 3, 4, 5];
    arr.splice(1, 2);
    console.log(arr);

*/

/*27: What will be the output?
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

Answer:
-------
    [1, 2, 3]

*/

/*
Functions:
==========
28: What is the difference between function declaration and function expression?
Answer:
-------
    A function declaration is defined using the function keyword.
example code:
=============
    function greet() {
        console.log("Hello");
    }
    greet();

    A function expression stores a function inside a variable.
example code:
=============
    let greet = function() {
        console.log("Hello");
    };
    greet();
*/


/*29: What is an arrow function? Give an example.
Answer:
-------
    An arrow function is a shorter way to write a function.
example code:
=============
    let add = (a, b) => {
        return a + b;
    };
    console.log(add(10, 20));*/


/*30: What will be the output?
function greet() {
    return "Hello";
}
let message = greet();
console.log(message);
Answer:
-------
    Hello==>The greet() function returns "Hello", and 
that value is stored in the message variable.*/