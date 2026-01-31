let product_name = "Berge Blocks";
let costPerUnit = 12.50;
let basePrice = 19.99;
let discountRate = 0.15; // 15% discount
let salestaxRate = 0.07; // 7% tax
const fixedMonthlyCosts = 200; // Fixed monthly costs in dollars

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salestaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log(`Product Name: ${product_name}`);
console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
console.log(`Final Price with Tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per Unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-Even Units per Month: ${breakEvenUnits}`);
console.log(`Is Profitable per Unit: ${isProfitablePerUnit}`);