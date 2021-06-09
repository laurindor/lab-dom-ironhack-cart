// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const  price  =  product.querySelector ('.price span') ; 
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')
  
  const total = Number(price.innertext) * Number(quantity.value);
  
  subtotal.innertext = total; 

  return total;
}

//Iteration 2

function calculateAll() {
  
  const productList = document.querySelectorAll('.product');
  let productArr = Array.from(productList)
  console.log(productArr); //now productlist its an array 
  let total = 0; 
  productArr.forEach(function(element) {
    total += updateSubtotal(element);
   });

  document.querySelector("#total-value span");

  // ITERATION 3
  function totalProducts() {
   totalProducts = document.getElementById("totalproducts");
   totalProducts = total + updateSubtotal;
   totalProducts.value = totalProducts;
    
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  cons nodeToDelete = target.parentNode
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
