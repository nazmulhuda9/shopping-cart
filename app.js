function updateProductNumber(product, price, increase) {
    const productInput = document.getElementById(product + '-number')
    let productNumber = productInput.value;
    if (increase) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;

    // calculateTotal 
    calculateTotal()
}
function casePlus() {
    updateProductNumber('case', 59, true)
}
function caseMinus() {
    updateProductNumber('case', 59, false)
}

function phonePlus() {
    updateProductNumber('phone', 1219, true);
}
function phoneMinus() {
    updateProductNumber('phone', 1219, false)
}

// calculate total 
function getInputvalue(product) {
    const productInput = document.getElementById(product + '-number')
    const productNumber = productInput.value;
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 1219;
    const caseTotal = getInputvalue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * 0.1;
    const grandTotal = subTotal + tax;

    document.getElementById('sub-total').innerText = parseFloat(subTotal).toFixed(2);
    document.getElementById('tax').innerText = parseFloat(tax).toFixed(2);
    document.getElementById('grand-total').innerText = parseFloat(grandTotal).toFixed(2);
}