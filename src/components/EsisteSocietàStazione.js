//Funzione che controlla se l'input dato corrisponde ad una stazione
function EsisteSocietàStazione(societàStazioni, societàStazione){
    var i = 0;
    var esiste = false;
    var n;
    while(i < societàStazioni.length){
      if(societàStazione === societàStazioni[i].nome){
        esiste = true;
        n = i;
        i = 100;
      }
      else{
        i++;
      }
    }
    if(esiste){
      return(n);
    }
    else{
      return(-1);
    }
  }

  export default EsisteSocietàStazione;