import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid} from '@material-ui/core';


function Costruisci(props){

    

    

//Stato del Modale utilizato per costruire un edificio
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di edificio da costruire
const [edificio, setEdificio] = React.useState('casa');
const handleChangeTipoDiEdificio = (event) => { setEdificio(event.target.value) };

//Stato del RadioGrup terreno usato per scegliere il terreno su cui costruire l'edificio
const [terreno, setTerreno] = React.useState(1);
const handleChangeTerreno = (event) => {
  setTerreno(event.target.value);
};

function EsisteTerreno(){
  var i = 0;
  var esiste = false;
  var n;
  while(i < props.terreni.length){
    if(terreno === props.terreni[i].nome){
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

function VerificaColore(colore, giocatore){
  var i = 0;
  while(i < props.terreni.length){
    if((props.terreni[i].colore === colore) && (props.terreni[i].proprietario !== giocatore)){
      return(false);
    }
    i++
  }
  
  return(true);
}


function CostruisciCasa(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno();
  if(n === -1){
    alert('Controlla che il nome del terreno sia scritto in modo corretto');
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che la proprietà non sia ipotecata
  if(proprietà.ipotecato === true){
    alert('Non puoi costruire su un terreno ipotecato');
    return;
  }
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario != props.turnoGiocatore)){
    alert('Non puoi costruire su un terreno che non è tuo');
    return;
  }
  //Per poter costruire su proprietà devi avere tutti i terreni dello stesso colore
  var verifica = VerificaColore(proprietà.colore, proprietà.proprietario);
  if(!verifica){
    alert('Per costruire devi prima possedere tutte le caselle dello stesso colore');
    return;
  }
  //Su un terreno si possono costruire massimo 4 case
  if(proprietà.case >= 4){
    alert('Su un terreno si possono costruire massimo quattro case');
    return;
  }
  //Se sul terreno c'è un albergo non posso costruirvi delle case
  if(proprietà.alberghi > 0){
    alert("Se su un terreno c'e' un albergo non puoi costruirvi una casa");
    return;
  }
  //modifico l'array terreni e l'array giocatori
  proprietà.case = proprietà.case + 1;
  console.log(proprietà);
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);
  console.log(props.terreni);

  var nuoviGiocatori = props.giocatori;
  var costoCostruzione = proprietà.valore*3/4;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - costoCostruzione;
  props.setGiocatori(nuoviGiocatori);
  console.log(props.giocatori);

  alert('La costruzione della casa è andata a buon fine');

}

function CostruisciAlbergo(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno();
  if(n === -1){
    alert('Controlla che il nome del terreno sia scritto in modo corretto');
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che la proprietà non sia ipotecata
  if(proprietà.ipotecato === true){
    alert('Non puoi costruire su un terreno ipotecato');
    return;
  }
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario != props.turnoGiocatore)){
    alert('Non puoi costruire su un terreno che non è tuo');
    return;
  }
  //Su un terreno si può costruire massimo un albergo
  if(proprietà.alberghi > 0){
    alert('Su un terreno si può costruire massimo un albergo');
    return;
  }
  
  //Per poter costruire un albergo devi avere quattro case su proprietà 
  if(proprietà.case < 4){
    alert('Per costruire un albergo su questo terreno devi prima possedere quattro case');
    return;
  }
  
  //modifico l'array terreni e l'array giocatori
  proprietà.alberghi = proprietà.alberghi + 1;
  proprietà.case = 0;
  console.log(proprietà);
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);
  console.log(props.terreni);

  var nuoviGiocatori = props.giocatori;
  var costoCostruzione = proprietà.valore*3/4;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - costoCostruzione;
  props.setGiocatori(nuoviGiocatori);
  console.log(props.giocatori);

  alert("La costruzione dell'albergo è andata a buon fine");

}

function CostruisciEdificio(){
  if(edificio === 'casa'){
    CostruisciCasa();
  }
  else{
    CostruisciAlbergo();
  }
  
}

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    <h2 style={{margin:'16px'}}>Cosa vuoi costruire?</h2>
    <RadioGroup value={edificio} onChange={handleChangeTipoDiEdificio} style={{margin:'16px'}}>
        <FormControlLabel value="casa" control={<Radio />} label="Casa" />
        <FormControlLabel value="albergo" control={<Radio />} label="Albergo" />
    </RadioGroup>

    <h2 style={{margin:'16px'}}>Dove vuoi costruire?</h2>
    <Grid container direction="column">
      <TextField variant="outlined" style={{margin:'16px', width:'350px'}} onChange={handleChangeTerreno}/>
    
      <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => CostruisciEdificio()}>
        Costruisci questo edificio
      </Button>
   
    </Grid>
    
    
    
  </Paper>
);





return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" >
    Costruisci
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default Costruisci;