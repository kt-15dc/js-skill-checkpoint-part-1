// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้

//1//
inventory[0]["quantity"] = 200;

//2//
inventory.push(
  {
    name: "Orange",
    price: 20,
    quantity: 300,
  }
)

//3//

let sum = 0;

for (let fruits of inventory){
  sum += fruits["quantity"]*fruits["price"];
}


//Output//
// console.log(inventory);
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${sum} บาท`);