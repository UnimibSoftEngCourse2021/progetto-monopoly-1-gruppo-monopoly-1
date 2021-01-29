import React from 'react';
import {Paper, Modal, Button} from '@material-ui/core';


function GestoreAbbandono(props){

//Stato del Modale utilizato per costruire un edificio
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

function abbandonaPartita(){
    var nuoviGiocatori = props.giocatori;
    nuoviGiocatori[props.turnoGiocatore].inGioco = false;
    nuoviGiocatori[props.turnoGiocatore].capitale = 0;
    props.setGiocatori(nuoviGiocatori);

    //cambio il proprietario a terreni, stazioni e società del giocatore che ha abbandonato
    var nuoveSocietàStazioni = props.societàStazioni;
    var i;
    for(i=0; i<nuoveSocietàStazioni.length; i++){
      if(nuoveSocietàStazioni[i].proprietario === props.turnoGiocatore){
        nuoveSocietàStazioni[i].proprietario = -1;
        nuoveSocietàStazioni[i].ipotecato = false;
      }
    }
    props.setSocietàStazioni(nuoveSocietàStazioni);

    var nuoviTerreni = props.terreni;
    //var i;
    for(i=0; i<nuoviTerreni.length; i++){
      if(nuoviTerreni[i].proprietario === props.turnoGiocatore){
        nuoviTerreni[i].proprietario = -1;
        nuoviTerreni[i].ipotecato = false;
        nuoviTerreni[i].case = 0;
        nuoviTerreni[i].alberghi = 0;
      }
    }
    props.setTerreni(nuoviTerreni);


const giocatore = props.turnoGiocatore;

var giocatore2;
if(giocatore === props.numeroGiocatori-1){
    giocatore2 = 0;
}
else{
    giocatore2 = giocatore + 1;
}

if(props.giocatori[giocatore2].inGioco===false){
    //cerco il primo giocatore in gioco
    var i = giocatore2;
    var x = true;
    
    while(x){
        
        if(props.giocatori[i].inGioco === true){
            giocatore2 = i;
            x = false;
        }
        else{
            if(i===props.numeroGiocatori-1){
                i = 0;
            }
            else{
                i++;
            }
        }
    }      
}

props.setTurnoGiocatore(giocatore2);  

props.fallimentoVittoria();

handleClose();

}

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px', height:'250px'}}>

    <h3 style={{marginLeft:'20px', marginTop:'20px'}}>
        Giocatore {props.turnoGiocatore+1}
    </h3>
    <h3 style={{marginLeft:'20px', marginButtom:'20px'}}>
        Sei sicuro di voler abbandonare la partita?
    </h3>
          
    <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => abbandonaPartita()} >
        Si, voglio lasciare la partita 
    </Button>
    <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={handleClose} >
        No, continuo a giocare
    </Button>
   
  </Paper>
);

return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" >
    Abbandona la partita
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}

export default GestoreAbbandono;