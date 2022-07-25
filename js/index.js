// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let unitPrice = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;
  unitPrice = parseFloat(unitPrice)
  quantity = parseFloat(quantity)
  let subTotal = unitPrice * quantity;
  let subTotalCell = product.querySelector(".subtotal span")
  subTotalCell.innerText = subTotal

  return subTotal;
}


function calculateAll() {

  
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let total = 0;
  let rows = document.querySelectorAll(".product");

  rows.forEach(function (product) {
    let subTotal = updateSubtotal(product);
    total += subTotal;
  })


  // ITERATION 3
  let totalValueElement = document.querySelector("#total-value span");
  totalValueElement.innerText = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
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
