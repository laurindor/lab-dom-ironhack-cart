// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const  price  =  product.querySelector ('.price span').innerHTML ; 
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = Number(price.innertext) * Number(quantity);
  product.querySelector("subtotal span").innertext = subtotal; 


  return subtotal;
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

  document.querySelector("#total-value span").innerHTML = total;


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  let row = target.parentNode.parentNode;
  let table = target.parentNode.parentNode;
  
  table.removeChild(row);
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
}
