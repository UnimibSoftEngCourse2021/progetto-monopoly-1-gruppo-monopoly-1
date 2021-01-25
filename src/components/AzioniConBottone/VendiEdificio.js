import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid, Snackbar} from '@material-ui/core';


function VendiEdificio(props){

const [open, setOpen] = React.useState(false);
const handleCloseSnackbar = () => {setOpen(false)};
const [testo, setTesto] = React.useState('');

    

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
    setTesto('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpen(true); 
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario != props.turnoGiocatore)){
    setTesto('Non puoi vendere gli edifici se il terreno che non è tuo');
    setOpen(true); 
    return;
  }
  
  //Se sul terreno non ci sono case non ho nulla da vendere
  if(proprietà.case === 0){
    setTesto("Su questo terreno non ci sono case");
    setOpen(true); 
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

  setTesto('La vendita della casa è andata a buon fine');
  setOpen(true); 

}

function VendiAlbergo(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno();
  if(n === -1){
    setTesto('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpen(true); 
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario != props.turnoGiocatore)){
    setTesto('Non puoi vendere gli edifici che non sono su un tuo terreno');
    setOpen(true); 
    return;
  }
  //Verifico ceh sul terreno ci sia un albergo
  if((proprietà.alberghi !== 1)){
    setTesto("Su questo terreno non c'è un albergo");
    setOpen(true); 
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

  setTesto("La vendita dell'albergo è andata a buon fine");
  setOpen(true); 

}

function VendiEdificio2(){
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
    
      <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => VendiEdificio2()}>
        vendi questo edificio
      </Button>
   
    </Grid>
    
    
    
  </Paper>
);





return(
<div>
  <Button onClick={handleOpen} size="small" style={{marginLeft:'10px'}} >
    Vendi edificio
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={open}
    autoHideDuration={6000}
    onClose={handleCloseSnackbar}
    message={testo}
    action={
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleCloseSnackbar}> UNDO </Button>
      </React.Fragment>
    }
  />
</div>
);
}
export default VendiEdificio;