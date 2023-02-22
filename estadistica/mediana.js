function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1;
}

function esPar(numero) {
    if (numero % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function calcularMediana(lista) {
    lista.sort(function(a, b){return a - b});
    let mediana;
    
    const mitadLista1 = parseInt(lista.length / 2);
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1 - 1];
        const elemento2 = lista[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2;
    }
    else{
        mediana = lista[mitadLista1];
    }
    return mediana;
}
