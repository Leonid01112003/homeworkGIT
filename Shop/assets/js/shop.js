const CART = [
  {
    title: 'Хліб',
    qty: 3,
    price: 12.30,
    isBuy: false
  }

];

function addToCart(){
    const title = document.getElementById("prodTitle").value.trim();
    const qty = parseInt(document.getElementById("prodQty").value);
    const price = parseFloat(document.getElementById("prodPrice").value);
    let isValid = true;

    if(title === ''){
        isValid = false;
        alert('Enter product title');
    }

    if(isNaN(qty) || qty <= 0){
        isValid = false;
        alert('Enter correct quantity value');
    }

    if(isNaN(price) || price <= 0){
        isValid = false;
        alert('Enter correct price value');
    }

    if(isValid){
        const findIndex = CART.findIndex((el)=>el.title === title);
        if(findIndex !== -1){
            const newQty = CART[findIndex].qty + qty;
            CART[findIndex].qty = newQty;
        } else {
            CART.push({
                 title,
                 qty,
                 price,
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

function viewProducts(){
    let list = '';
    CART.forEach((prod, index)=>{
        list += `
      <tr>
        <td>${index + 1}.</td>
        <td>${prod.title}</td>
        <td>${prod.qty}</td>
        <td>${prod.price.toFixed(2)}</td>
        <td>${(prod.qty * prod.price).toFixed(2)}</td>
      </tr>`;
    })
    document.getElementById("productTbody").innerHTML = list;
}

viewProducts();