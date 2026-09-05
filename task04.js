
// TASK 1 - For Loop
// ==================
/*
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

// TASK 2 - Reverse Number
// ========================
/*
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
*/

// TASK 3 - Even Numbers
// =====================
/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

// TASK 4 - Odd Numbers
// =====================
/*
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
*/

// TASK 5 - Multiplication Table
// ==============================
/*
let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

*/
// TASK 6 - While Loop Countdown
// ===============================
/*
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

*/
// TASK 7 - Sum of Numbers
// ========================
/*
let j = 1;
let sum = 0;

while (j <= 10) {
    sum = sum + j;
    j++;
}

console.log(sum);

*/
// TASK 8 - Do While
// ==================
/*
let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);

*/
// TASK 9 - Do While Understanding
// ===============================
/*
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

*/
// TASK 10 - For Of String
// ========================
/*
let name = "javascript";

for (let character of name) {
    console.log(character);
}

*/
// TASK 11 - For Of Array
// ======================
/*
let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

*/
// TASK 12 - Student Names
// ========================
/*
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}

*/
// TASK 13 - Employee Object
// ==========================
/*
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

*/
// TASK 14 - Product Object
// =========================
/*
let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}
*/

// TASK 15 - Simple Function
// ==========================
/*
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

*/
// TASK 16 - Function With Parameter
// =================================
/*
function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");
*/
// TASK 17 - Multiple Parameters
// ==============================
/*
function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 25, "IT");
student("Priya", 24, "HR");
student("Kumar", 26, "ECE");

*/
// TASK 18 - Addition Function
// ============================
/*
function add(x, y) {
    return x + y;
}

let result = add(10, 20);

console.log(result);

*/
// TASK 19 - Salary
// =================
/*
function salary(amount) {
    return amount;
}

let salaryResult = salary(50000);

console.log(salaryResult);

*/
// TASK 20 - Bonus Calculator
// ===========================
/*
function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let total = bonus(50000, 5000);

console.log("Total =", total);

*/

// TASK 21 - Default Parameter
// ============================
/*
function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");
*/

// TASK 22 - Named Function
// =========================
/*
function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));

*/

// TASK 23 - Anonymous Function
// ==============================
/*
let calculate = function (x, y) {
    return x + y;
};

let calculateResult = calculate(10, 20);

console.log(calculateResult);

*/

// TASK 24 - Arrow Function
// =========================
/*
let multiply = (x, y) => {
    return x * y;
};

let multiplyResult = multiply(10, 5);

console.log(multiplyResult);

*/

// TASK 25 - Scope
// ================

/*
function test() {

    if (true) {

        var scopeA = 10;
        let scopeB = 20;
        const scopeC = 30;

        console.log(scopeA);
        console.log(scopeB);
        console.log(scopeC);
    }

    console.log(scopeA);
}

test();

*/

// TASK 26 - Var Hoisting
// ========================
/*
console.log(hoistA);

var hoistA = 10;
*/

// TASK 27 - Let Hoisting
// ========================

// console.log(hoistB);
// let hoistB = 20;


// ===============================
// TASK 28 - Const Hoisting
// ===============================

// console.log(hoistC);
// const hoistC = 30;


// TASK 29 - IIFE
// ===============
/*

(function () {
    console.log("Welcome to JavaScript");
})();


(function (product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

*/

// TASK 30 - Callback / Higher Order
// ================================
/*
function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

*/

// TASK 31 - Generator Function
// ===============================
/*
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackResult = cashback();

for (let value of cashbackResult) {
    console.log(value);
}

*/

// TASK 32 - Employee Management System
// =====================================
/*
let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];
*/

// 1. for...of
/*
console.log("----- ALL EMPLOYEES -----");

for (let employee of employees) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.department);
    console.log(employee.role);
    console.log(employee.salary);
    console.log("----------------");
}

*/
// 2. for...in
/*
console.log("----- EMPLOYEE DETAILS -----");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}

*/
// 3 & 4. Function + Parameters
/*
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

console.log("----- DISPLAY EMPLOYEE -----");

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}
*/

// 5. Return Salary
/*
function getSalary(employee) {
    return employee.salary;
}

console.log("----- SALARY -----");

for (let employee of employees) {

    let employeeSalary = getSalary(employee);

    console.log(employee.name + " Salary:", employeeSalary);
}

*/
// 6. Condition
/*
console.log("----- SALARY CHECK -----");

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }
}
*/

// 7. Arrow Function
/*
let addBonus = (salary, bonus) => {
    return salary + bonus;
};

console.log("----- BONUS CALCULATION -----");

let totalSalary = addBonus(40000, 5000);

console.log("Total Salary:", totalSalary);

*/
// 8. Generator

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("----- EMPLOYEE BENEFITS -----");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}