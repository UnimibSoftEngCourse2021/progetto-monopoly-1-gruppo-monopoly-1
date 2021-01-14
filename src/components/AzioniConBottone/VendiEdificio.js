import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid} from '@material-ui/core';


function VendiEdificio(props){

    

    

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




function VendiCasa(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno();
  if(n === -1){
    alert('Controlla che il nome del terreno sia scritto in modo corretto');
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if(!(proprietà.proprietario == props.turnoGiocatore)){
    alert('Non puoi vendere gli edifici se il terreno che non è tuo');
    return;
  }
  
  //Se sul terreno non ci sono case non ho nulla da vendere
  if(proprietà.case === 0){
    alert("Su questo terreno non ci sono case");
    return;
  }
  //modifico l'array terreni e l'array giocatori
  proprietà.case = proprietà.case - 1;
  console.log(proprietà);
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);
  console.log(props.terreni);

  var nuoviGiocatori = props.giocatori;
  var guadagno = proprietà.valore*3/8;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale + guadagno;
  props.setGiocatori(nuoviGiocatori);
  console.log(props.giocatori);

  alert('La vendita della casa è andata a buon fine');

}

function VendiAlbergo(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno();
  if(n === -1){
    alert('Controlla che il nome del terreno sia scritto in modo corretto');
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if(!(proprietà.proprietario == props.turnoGiocatore)){
    alert('Non puoi vendere gli edifici che non sono su un tuo terreno');
    return;
  }
  //Verifico ceh sul terreno ci sia un albergo
  if(!(proprietà.alberghi === 1)){
    alert("Su questo terreno non c'è un albergo");
    return;
  }
  
  
  //modifico l'array terreni e l'array giocatori
  //quando vendo un albergo alla banca ricevo in cambio metà del prezzo d'aquisto e 4 case
  proprietà.alberghi = 0;
  proprietà.case = 4;
  console.log(proprietà);
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);
  console.log(props.terreni);

  var nuoviGiocatori = props.giocatori;
  var guadagno = proprietà.valore*3/8;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale + guadagno;
  props.setGiocatori(nuoviGiocatori);
  console.log(props.giocatori);

  alert("La vendita dell'albergo è andata a buon fine");

}

function VendiEdificio(){
  if(edificio === 'casa'){
    VendiCasa();
  }
  else{
    VendiAlbergo();
  }
  
}

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    <h2 style={{margin:'16px'}}>Cosa vuoi vendere?</h2>
    <RadioGroup value={edificio} onChange={handleChangeTipoDiEdificio} style={{margin:'16px'}}>
        <FormControlLabel value="casa" control={<Radio />} label="Casa" />
        <FormControlLabel value="albergo" control={<Radio />} label="Albergo" />
    </RadioGroup>

    <h2 style={{margin:'16px'}}>Dove si trova questo edificio?</h2>
    <Grid container direction="column">
      <TextField variant="outlined" style={{margin:'16px', width:'350px'}} onChange={handleChangeTerreno}/>
    
      <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => VendiEdificio()}>
        vendi questo edificio
      </Button>
   
    </Grid>
    
    
    
  </Paper>
);





return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" >
    Vendi edificio
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default VendiEdificio;