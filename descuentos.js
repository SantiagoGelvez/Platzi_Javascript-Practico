function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const inputDiscount = document.getElementById("InputDiscount");
//     const priceValue = inputPrice.value;
//     const discountValue = inputDiscount.value;
//     const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
//     const resultPrice = document.getElementById("ResultPrice");
//     resultPrice.innerText = "El precio con descuento es: $" + precioConDescuento
// }

function onKeyUpDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = "$" + new Intl.NumberFormat('es-CO').format(precioConDescuento);
}
