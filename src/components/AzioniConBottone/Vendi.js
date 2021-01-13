import React from 'react';
import {Paper, Modal, Button, Grid, TextField, Snackbar} from '@material-ui/core';


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

//Stato della che visualizza il risultato della vendita
const [snackbar, setSnackbar] = React.useState(false);

  const handleClickSnackbar = () => {
    setSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  };

function EsisteTerreno(){
  var i = 0;
  var esiste = false;
  var n;
  while(i < props.terreni.length){
    if(terreno == props.terreni[i].nome){
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
    if(nome == props.giocatori[i].nome){
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
  
  if(n == -1){
    alert('Controlla che il nome del terreno sia scritto in modo corretto');
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il venditore esista e che non sia la banca
  var y = EsisteGiocatore(venditore);
  if(y == -1){
    alert('Controlla che il nome del venditore sia scritto in modo corretto');
    return;
  }
  var venditore2 = props.giocatori[y];
  //verifico che l'aquirente esista, può essere anche la banca
  var x = EsisteGiocatore(aquirente);
  var aquirente2;
  if(x == -1){
    alert("Controlla che il nome dell'aquirente sia scritto in modo corretto");
    return;
  }
  if(aquirente == 'Banca'){
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
  if(venditore2 == aquirente2){
    alert('Non puoi vendere a te stesso');
    return;
  }
  //Verifico che il terreno sia effettivamente di proprietà del venditore
  if(proprietà.proprietario ==! venditore2.nome){
    alert('Non puoi vendere un terreno non tuo');
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

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    
    
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
      <Button variant="contained" style={{margin:'16px', width:'100px'}} onClick={() => VendiTerreno()} >
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