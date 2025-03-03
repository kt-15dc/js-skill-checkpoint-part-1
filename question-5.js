// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้

///////////////////////////////////////////

function calculateTotalPrice(products, promotionCode){

  let sum = 0;

  for (let item of products){
    sum += item["price"]*item["quantity"];
  }
  
  if (promotionCode){
    if (promotionCode === "SALE20"){
      return sum * 0.8;
    }
    if (promotionCode === "SALE50"){
      return sum * 0.5;
    }
  }
  else {
    return sum
  }

}

console.log(calculateTotalPrice(products, promotionCode));