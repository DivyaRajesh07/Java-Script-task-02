//Task 1 — Student Result Analyzer
//==================================
function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {
    let total = mark1 + mark2 + mark3 + mark4 + mark5;
    let average = total / 5;
    let grade;

    if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    let result;
    if (average >= 50) {
        result = "Pass";
    } else {
        result = "Fail";
    }
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}
studentResult("Arun", "Computer Science", 85, 90, 78, 88, 92);



//Task 2 — Employee Salary Calculator
//=====================================
let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


//Task 3 — Product Filter System
//=================================

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

// Products above ₹2,000
//=======================
let above2000 = products.filter(function(product) {
    return product.price > 2000;
});
console.log("Products above ₹2,000:", above2000);

// Only electronics
//=================
let electronics = products.filter(function(product) {
    return product.category === "electronics";
});
console.log("Electronics:", electronics);

// First product below ₹1,000
//==============================
let below1000 = products.find(function(product) {
    return product.price < 1000;
});
console.log("First product below ₹1,000:", below1000);

// Total price
//==============
let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);
console.log("Total Price:", totalPrice);

// Any product above ₹50,000
//=============================
let anyAbove50000 = products.some(function(product) {
    return product.price > 50000;
});
console.log("Any product above ₹50,000:", anyAbove50000);

// Every product above ₹500
//==========================
let everyAbove500 = products.every(function(product) {
    return product.price > 500;
});
console.log("Every product above ₹500:", everyAbove500);


//Task 4 — Employee Management
//==============================

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Priya",
        role: "HR",
        salary: 35000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Designer",
        salary: 50000
    },
    {
        id: 105,
        name: "Divya",
        role: "Developer",
        salary: 55000
    },
    {
        id: 106,
        name: "Karthi",
        role: "Manager",
        salary: 60000
    }
];

// Display all employee names
//===========================
let names = employees.map(function(employee) {
    return employee.name;
});
console.log("Employee Names:", names);

// Employees earning above ₹40,000
//=================================
let above40000 = employees.filter(function(employee) {
    return employee.salary > 40000;
});
console.log("Employees above ₹40,000:", above40000);

// Find employee with ID 103
//============================
let employee103 = employees.find(function(employee) {
    return employee.id === 103;
});
console.log("Employee with ID 103:", employee103);

// Total salary
//==============
let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);
console.log("Total Salary:", totalSalary);

// Highest-paid employee
//========================
let highestPaid = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }
});
console.log("Highest Paid Employee:", highestPaid);

// Sort highest salary to lowest
//===============================
let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});
console.log("Salary High to Low:", sortedEmployees);

// New array containing only employee names
//==========================================
let employeeNames = employees.map(function(employee) {
    return employee.name;
});
console.log("Employee Names Array:", employeeNames);


//Task 5 — Shopping Cart
//=======================

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    // Item total
    //=============
    cart.forEach(function(item) {
        item.total = item.price * item.quantity;
    });
    console.log("Cart Items:", cart);

    // Total cart value
    //=====================
    let totalCartValue = cart.reduce(function(total, item) {
        return total + item.price * item.quantity;
    }, 0);

    // Discount
    //============
    let discount = 0;
    if (totalCartValue > 50000) {
        discount = totalCartValue * 10 / 100;
    }

    // Final amount
    //===============
    let finalAmount = totalCartValue - discount;
    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);



//Task 6 — Student Search System
//================================

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// Display all student names
//===========================
let studentNames = students.map(function(student) {
    return student.name;
});
console.log("Student Names:", studentNames);

// Students above 80
//===================
let above80 = students.filter(function(student) {
    return student.mark > 80;
});
console.log("Students above 80:", above80);

// Find Priya
//============
let priya = students.find(function(student) {
    return student.name === "Priya";
});
console.log("Priya:", priya);

// Average mark
//==============
let totalMarks = students.reduce(function(total, student) {
    return total + student.mark;
}, 0);
let averageMark = totalMarks / students.length;
console.log("Average Mark:", averageMark);

// Check whether anyone failed
//=============================
let anyoneFailed = students.some(function(student) {
    return student.mark < 50;
});
console.log("Anyone Failed:", anyoneFailed);

// Check whether everyone scored above 40
//=======================================
let everyoneAbove40 = students.every(function(student) {
    return student.mark > 40;
});
console.log("Everyone scored above 40:", everyoneAbove40);

// Sort students by marks
//=========================
let sortedStudents = [...students].sort(function(a, b) {
    return b.mark - a.mark;
});
console.log("Students sorted by marks:", sortedStudents);


//Task 7 — Array Transformation Challenge
//=============================================

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

// Numbers × 2
//=============
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log("Numbers × 2:", doubled);

// Even numbers
//==============
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// Numbers greater than 15
//==========================
let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});
console.log("Numbers greater than 15:", greaterThan15);

// First number greater than 20
//==================================
let firstGreater20 = numbers.find(function(number) {
    return number > 20;
});
console.log("First number greater than 20:", firstGreater20);

// Total
//========
let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);
console.log("Total:", total);

// Any number greater than 40
//============================
let anyGreater40 = numbers.some(function(number) {
    return number > 40;
});
console.log("Any number greater than 40:", anyGreater40);

// Every number is positive
//===========================
let everyPositive = numbers.every(function(number) {
    return number > 0;
});
console.log("Every number is positive:", everyPositive);

// Highest to lowest
//===================
let sortedNumbers = [...numbers].sort(function(a, b) {
    return b - a;
});
console.log("Highest to Lowest:", sortedNumbers);


//Task 8 — String Analyzer
//=========================

let sentence = prompt("Enter a sentence:");
console.log("Original Sentence:", sentence);

// Total characters
//==================
console.log("Total Characters:", sentence.length);

// Uppercase
//============
console.log("Uppercase:", sentence.toUpperCase());

// Lowercase
//============
console.log("Lowercase:", sentence.toLowerCase());

// Contains JavaScript
//=====================
console.log("Contains JavaScript:", sentence.includes("JavaScript"));

// First character
//==================
console.log("First Character:", sentence.slice(0, 1));

// Last character
//================
console.log("Last Character:", sentence.slice(-1));

// Number of words
//=================
let words = sentence.split(" ");
console.log("Number of Words:", words.length);

// Replace JavaScript with Python
//================================
console.log("Replaced Sentence:", sentence.replace("JavaScript", "Python"));

// Convert sentence into array
//===============================
console.log("Sentence Array:", sentence.split(" "));


//Final Mini Project — Employee Dashboard
//=========================================

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List
//==================
console.log("----- EMPLOYEE LIST -----");

employees.forEach(function(employee) {
    console.log(
        employee.id,
        employee.name,
        employee.department,
        employee.salary,
        employee.experience
    );
});


// 2. Search Employee by Name
//================================
let searchName = "Priya";
let searchedEmployee = employees.find(function(employee) {
    return employee.name === searchName;
});
console.log("----- SEARCH RESULT -----");
console.log(searchedEmployee);


// 3. Department Filter
//======================
let department = "IT";
let departmentEmployees = employees.filter(function(employee) {
    return employee.department === department;
});
console.log("----- IT EMPLOYEES -----");
console.log(departmentEmployees);


// 4. Salary Filter
//==================
let salaryEmployees = employees.filter(function(employee) {
    return employee.salary > 50000;
});
console.log("----- SALARY ABOVE ₹50,000 -----");
console.log(salaryEmployees);


// 5. Total Company Salary
//===========================
let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);
console.log("----- TOTAL COMPANY SALARY -----");
console.log("Total Salary: ₹" + totalSalary);


// 6. Highest Salary
//====================
let highestSalary = employees.reduce(function(highest, employee) {
    if (employee.salary > highest.salary) {
        return employee;
    } else {
        return highest;
    }

});
console.log("----- HIGHEST SALARY -----");
console.log(highestSalary);


// 7. Experience More Than 3 Years
//==================================
let experiencedEmployees = employees.filter(function(employee) {
    return employee.experience > 3;
});
console.log("----- EXPERIENCE ABOVE 3 YEARS -----");
console.log(experiencedEmployees);


// 8. Sort Low to High
//======================
let lowToHigh = [...employees].sort(function(a, b) {
    return a.salary - b.salary;
});
console.log("----- SALARY LOW TO HIGH -----");
console.log(lowToHigh);


// Sort High to Low
//===================
let highToLow = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});
console.log("----- SALARY HIGH TO LOW -----");
console.log(highToLow);


// 9. Statistics
//==================
let averageSalary = totalSalary / employees.length;
console.log("----- STATISTICS -----");
console.log("Total Employees:", employees.length);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));