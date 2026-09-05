//TASK -01:
//=========
/*
var name = "Arun";
let age = 25;
const city = "Chennai";
var college = "ABC College";

console.log(name);
console.log(age);
console.log(city);
console.log(college);

name = "Priya";
console.log(name);

age = 26;
console.log(age);

console.log(city);

var name = "Kumar";
console.log(name);
*/
//TASK-02:
//=========
/*
console.log("Hello JavaScript");

alert("Welcome to JavaScript");

let result = confirm("Do you like JavaScript?");
console.log(result);

let name = prompt("Enter your name:");
console.log(name);

document.writeln("Welcome to JavaScript");

*/
//TASK-03:
//=========
/*
let name = prompt("Enter your name:");
let age = prompt("Enter your age:");
let city = prompt("Enter your city:");
let qualification = prompt("Enter your qualification:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("Qualification:", qualification);
*/

//TASK-04:
//========
/*
let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);

*/
//TASK-05:
//========
/*
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);
console.log("Second student:", students[1]);
console.log("Last student:", students[students.length - 1]);
console.log("Total students:", students.length);

*/
//TASK-06:
//========
/*
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.E", "M.E"]
};

console.log("Employee Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log("Last Qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working Status:", employee.isWorking);

*/
//TASK-07:
//========
/*
let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

*/
//TASK-08:
//========
/*
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log("Total Price:", total);

*/
//TASK-09:
//========
//1.
/*
let a = 10;

let b = a++;

console.log(a);
console.log(b);
*/
//2.
/*
let a = 10;

let b = ++a;

console.log(a);
console.log(b);
*/
//3.
/*
let a = 10;

let b = a--;

console.log(a);
console.log(b);
*/
//4.
/*
let a = 10;

let b = --a;

console.log(a);
console.log(b);

*/
//TASK-10:
//========
/*
let num = 10;

num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);

num /= 4;
console.log(num);

num %= 3;
console.log(num);

num **= 2;
console.log(num);

*/
//TASK-11:
//========
/*
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");
*/
//TASK=12:
//========
/*
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

*/
//TASK-13:
//========
/*
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

*/
//TASK-14:
//========
/*
console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));
*/
//TASK-15:
//========
/*
console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");

*/
//TASK-16:
//========
/*
let age = 20;

let result = age >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result);

*/
//TASK-17:
//=======
/*
let password = true;

let result = password ? "Login successful" : "Wrong password";

console.log(result);

*/
//TASK-18:
//========

//Using +
/*
let name = "Naveen";
let age = 25;
let city = "Trichy";

console.log("My name is " + name + ". I am " + age + " years old. I live in " + city + ".");
*/
//Using Template Literal
/*
let name = "Naveen";
let age = 25;
let city = "Trichy";

console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);

*/
//TASK-19:
//=======
/*
let a = String(100);
let b = String(true);
let c = String(undefined);
let d = String(null);
let e = String([1, 2]);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);

*/
//TASK-20:
//========
/*
console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

*/
//TASK-21:
//========
/*
console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));
*/
//TASK-22:
//========
/*
let age = Number(prompt("Enter your age:"));

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

*/
//TASK-23:
//========
/*
let number = Number(prompt("Enter a number:"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

*/
//TASK-24:
//========
/*
let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80) {
    console.log("B Grade");
} else if (marks >= 70) {
    console.log("C Grade");
} else if (marks >= 60) {
    console.log("D Grade");
} else {
    console.log("Fail");
}

*/
//TASK-25:
//========
/*
let age = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height:"));
let weight = Number(prompt("Enter your weight:"));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("You are not selected because weight is below 60");
        }
    } else {
        console.log("You are not selected because height is below 160");
    }
} else {
    console.log("You are not selected because age is below 18");
}

*/
//TASK-26:
//=========
/*
let color = prompt("Enter traffic light color:");

switch (color) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}
*/
//TASK-27:
//========
/*
let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}
*/

//TASK-28:
//========

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");

let tamil = Number(prompt("Enter Tamil mark:"));
let english = Number(prompt("Enter English mark:"));
let maths = Number(prompt("Enter Maths mark:"));

let total = tamil + english + maths;
let average = total / 3;

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}

console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);