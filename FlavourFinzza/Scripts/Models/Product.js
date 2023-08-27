// Product Model (Blue print)

class Product{
    constructor(id, name, desc, price, url){
      //this - keyword (Contains current calling object reference)
      this.id = id;
      this.name = name;  
      this.desc = desc;
      this.price = price;
      this.url = url;
    }
}
export default Product;