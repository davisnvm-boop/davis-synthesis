/*
  Name: Davis
  Date: 10 October 2026
  CS341 Synthesis project - B's Chop Bar
*/

console.log("Page Loading...");

// global variables
const BAR_NAME = "B's Chop Bar";
const TAX_RATE = 0.15;
const DISCOUNT_RATE = 0.10;

// the menu, in the same order as the form
let items = ["Jollof Rice", "Waakye", "Banku & Tilapia", "Sobolo"];
let prices = [35, 30, 60, 10];

console.log(typeof BAR_NAME);
console.log(typeof TAX_RATE);
console.log(typeof prices);

// put the bar name on the page
document.getElementById("bar-name").textContent = BAR_NAME;
document.getElementById("footer-name").textContent = BAR_NAME;

// cost of one line on the bill
function lineCost(price, qty) {
  return price * qty;
}

// adds the tax to an amount
function calculateTotal(amount) {
  let tax = amount * TAX_RATE;
  return amount + tax;
}

// runs when the "Work out my bill" button is clicked
function showBill() {
  // read what the customer typed in the form
  let quantities = [
    Number(document.getElementById("jollof").value),
    Number(document.getElementById("waakye").value),
    Number(document.getElementById("banku").value),
    Number(document.getElementById("sobolo").value)
  ];
  let isMember = document.getElementById("member").checked;

  let jollofCost = lineCost(prices[0], quantities[0]);
  let waakyeCost = lineCost(prices[1], quantities[1]);
  let bankuCost = lineCost(prices[2], quantities[2]);
  let soboloCost = lineCost(prices[3], quantities[3]);
  let subtotal = jollofCost + waakyeCost + bankuCost + soboloCost;
  console.log("Subtotal: " + subtotal);

  // discount only if they are a member and spent 100 or more
  let getsDiscount = isMember && subtotal >= 100;
  console.log("Gets discount: " + getsDiscount);

  // Number(true) is 1 and Number(false) is 0, so no discount means 0 off
  let discount = subtotal * DISCOUNT_RATE * Number(getsDiscount);
  let total = calculateTotal(subtotal - discount);

  let receiptText =
    items[0] + " x " + quantities[0] + " = GHS " + jollofCost.toFixed(2) + "\n" +
    items[1] + " x " + quantities[1] + " = GHS " + waakyeCost.toFixed(2) + "\n" +
    items[2] + " x " + quantities[2] + " = GHS " + bankuCost.toFixed(2) + "\n" +
    items[3] + " x " + quantities[3] + " = GHS " + soboloCost.toFixed(2) + "\n" +
    "Subtotal: GHS " + subtotal.toFixed(2) + "\n" +
    "Member discount: GHS " + discount.toFixed(2);

  document.getElementById("receipt").textContent = receiptText;
  document.getElementById("bill").textContent = "Total with 15% tax: GHS " + total.toFixed(2);
}
