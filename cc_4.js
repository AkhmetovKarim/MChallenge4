//Task 1 - Customer Discounts

let purchaseAmount = 5000; //Declare variable purchaseAmount
//Apply discount if purchaseAmount > 100
let discount = 0;
if (purchaseAmount > 100) {
    discount = purchaseAmount * 0.2;
}    
let finalAmount = purchaseAmount - discount;
console.log(`Final amount after discount: $${finalAmount}`);

//Task 2 - Sales Report
let sales = [500, 600, 700, 800, 900]; //Declare an array
let totalSales = 0; //Initialize count variable
for (let i=0; i< sales.length; i++) { //Use a  for loop to calculate total sales
totalSales += sales[i];// Add each sale
}
console.log(`Total Sales: $${totalSales}`); //Log

//Task 3 - Inventory Depletion
let stock = 10; //Declare stock variable
while (stock > 0) { //Use a while loop to decrease stocj until reaches 0
    console.log(`Available Stock: ${stock}`);
    stock--; //Subtracts stock by 1
}
console.log("Stock is empty") //Log

//Task 4 - Customer Survey
let responses = 0; //Declare a variable responses
do {               //Use a do while loop to collec responses
    console.log(`Responses: ${responses}`);
    responses++; 
} while (responses < 3);
console.log("Survey complete"); //Log

//Task 5 - Employee Information
let employee = { // Declare an employee object with properties
    name: "Alice",
    position: "Manager",
    salary: 75000
};
for (let key in employee) {     //Use for in loop to iterate thru object properties
    console.log(`${key}: ${employee[key]}`); //Log
}

//Task 6 - Product Listings
let products = ["Laptop", "Mouse", "Keyboard"]; //Declare an array
for (let product of products) {                 //Use for of loop to display each product
    console.log(`Product: ${product}`);         //Log
}

//Task 7 - Order processing
let orders = [101, 102, 103]; //Declare an array
orders.forEach((order, index) => {   //Use forEach to log each other ID
    console.log(`Order ${index + 1}: ID ${order}`);
});

//Task 8 - Tax Collection
const amount = 35000;  //Declare variable amount
const taxRate = 0.17;  //Declare variable taxRate
const tax = calculateTax(amount, taxRate);   
function calculateTax(amount, taxRate) { //Use a function to calculate sales tax
    return amount * taxRate;
}
console.log(`Sales Tax: $${tax}`); //Log 