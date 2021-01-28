function EsisteTerreno(terreni, terreno){
    var i = 0;
    var esiste = false;
    var n;
    while(i < terreni.length){
        console.log(terreno);
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
