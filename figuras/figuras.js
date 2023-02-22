// Código del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

// Código del triangulo
function perimetroTriangulo(lado1, lado2, lado3) {
    return Number(lado1) + Number(lado2) + Number(lado3);
}
function alturaTriangulo(lado1, lado2, lado3) {
    const s = (Number(lado1) + Number(lado2) + Number(lado3)) / 2;
    return (2 / lado1) * Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2
}

// Código del círculo
function diametroCirculo(radio) {
    return radio * 2;
}
// const PI = 3.1415;
const PI = Math.PI;
function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// Aqui interactuamos con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const resultSquare = document.getElementById("ResultSquare");

    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    
    resultSquare.innerText = perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const resultSquare = document.getElementById("ResultSquare");

    const value = input.value;
    const area = areaCuadrado(value);

    resultSquare.innerText = area;
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("Input1Triangulo");
    const input2 = document.getElementById("Input2Triangulo");
    const input3 = document.getElementById("Input3Triangulo");
    const resultTriangle = document.getElementById("ResultTriangle");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);

    resultTriangle.innerText = perimetro;
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("Input1Triangulo");
    const input2 = document.getElementById("Input2Triangulo");
    const input3 = document.getElementById("Input3Triangulo");
    const resultTriangle = document.getElementById("ResultTriangle");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const altura = alturaTriangulo(value1, value2, value3);
    const area = areaTriangulo(value1, altura);
    
    resultTriangle.innerText = area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputRadio");
    const resultCircle = document.getElementById("ResultCircle");
    
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    
    resultCircle.innerText = perimetro;
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");
    const resultCircle = document.getElementById("ResultCircle");

    const value = input.value;
    const area = areaCirculo(value);
    
    resultCircle.innerText = area;
}