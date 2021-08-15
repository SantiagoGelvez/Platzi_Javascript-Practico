function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onKeyUpDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "$" + new Intl.NumberFormat('es-CO').format(precioConDescuento);
}

function onChangeDescuento(){
    const cuponContainer = document.getElementById("CuponContainer");
    const discountContainer = document.getElementById("DiscountContainer");
    const selectDescuento = document.getElementById("SelectDescuento");
    const DescuentoValue = selectDescuento.value;
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "";
    switch(DescuentoValue){    
        case "cupon":
            cuponContainer.hidden = false;
            discountContainer.hidden = true;
            break;
        case "descuento":
            console.log("Estoy en "+ DescuentoValue);
            cuponContainer.hidden = true;
            discountContainer.hidden = false;
            break;
    }
}

function onClicApplyCoupon() {
    const cuponesValidos = {
        "SUMMERSLAM21": 10,
        "WRESTLEMANIA21": 30, 
        "ROYALRUMBLE21": 25,
        "SURVIVORSERIES21": 15
    };
    const inputCupon = document.getElementById("InputCupon");
    const resultPrice = document.getElementById("ResultPrice");
    cuponValue = inputCupon.value.toUpperCase();
    if (!Object.keys(cuponesValidos).includes(cuponValue)){ // Valido si el cupon está entre el objeto cuponesValidos
        alert(`${cuponValue} no es un cupon valido 😕`);
        inputCupon.value = "";
        resultPrice.innerText = ""; 
        return;
    }
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    precioConDescuento = calcularPrecioConDescuento(priceValue, cuponesValidos[cuponValue]);
    resultPrice.innerText = "$" + new Intl.NumberFormat('es-CO').format(precioConDescuento);
}

onChangeDescuento();