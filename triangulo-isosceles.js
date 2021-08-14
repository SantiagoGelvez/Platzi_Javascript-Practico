function AlturaTrianguloIsosceles(lado1, lado2, base){
    if(lado1 != lado2 || (lado1 + lado2 < base)){
        return console.log("El triangulo no es isóceles");
    }
    return Math.sqrt(lado1 * lado2 - ((base * base) / 4));
}