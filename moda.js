function CalcularModa(lista1){

    const lista1Count = {};
    
    lista1.map(
        function(elemento){
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else{
                lista1Count[elemento] = 1;
            }
        }
    );
    
    const lista1Aray = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = lista1Aray[lista1Aray.length - 1];
    return moda;
}
