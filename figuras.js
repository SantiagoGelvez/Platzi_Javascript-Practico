// Código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + "cm²");
console.groupEnd();

// Código del triangulo
console.group("Triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " +
            ladoTriangulo1 + "cm, " +
            ladoTriangulo2 + "cm y " +
            baseTriangulo + "cm"
        );
const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log("El area del triángulo mide: " + areaTriangulo + "cm²");
console.groupEnd();

// Código del círculo
console.group("Círculo")
const radioCirculo = 4;
console.log("El radio del círculo mide: " + radioCirculo + "cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo mide: " + diametroCirculo + "cm");

// const PI = 3.1415;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del círculo mide: " + areaCirculo + "cm²");
console.groupEnd();