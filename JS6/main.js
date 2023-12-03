class Product {
  constructor(productName, price, quantity) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }

  getString(){
    return `Ім’я: ${this.productName}, Ціна: ${this.price}, Кількість: ${this.quantity}`;
  }

  getTotalPrice() {
    return `total cost ${this.price * this.quantity}`;
  }

  setProductName(value){
    this.productName = value;
  }

  setQuantity(value){
  this.quantity = value;
  }
}



class TVclaas extends Product{
    constructor(productName, price, quantity, color, rating, productionYear) {
       super(productName, price, quantity);
       this.color = color;
       this.rating = rating;
       this.productionYear = productionYear;
    }
    getYear(){
        const currenrYear = new Date().getFullYear();
        const Year = currenrYear - this.productionYear; 
        return Year;
      }

}
//let productExs = new Product("Samsung", 20000, 1);
let TV = new TVclaas("Samsung", 20000, 1, "Red", 10, 2003);
console.log(TV.getYear());
/*let minusYear = productExs.getYear;
console.log(minusYear);*/

/*let productExs = new Product("Tomato", 20, 3);
console.log(productExs);

let InfoProduct = productExs.getString();
console.log(InfoProduct);

let TotalCost = productExs.getTotalPrice();
console.log(TotalCost);

productExs.setProductName('Cucumber');
console.log(productExs); 
productExs.setQuantity(10);
console.log(productExs); */
