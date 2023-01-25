"use strict";

var CART = [{
  title: 'Bread',
  qty: 3,
  price: 12.30,
  isBuy: false
}, {
  title: 'Milk',
  qty: 2,
  price: 32.20,
  isBuy: true
}, {
  title: 'Beer',
  qty: 10,
  price: 34.50,
  isBuy: true
}, {
  title: 'Potato',
  qty: 4,
  price: 8,
  isBuy: false
}];
var discount = {
  WINTER20: {
    value: 20,
    type: 'percent'
  },
  WINTER30: {
    value: 30,
    type: 'percent'
  },
  WINTER40: {
    value: 40,
    type: 'percent'
  },
  newYear200: {
    value: 200,
    type: 'fixed'
  }
};

function addToCart() {
  var title = document.getElementById("prodTitle").value.trim();
  var qty = parseInt(document.getElementById("prodQty").value);
  var price = parseFloat(document.getElementById("prodPrice").value);
  var isValid = true;
  var errors = [];

  if (title === '') {
    errors.push('Enter product title');
  }

  if (isNaN(qty) || qty <= 0) {
    errors.push("Enter correct quantity value");
  }

  if (isNaN(price) || price <= 0) {
    errors.push("Enter correct price value");
  }

  if (errors.length === 0) {
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
    } // CART.push({
    //     title: title,
    //     qty: qty,
    //     price: price,
    //     isBuy: false
    // });


    viewProducts();
    toast.success('Product successfully added');
    document.getElementById("prodTitle").value = '';
    document.getElementById("prodQty").value = '1';
    document.getElementById("prodPrice").value = '';
  } else {
    toast.danger(errors.join(' '));
  }
}

function viewProducts() {
  var list = '';
  var index = 0; // for(let i=0;i<CART.length;i++){
  //     if(!CART[i].isBuy){
  //         const prod = CART[i];
  //        list += productItem(prod, i);
  //     }
  // }

  CART.filter(function (el) {
    return !el.isBuy;
  }).forEach(function (prod) {
    list += productItem(prod, index);
    index++;
  });
  CART.filter(function (el) {
    return el.isBuy;
  }).forEach(function (prod) {
    list += productItem(prod, index);
    index++;
  }); // for(let i=0;i<CART.length;i++){ 
  //     if(CART[i].isBuy){
  //         const prod = CART[i];
  //         list += productItem(prod, i);
  //     }
  // }

  document.getElementById("productTbody").innerHTML = list;
  viewTotal();
}

function productItem(prod, index) {
  var list = "\n        <tr>\n          <td>".concat(index + 1, ".</td>\n          <td>").concat(prod.title, "</td>\n          <td>").concat(prod.isBuy ? '<span class="badge text-bg-success">yes</span>' : '<span class="badge text-bg-danger">no</span>', "</td>\n          <td>").concat(prod.qty, "</td>\n          <td>").concat(prod.price.toFixed(2), "</td>\n          <td>").concat((prod.qty * prod.price).toFixed(2), "</td>\n          <td>");

  if (!prod.isBuy) {
    list += "<button type=\"button\" class=\"btn btn-info btn-sm \" onclick=\"buyProduct\n              ('".concat(prod.title, "')\">Buy</button>  \n              <button type=\"button\" class=\"btn btn-danger btn-sm\"  onclick=\"removeProduct\n              ('").concat(prod.title, "')\">Remove</button>");
  }

  list += "</td>\n        </tr>";
  return list;
}

function buyProduct(title) {
  // const index = CART.findIndex((el)=>el.title === title);
  CART[CART.findIndex(function (el) {
    return el.title === title;
  })].isBuy = true;
  viewProducts();
}

function removeProduct(title) {
  // const findIndex = CART.findIndex((el)=>el.title === title);
  CART.splice(CART.findIndex(function (el) {
    return el.title === title;
  }), 1);
  viewProducts();
}

function calcTotal() {
  // let total = 0;
  // for(let i=0;i<CART.length;i++){
  //     total += CART[i].qty * CART[i].price;
  // }
  // const total = CART.reduce((acc,el)=>{
  //     return acc + el.qty * el.price
  // })
  var total = {
    buy: 0,
    notBuy: 0,
    all: 0
  };
  CART.forEach(function (prod) {
    var cost = prod.qty * prod.price;

    if (prod.isBuy) {
      total.buy += cost;
    } else {
      total.notBuy += cost;
    }
  });
  total.all = total.buy + total.notBuy; // console.log(total);

  return total; // const totalBuy = CART.filter(el => el.isBuy).reduce((acc, el)=>{
  //     return acc + el.qty * el.price
  // }, 0);
  // const totalnotBuy = CART.filter(el => el.isBuy).reduce((acc, el)=>{
  //     return acc + el.qty * el.price
  // }, 0);
  // const total = CART.reduce((acc, el)=>{
  //     return acc + el.qty * el.price
  // }, 0);
  // document.getElementById("cartTotal").innerText = total.all.toFixed(2);
  //  document.getElementById("cartTotalBnB").innerHTML =`<big>${total.buy.toFixed(2)}</big>,
  //  <small>${total.notBuy.toFixed(2)}</small>`;
}

function viewTotal() {
  var total = calcTotal();
  document.getElementById("cartTotal").innerText = total.all.toFixed(2);
  document.getElementById("cartTotalBnB").innerHTML = "<big>".concat(total.buy.toFixed(2), "</big>,\n     <small>").concat(total.notBuy.toFixed(2), "</small>");
  document.getElementById('showSum').innerHTML = total.buy.toFixed(2);

  if (document.getElementById('discount').value.trim() !== '') {
    calcDiscount();
  }
}

viewProducts();

function calcDiscount() {
  var code = document.getElementById('discount').value.trim();
  var discountValue = '';
  var total = calcTotal();
  var finalSum = total.buy;

  if (code !== '') {
    if (discount[code]) {
      if (discount[code].type === 'percent') {
        discountValue = "".concat(discount[code].value, "%");
        finalSum = total.buy - total.buy * discount[code].value / 100;
      } else {
        discountValue = "".concat(discount[code].value, "\u20B4");
        finalSum = total.buy - discount[code].value;
      }

      document.getElementById('valueDiscount').innerHTML = discountValue;
      document.getElementById('finalSum').innerHTML = finalSum.toFixed(2);
    } else {
      toast.danger('There is no such code');
    }
  } else {
    toast.warning('Enter discount code');
  }
}

var discountBtn = document.getElementById('discountButton');
discountBtn.addEventListener('click', function () {
  calcDiscount();
});