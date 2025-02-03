//Task 1 - Customer Discounts

let purchaseAmount = 5000; //Declare variable purchaseAmount
//Apply discount if purchaseAmount > 100
let discount = 0;
if (purchaseAmount > 100) {
    discount = purchaseAmount * 0.2;
}    
let finalAmount = purchaseAmount - discount;
console.log(`Final amount after discount: $${finalAmount}`);