import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid, Snackbar} from '@material-ui/core';
import EsisteTerreno from '../EsisteTerreno';
import Banca from '../Banca';


function GestoreCostruzioni(props){

  const [openCostruzioni, setOpenCostruzioni] = React.useState(false);
  const handleCloseSnackbarCostruzioni = (event, reason) => {setOpenCostruzioni(false)};
  const [testoCostruzioni, setTestoCostruzioni] = React.useState('');    

//Stato del Modale utilizato per costruire un edificio
const [openModalCostruzioni, setOpenModalCostruzioni] = React.useState(false);
const handleOpenCostruzioni = () => { setOpenModalCostruzioni(true) };
const handleCloseCostruzioni = () => { setOpenModalCostruzioni(false) };

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di edificio da costruire
const [edificio, setEdificio] = React.useState('casa');
const handleChangeTipoDiEdificio = (event) => { setEdificio(event.target.value) };

//Stato del RadioGrup terreno usato per scegliere il terreno su cui costruire l'edificio
const [terreno, setTerreno] = React.useState(1);
const handleChangeTerreno = (event) => {
  setTerreno(event.target.value);
};

function verificaColore(colore, giocatore){
  var i = 0;
  while(i < props.terreni.length){
    if((props.terreni[i].colore === colore) && (props.terreni[i].proprietario !== giocatore)){
      return(false);
    }
    i++
  }
  return(true);
}

function costruisciCasa(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno(props.terreni, terreno);
  if(n === -1){
    setTestoCostruzioni('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpenCostruzioni(true);
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che la proprietà non sia ipotecata
  if(proprietà.ipotecato === true){
    setTestoCostruzioni('Non puoi costruire su un terreno ipotecato');
    setOpenCostruzioni(true);
    return;
  }
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario !== props.turnoGiocatore)){
    setTestoCostruzioni('Non puoi costruire su un terreno che non è tuo');
    setOpenCostruzioni(true);
    return;
  }
  //Per poter costruire su proprietà devi avere tutti i terreni dello stesso colore
  var verifica = verificaColore(proprietà.colore, proprietà.proprietario);
  if(!verifica){
    setTestoCostruzioni('Per costruire devi prima possedere tutte le caselle dello stesso colore');
    setOpenCostruzioni(true);
    return;
  }
  //Su un terreno si possono costruire massimo 4 case
  if(proprietà.case >= 4){
    setTestoCostruzioni('Su un terreno si possono costruire massimo quattro case');
    setOpenCostruzioni(true);
    return;
  }
  //Se sul terreno c'è un albergo non posso costruirvi delle case
  if(proprietà.alberghi > 0){
    setTestoCostruzioni("Se su un terreno c'e' un albergo non puoi costruirvi una casa");
    setOpenCostruzioni(true);
    return;
  }

  var banca = Banca.getInstance();
  if (banca.caseDisponibili <= 0) {
    setTestoCostruzioni("La banca al momento non dispone di case. Attendi che altri giocatori le vendano. ");
    setOpenCostruzioni(true);
    return;
  }

  //modifico l'array terreni e l'array giocatori
  proprietà.case = proprietà.case + 1;
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);

  var nuoviGiocatori = props.giocatori;
  var costoCostruzione = proprietà.valore*3/4;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - costoCostruzione;
  props.setGiocatori(nuoviGiocatori);

  banca.decrementaCase();
  
  setTestoCostruzioni('La costruzione della casa è andata a buon fine');
  setOpenCostruzioni(true);
}

function costruisciAlbergo(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno(props.terreni, terreno);
  if(n === -1){
    setTestoCostruzioni('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpenCostruzioni(true);
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che la proprietà non sia ipotecata
  if(proprietà.ipotecato === true){
    setTestoCostruzioni('Non puoi costruire su un terreno ipotecato');
    setOpenCostruzioni(true);
    return;
  }
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario !== props.turnoGiocatore)){
    setTestoCostruzioni('Non puoi costruire su un terreno che non è tuo');
    setOpenCostruzioni(true);
    return;
  }
  //Su un terreno si può costruire massimo un albergo
  if(proprietà.alberghi > 0){
    setTestoCostruzioni('Su un terreno si può costruire massimo un albergo');
    setOpenCostruzioni(true);
    return;
  }
  
  //Per poter costruire un albergo devi avere quattro case su proprietà 
  if(proprietà.case < 4){
    setTestoCostruzioni('Per costruire un albergo su questo terreno devi prima possedere quattro case');
    setOpenCostruzioni(true);
    return;
  }
  
  var banca = Banca.getInstance();
  if (banca.alberghiDisponibili <= 0) {
    setTestoCostruzioni("La banca al momento non dispone di alberghi. Attendi che altri giocatori li vendano. ");
    setOpenCostruzioni(true);
    return;
  }

  //modifico l'array terreni e l'array giocatori
  proprietà.alberghi = proprietà.alberghi + 1;
  proprietà.case = 0;
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);

  var nuoviGiocatori = props.giocatori;
  var costoCostruzione = proprietà.valore*3/4;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - costoCostruzione;
  props.setGiocatori(nuoviGiocatori);

  var banca = Banca.getInstance();
  for (let i = 0; i < 4; i++) {
    banca.incrementaCase();
  }
  banca.decrementaAlberghi();

  setTestoCostruzioni("La costruzione dell'albergo è andata a buon fine");
  setOpenCostruzioni(true);

}

function costruisciEdificio(){
  if(edificio === 'casa'){
    costruisciCasa();
  }
  else{
    costruisciAlbergo();
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
    
      <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => costruisciEdificio()}>
        Costruisci questo edificio
      </Button>
   
    </Grid> 
  </Paper>
);

return(
<div>
  <Button onClick={handleOpenCostruzioni}  size="small" >
    Costruisci
  </Button>
  <Modal open={openModalCostruzioni} onClose={handleCloseCostruzioni}>
    {body}
  </Modal>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={openCostruzioni}
    autoHideDuration={6000}
    onClose={handleCloseSnackbarCostruzioni}
    message={testoCostruzioni}
    action={
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleCloseSnackbarCostruzioni}> UNDO </Button>
      </React.Fragment>
    }
  />
</div>
);
}

export default GestoreCostruzioni;