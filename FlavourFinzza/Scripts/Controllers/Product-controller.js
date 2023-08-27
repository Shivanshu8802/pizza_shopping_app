// product controller - It is a Glue B/W View and Model
// Controller - I/O View and Model

import productOperation from "../services/product-operation";

//Data Exchange B/W View and Model.
async function loadPizzas (){
const pizza = await productOperations.loadProducts();
console.log('Pizzas are', pizza);
}
loadPizzas();