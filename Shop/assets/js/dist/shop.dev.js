"use strict";

var CART = [{
  title: 'Хліб',
  qty: 3,
  price: 12.30,
  isBuy: false
}];

function addToCart() {
  var title = document.getElementById("prodTitle").value.trim();
  var qty = parseInt(document.getElementById("prodQty").value);
  var price = parseFloat(document.getElementById("prodPrice").value);
  var isValid = true;

  if (title === '') {
    isValid = false;
    alert('Enter product title');
  }

  if (isNaN(qty) || qty <= 0) {
    isValid = false;
    alert('Enter correct quantity value');
  }

  if (isNaN(price) || price <= 0) {
    isValid = false;
    alert('Enter correct price value');
  }

  if (isValid) {
    var findIndex = CART.findIndex(function (el) {
      return el.title === title;
    });

    if (findIndex !== -1) {
      var newQty = CART[findIndex].qty + qty;
      CART[findIndex].qty = newQty;
    } else {
      CART.push({
        title: title,
        qty: qty,
        price: price,
        isBuy: false
      });
    }

    CART.push({
      title: title,
      qty: qty,
      price: price,
      isBuy: false
    });
    viewProducts();
    alert('Product successfully added');
    document.getElementById("prodTitle").value = '';
    document.getElementById("prodQty").value = '1';
    document.getElementById("prodPrice").value = '';
  }
}

function viewProducts() {
  var list = '';
  CART.forEach(function (prod, index) {
    list += "\n      <tr>\n        <td>".concat(index + 1, ".</td>\n        <td>").concat(prod.title, "</td>\n        <td>").concat(prod.qty, "</td>\n        <td>").concat(prod.price.toFixed(2), "</td>\n        <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n      </tr>");
  });
  document.getElementById("productTbody").innerHTML = list;
}

viewProducts();