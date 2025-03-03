// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

const inventory2 = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

///////////////////////////////////////////

function findMin(inventory){

  let minQ = inventory[0]["quantity"];
  let minName = "";

  for (let item of inventory){
    if (item["quantity"] < minQ){
      minQ = item["quantity"];
      minName = item["name"];
    }
  }
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minName} ซึ่งมี ${minQ} ชิ้น`;
}

console.log(findMin(inventory));

