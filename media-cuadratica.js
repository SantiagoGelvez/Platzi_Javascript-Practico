function CalculaMediaCuadratica(lista){
    let lista2 = lista.map(
        function(elemento){
            return elemento*elemento;
        }
    );

    let sumaCuadrados = lista2.reduce(
        function(acumulado, nuevo){
            return acumulado + nuevo;
        }
    );

    let cociente = sumaCuadrados / lista.length;

    let mediaCuadratica = Math.sqrt(cociente);
    console.log(mediaCuadratica);

    return mediaCuadratica;
}