import React from 'react';
import {Paper, Modal, Button, Grid, TextField, Radio, RadioGroup, FormControlLabel, Snackbar} from '@material-ui/core';
import EsisteTerreno from '../EsisteTerreno';
import EsisteSocietàStazione from '../EsisteSocietàStazione';

function GestoreVendite(props){

  const [openVendite, setOpenVendite] = React.useState(false);
  const handleCloseSnackbarVendite = () => {setOpenVendite(false)};
  const [testoVendite, setTestoVendite] = React.useState('');

//Stato del Modale utilizato per costruire un edificio
const [openModalVendite, setOpenModalVendite] = React.useState(false);
const handleOpenVendite = () => { setOpenModalVendite(true) };
const handleCloseVendite = () => { setOpenModalVendite(false) };


//Stato del terreno da vendere
const [terreno, setTerreno] = React.useState('');
const handleChangeTerreno = (event) => {
  setTerreno(event.target.value);
};

//Stato del gicatore che vuole vendere
const [venditore, setVenditore] = React.useState('');
const handleChangeVenditore = (event) => {
  setVenditore(event.target.value - 1);
};

//Stato del gicatore che vuole comprare, eventualmente la banca
const [acquirente, setAcquirente] = React.useState('');
const handleChangeAcquirente = (event) => {
  setAcquirente(event.target.value - 1);
};

//Stato del prezzo a cui viene venduta la proprietà
const [prezzo, setPrezzo] = React.useState('');
const handleChangePrezzo = (event) => {
  setPrezzo(event.target.value);
};

function esisteGiocatore(numero){
  if (numero >= 0 && numero <= 5) {
    return numero;
  } else {
    return -1;
  }
}

function verificaVenditore(proprietà, y) {
  let esito = true;
  if((proprietà.proprietario !== venditore)){
    setTestoVendite('Non puoi vendere qualcosa che non ti appartiene');
    setOpenVendite(true);
    esito = false; 
    return esito; 
  }
  //verifico che il venditore esista e che non sia la banca
  if(y === -1){
    setTestoVendite('Controlla che il nome del venditore sia scritto in modo corretto');
    setOpenVendite(true);
    esito = false; 
    return esito;
  }
  var venditore2 = props.giocatori[y];
  if(venditore2.inGioco === false){
    setTestoVendite('Hai inserito un venditore che non è più in gioco');
    setOpenVendite(true); 
    esito = false; 
    return esito;
  }
  return esito;
}

function verificaAcquirente(x) {
  let esito = true;
  //verifico che l'aquirente esista
  if(x === -1){
    setTestoVendite("Controlla che il nome dell'aquirente sia scritto in modo corretto");
    setOpenVendite(true);
    esito = false; 
    return esito;
  }
  
  var acquirente2 = props.giocatori[x];
  if(acquirente2.inGioco === false){
    setTestoVendite('Hai inserito un aquirente che non è più in gioco');
    setOpenVendite(true); 
    esito = false; 
    return esito;
  }
  return esito;
}

function vendiTerreno(){

  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno(props.terreni, terreno);

  if(n === -1){
    setTestoVendite('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpenVendite(true);
    return;
  }

  var proprietà = props.terreni[n];
  var y = esisteGiocatore(venditore);
  var esitoVerificaVenditore = verificaVenditore(proprietà, y);
  if (!esitoVerificaVenditore) {
    return;
  }
  var venditore2 = props.giocatori[y];
  
  var x = esisteGiocatore(acquirente);
  var esitoVerificaAcquirente = verificaAcquirente(x);
  if (!esitoVerificaAcquirente) {
    return;
  }
  var acquirente2 = props.giocatori[x];
  
  //verifico che sul terreno non ci siano ne case ne alberghi
  if(proprietà.case > 0 || proprietà.alberghi > 0){
    setTestoVendite('Non puoi vendere un terreno con case o alberghi');
    setOpenVendite(true);
    return;
  }
  //Verifico che venditore e aquirente non siano lo stesso giocatore
  if(venditore2 === acquirente2){
    setTestoVendite('Non puoi vendere a te stesso');
    setOpenVendite(true);
    return;
  }
  
  //verifico che il prezzo sia > 0
  if(prezzo <= 0){
    setTestoVendite('Controlla di aver inserito un prezzo maggiore di zero');
    setOpenVendite(true); 
    return;
  }
  //sposto i soldi dall'aquirente2 al venditore2
  if(prezzo > 0){
    acquirente2.capitale = acquirente2.capitale - parseInt(prezzo);
    venditore2.capitale = venditore2.capitale + parseInt(prezzo);
  }
  //aquirente diventa il nuovo proprietario della proprietà
  proprietà.proprietario = acquirente2.numero - 1;
  
  //aggiorno le variabili di stato che contengono l'elenco dei terreni e dei giocatori
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;  
  props.setTerreni(nuoviTerreni);  
  
  var nuoviGiocatori = props.giocatori;
  nuoviGiocatori[x] = acquirente2;
  nuoviGiocatori[y] = venditore2;
  props.setGiocatori(nuoviGiocatori);

  console.log(props.giocatori);
  console.log(props.terreni);

  setTestoVendite('La vendita è andata a buon fine');
  setOpenVendite(true); 
}

function vendiStazioneSocietà(){

  //verifico che la società / stazione esista e salvo il risultato in proprietà
  var n = EsisteSocietàStazione(props.societàStazioni, terreno);
  
  if(n === -1){
    setTestoVendite('Controlla che il nome della società o della stazione sia scritto in modo corretto');
    setOpenVendite(true);
    return;
  }

  var proprietà = props.societàStazioni[n];
  var y = esisteGiocatore(venditore);
  var esitoVerificaVenditore = verificaVenditore(proprietà, y);
  if (!esitoVerificaVenditore) {
    return;
  }
  var venditore2 = props.giocatori[y];

  var x = esisteGiocatore(acquirente);
  var esitoVerificaAcquirente = verificaAcquirente(x);
  if (!esitoVerificaAcquirente) {
    return;
  }
  var acquirente2 = props.giocatori[x];

  //Verifico che venditore e aquirente non siano lo stesso giocatore
  if(venditore2 === acquirente2){
    setTestoVendite('Non puoi vendere a te stesso');
    setOpenVendite(true); 
    return;
  }
  
  //verifico che il prezzo sia > 0
  if(prezzo <= 0){
    setTestoVendite('Controlla di aver inserito un prezzo maggiore di zero');
    setOpenVendite(true); 
    return;
  }
  //sposto i soldi dall'aquirente2 al venditore2
  if(prezzo > 0){
    acquirente2.capitale = acquirente2.capitale - parseInt(prezzo);
    venditore2.capitale = venditore2.capitale + parseInt(prezzo);
  }
  //aquirente diventa il nuovo proprietario della proprietà
  proprietà.proprietario = acquirente2.numero - 1;
  
  //aggiorno le variabili di stato che contengono l'elenco delle società, delle stazioni e dei giocatori
  var nuoveSocietàStazioni = props.societàStazioni;
  nuoveSocietàStazioni[n] = proprietà;  
  props.setSocietàStazioni(nuoveSocietàStazioni);  
  
  var nuoviGiocatori = props.giocatori;
  nuoviGiocatori[x] = acquirente2;
  nuoviGiocatori[y] = venditore2;
  props.setGiocatori(nuoviGiocatori);

  console.log(props.giocatori);
  console.log(props.societàStazioni);

  setTestoVendite('La vendita è andata a buon fine');
  setOpenVendite(true); 
}

//Stato del RadioGrup per la gerstione del tipo di vendita
//si può scegliere se vendere terreni o stazioni/società
const [tipoVendita, setTipoVendita] = React.useState('Terreno');
const handleChangeTipoVendita = (event) => { setTipoVendita(event.target.value) };

function vendita(){
  
  if(tipoVendita === 'Terreno'){
    vendiTerreno();
  }
  else{
    vendiStazioneSocietà();
  }
}

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    <h2 style={{margin:'16px'}}>Cosa vuoi vendere</h2>
    <RadioGroup value={tipoVendita} onChange={handleChangeTipoVendita} style={{margin:'16px'}}>
        <FormControlLabel value="Terreno" control={<Radio />} label="Terreno" />
        <FormControlLabel value="StazioneSocietà" control={<Radio />} label="Stazione o Società" />
    </RadioGroup>
    
    <Grid container direction="column">
      <Grid container directio="row" alignItems="center">
        <h3 style={{margin:'16px'}}>Inserisci il nome della casella che vuoi vendere</h3>
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'32px', width:'350px'}} onChange={handleChangeTerreno}/>
      </Grid>
      <Grid container directio="row" alignItems="center">
        <h3 style={{margin:'16px'}}>Nome del venditore</h3>
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'265px', width:'350px'}} onChange={handleChangeVenditore}/>
      </Grid>
      <Grid container directio="row" alignItems="center">
        <h3 style={{margin:'16px'}}>Nome dell'aquirente</h3>
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'259px', width:'350px'}} onChange={handleChangeAcquirente}/>
      </Grid>
      <Grid container directio="row" alignItems="center">
        <h3 style={{margin:'16px'}}>Quanto dovrà pagare?</h3>
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'246px', width:'350px'}} onChange={handleChangePrezzo}/>
      </Grid>
      <Button variant="contained" style={{margin:'16px', width:'100px'}} onClick={() => vendita()} >
        Vendi
      </Button>
    </Grid>   
  </Paper>
);

return(
<div>
  <Button  width='20px' style={{marginLeft:'8px'}} onClick={handleOpenVendite}>
    Vendi
  </Button>
  <Modal open={openModalVendite} onClose={handleCloseVendite}>
    {body}
  </Modal>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={openVendite}
    autoHideDuration={6000}
    onClose={handleCloseSnackbarVendite}
    message={testoVendite}
    action={
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleCloseSnackbarVendite}> UNDO </Button>
      </React.Fragment>
    }
  />
</div>
);
}

export default GestoreVendite;