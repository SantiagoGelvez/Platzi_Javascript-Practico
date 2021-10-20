/* Media armónica para una colección no vacía de números a1, a2, ..., an, 
todos diferentes de 0, se define como el recíproco de la media aritmética 
de los recíprocos de los ai:

*/

function CalculaMediaArmonica(lista){
    
    let listaInv = lista.map(
        function(elemento){
            return 1/elemento;
        }
    );
    
    console.log(listaInv);

    let sumaLista = listaInv.reduce(
        function(acumulado, nuevo){
            return acumulado + nuevo;
        }
    );

    console.log(sumaLista);

    let mediaArmonica = lista.length / sumaLista;

    console.log(mediaArmonica);
    return mediaArmonica;
}