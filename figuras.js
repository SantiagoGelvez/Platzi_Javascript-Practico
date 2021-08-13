// Código del cuadrado
// console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm²");
// console.groupEnd();

// Código del triangulo
// console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " +
//             ladoTriangulo1 + "cm, " +
//             ladoTriangulo2 + "cm y " +
//             baseTriangulo + "cm"
//         );
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2
}
// console.log("El area del triángulo mide: " + areaTriangulo + "cm²");
// console.groupEnd();

// Código del círculo
// console.group("Círculo")
// const radioCirculo = 4;
// console.log("El radio del círculo mide: " + radioCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");

// const PI = 3.1415;
const PI = Math.PI;

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * PI;;
}
// console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
// console.log("El area del círculo mide: " + areaCirculo + "cm²");
// console.groupEnd();