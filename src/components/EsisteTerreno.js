//Funzione che controlla se l'input dato corrisponde ad un terreno
function EsisteTerreno(terreni, terreno){
    var i = 0;
    var esiste = false;
    var n;
    while(i < terreni.length){
        if(terreno === terreni[i].nome){
            esiste = true;
            n = i;
            i = 100;
        }else{
            i++;
        }
    }

    if(esiste){
        return(n);
    }else{
        return(-1);
    }
}

export default EsisteTerreno;
