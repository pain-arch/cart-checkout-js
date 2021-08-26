// full complete update
function fullUpdate(product, price, increasing){

    const productInput = document.getElementById(product+'-number');
    let productValue = productInput.value;

    if(increasing == true){
        productValue = parseInt(productValue) + 1; 
    }
    else if(productValue > 0 ){
        productValue = parseInt(productValue) - 1
    }

    productInput.value = productValue;

    const productPrice = document.getElementById(product+'-price');
    productPrice.innerText = productValue * price ;

    calculation ();
};

//get product Input value
function getInputValue(product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value) ;
    return productNumber;
};

//total price calculaton

function calculation (){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10 ;
    const totalPrice = subTotal + tax ;

    console.log(phoneTotal);
    console.log(tax);
    console.log(totalPrice);
    
    document.getElementById('subtotal').innerText = subTotal ;
    document.getElementById('tax').innerText = tax ;
    document.getElementById('total-price').innerText = totalPrice;
};




// phone plus event
document.getElementById('phone-plus').addEventListener('click', function(){
    fullUpdate ('phone', 1219, true);
});
// phone minus event
document.getElementById('phone-minus').addEventListener('click', function(){
    fullUpdate ('phone', 1219, false);
});

// case plus event
document.getElementById('case-plus').addEventListener('click', function(){
    fullUpdate ('case', 59, true);
});

// case minus event
document.getElementById('case-minus').addEventListener('click', function(){
    fullUpdate ('case', 59, false);
});

// check-out event
document.getElementById('checkout-button').addEventListener('click', function(){
    document.getElementById('thanks').classList.remove("d-none");
   const button = document.getElementById('checkout-button');
   button.disabled = true ;
});