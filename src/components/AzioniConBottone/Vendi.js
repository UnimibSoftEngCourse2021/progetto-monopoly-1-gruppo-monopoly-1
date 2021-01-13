import React from 'react';
import {Paper, Modal, Button, Grid, TextField, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';


function Vendi(props){

    
  
    

//Stato del Modale utilizato per costruire un edificio
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };


//Stato del terreno da vendere
const [terreno, setTerreno] = React.useState('');
const handleChangeTerreno = (event) => {
  setTerreno(event.target.value);
};

//Stato del gicatore che vuole vendere
const [venditore, setVenditore] = React.useState('');
const handleChangeVenditore = (event) => {
  setVenditore(event.target.value);
};

//Stato del gicatore che vuole comprare, eventualmente la banca
const [aquirente, setAquirente] = React.useState('');
const handleChangeAquirente = (event) => {
  setAquirente(event.target.value);
};

//Stato del prezzo a cui viene venduta la proprietà
const [prezzo, setPrezzo] = React.useState('');
const handleChangePrezzo = (event) => {
  setPrezzo(event.target.value);
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

function EsisteSocietàStazione(){
  var i = 0;
  var esiste = false;
  var n;
  while(i < props.societàStazioni.length){
    if(terreno === props.societàStazioni[i].nome){
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

function EsisteGiocatore(nome){
  
  var i = 0;
  while(i < props.giocatori.length){
    if(nome === props.giocatori[i].nome){
     return(i); 
    }
    else{
      i++;
    }
  }
  return(-1);

}

function VendiTerreno(){

  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno();
  
  if(n === -1){
    alert('Controlla che il nome del terreno sia scritto in modo corretto');
    return;
  }
  var proprietà = props.terreni[n];
  
  if(!(proprietà.proprietario == venditore)){
    alert('Non puoi vendere qualcosa che non ti appartiene');
    return;
  }
  //verifico che il venditore esista e che non sia la banca
  var y = EsisteGiocatore(venditore);
  if(y === -1){
    alert('Controlla che il nome del venditore sia scritto in modo corretto');
    return;
  }
  var venditore2 = props.giocatori[y];
  
 
  
  //verifico che l'aquirente esista, può essere anche la banca
  var x = EsisteGiocatore(aquirente);
  var aquirente2;
  if(x === -1){
    alert("Controlla che il nome dell'aquirente sia scritto in modo corretto");
    return;
  }
  if(aquirente === 'Banca'){
    aquirente2 = aquirente;
  }
  else{
    aquirente2 = props.giocatori[x];
  }
  //verifico che sul terreno non ci siano ne case ne alberghi
  if(proprietà.case > 0 || proprietà.alberghi > 0){
    alert('Non puoi vendere un terreno con case o alberghi');
    return;
  }
  //Verifico che venditore e aquirente non siano lo stesso giocatore
  if(venditore2 === aquirente2){
    alert('Non puoi vendere a te stesso');
    return;
  }
  
  //verifico che il prezzo sia > 0
  if(prezzo <= 0){
    alert('Controlla di aver inserito un prezzo maggiore di zero');
    return;
  }
  //sposto i soldi dall'aquirente2 al venditore2
  if(prezzo > 0){
    aquirente2.capitale = aquirente2.capitale - parseInt(prezzo);
    venditore2.capitale = venditore2.capitale + parseInt(prezzo);
  }
  //aquirente diventa il nuovo proprietario della proprietà
  proprietà.proprietario = aquirente2.nome;
  
  //aggiorno le variabili di stato che contengono l'elenco dei terreni e dei giocatori
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;  
  props.setTerreni(nuoviTerreni);  
  
  var nuoviGiocatori = props.giocatori;
  nuoviGiocatori[x] = aquirente2;
  nuoviGiocatori[y] = venditore2;
  props.setGiocatori(nuoviGiocatori);

  console.log(props.giocatori);
  console.log(props.terreni);

  alert('La vendita è andata a buon fine');
}

function VendiStazioneSocietà(){

  //verifico che la società / stazione esista e salvo il risultato in proprietà
  var n = EsisteSocietàStazione();
  
  if(n === -1){
    alert('Controlla che il nome della società o della stazione sia scritto in modo corretto');
    return;
  }
  var proprietà = props.societàStazioni[n];
  
  if(!(proprietà.proprietario == venditore)){
    alert('Non puoi vendere qualcosa che non ti appartiene');
    return;
  }
  //verifico che il venditore esista 
  var y = EsisteGiocatore(venditore);
  if(y === -1){
    alert('Controlla che il nome del venditore sia scritto in modo corretto');
    return;
  }
  var venditore2 = props.giocatori[y];
  
 
  
  //verifico che l'aquirente esista
  var x = EsisteGiocatore(aquirente);
  var aquirente2;
  if(x === -1){
    alert("Controlla che il nome dell'aquirente sia scritto in modo corretto");
    return;
  }
  aquirente2 = props.giocatori[x];
  
  
  //Verifico che venditore e aquirente non siano lo stesso giocatore
  if(venditore2 === aquirente2){
    alert('Non puoi vendere a te stesso');
    return;
  }
  
  //verifico che il prezzo sia > 0
  if(prezzo <= 0){
    alert('Controlla di aver inserito un prezzo maggiore di zero');
    return;
  }
  //sposto i soldi dall'aquirente2 al venditore2
  if(prezzo > 0){
    aquirente2.capitale = aquirente2.capitale - parseInt(prezzo);
    venditore2.capitale = venditore2.capitale + parseInt(prezzo);
  }
  //aquirente diventa il nuovo proprietario della proprietà
  proprietà.proprietario = aquirente2.nome;
  
  //aggiorno le variabili di stato che contengono l'elenco delle società, delle stazioni e dei giocatori
  var nuoveSocietàStazioni = props.societàStazioni;
  nuoveSocietàStazioni[n] = proprietà;  
  props.setSocietàStazioni(nuoveSocietàStazioni);  
  
  var nuoviGiocatori = props.giocatori;
  nuoviGiocatori[x] = aquirente2;
  nuoviGiocatori[y] = venditore2;
  props.setGiocatori(nuoviGiocatori);

  console.log(props.giocatori);
  console.log(props.societàStazioni);

  alert('La vendita è andata a buon fine');
}



//Stato del RadioGrup per la gerstione del tipo di vendita
//si può scegliere se vendere terreni o stazioni/società
const [tipoVendita, setTipoVendita] = React.useState('Terreno');
const handleChangeTipoVendita = (event) => { setTipoVendita(event.target.value) };

function Vendita(){
  
  if(tipoVendita === 'Terreno'){
    VendiTerreno();
  }
  else{
    VendiStazioneSocietà();
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
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'259px', width:'350px'}} onChange={handleChangeAquirente}/>
      </Grid>
      <Grid container directio="row" alignItems="center">
        <h3 style={{margin:'16px'}}>Quanto dovrà pagare?</h3>
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'246px', width:'350px'}} onChange={handleChangePrezzo}/>
      </Grid>
      <Button variant="contained" style={{margin:'16px', width:'100px'}} onClick={() => Vendita()} >
        Vendi
      </Button>
    </Grid>

    
       
  </Paper>
);



return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" >
    Vendi
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default Vendi;