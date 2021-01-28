import React from 'react';
import {Paper, Modal, Button, Grid, TextField, Radio, RadioGroup, FormControlLabel, Snackbar} from '@material-ui/core';
import EsisteTerreno from '../EsisteTerreno';
import EsisteSocietàStazione from '../EsisteSocietàStazione';

function GestoreIpoteche(props){

  const [openIpoteche, setOpenIpoteche] = React.useState(false);
  const handleCloseSnackbarIpoteche = (event, reason) => {setOpenIpoteche(false)};
  const [testoIpoteche, setTestoIpoteche] = React.useState('');
  
//Stato del Modale utilizato per costruire un edificio
const [openModalIpoteche, setOpenModalIpoteche] = React.useState(false);
const handleOpenIpoteche = () => { setOpenModalIpoteche(true) };
const handleCloseIpoteche = () => { setOpenModalIpoteche(false) };

//Stato del terreno da vendere
const [terreno, setTerreno] = React.useState('');
const handleChangeTerreno = (event) => {
  setTerreno(event.target.value);
};

//Stato del RadioGrup per la gerstione del tipo di vendita
//si può scegliere se vendere terreni o stazioni/società
const [tipoVendita, setTipoVendita] = React.useState('Terreno');
const handleChangeTipoVendita = (event) => { setTipoVendita(event.target.value) };

//Stato del RadioGrup per la gerstione dell'azione da svolgere
//si può scegliere tra ipotecare o riscattare l'ipoteca
const [azione, setAzione] = React.useState('Ipoteca');
const handleChangeAzione = (event) => { setAzione(event.target.value) };

function ipotecaTerreno(){

  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno(props.terreni, terreno);
  
  if(n === -1){
    setTestoIpoteche('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpenIpoteche(true); 
    return;
  }
  var proprietà = props.terreni[n];
  
 
  //verifico che sul terreno non ci siano ne case ne alberghi
  if(proprietà.case > 0 || proprietà.alberghi > 0){
    setTestoIpoteche('Non puoi ipotecare un terreno con case o alberghi');
    setOpenIpoteche(true); 
    return;
  }
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario != props.turnoGiocatore)){
    setTestoIpoteche('Non puoi ipotecare una proprietà che non ti appartiene');
    setOpenIpoteche(true);
    return;
  }
  
  //modifico l'array terreni e l'array giocatori
  proprietà.ipotecato = true;
  console.log(proprietà);
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);
  console.log(props.terreni);

  var nuoviGiocatori = props.giocatori;
  var guadagno = proprietà.valore/2;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale + guadagno;
  props.setGiocatori(nuoviGiocatori);
  console.log(props.giocatori);

  setTestoIpoteche('Questa proprietà è stata ipotecata');
  setOpenIpoteche(true); 
}

function ipotecaStazioneSocietà(){

  //verifico che la società / stazione esista e salvo il risultato in proprietà
  var n = EsisteSocietàStazione(props.societàStazioni, terreno);
  
  if(n === -1){
    setTestoIpoteche('Controlla che il nome della società o della stazione sia scritto in modo corretto');
    setOpenIpoteche(true); 
    return;
  }
  var proprietà = props.societàStazioni[n];
  
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario != props.turnoGiocatore)){
    setTestoIpoteche('Non puoi Ipotecare una proprietà che non ti appartiene');
    setOpenIpoteche(true);
    return;
  }
   
  //modifico l'array terreni e l'array giocatori
  proprietà.ipotecato = true;
  console.log(proprietà);
  var nuoveSocietàStazioni = props.societàStazioni;
  nuoveSocietàStazioni[n] = proprietà;
  props.setSocietàStazioni(nuoveSocietàStazioni);
  console.log(props.societàStazioni);

  var nuoviGiocatori = props.giocatori;
  var guadagno = proprietà.valore/2;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale + guadagno;
  props.setGiocatori(nuoviGiocatori);
  console.log(props.giocatori);

  setTestoIpoteche('Questa proprietà è stata ipotecata');
  setOpenIpoteche(true); 
}

function ipoteca2(){
  
    if(tipoVendita === 'Terreno'){
      ipotecaTerreno();
    }
    else{
      ipotecaStazioneSocietà();
    }
  }

function riscattaTerreno(){

    //verifico che il terreno esista e salvo il risultato in proprietà
    var n = EsisteTerreno(props.terreni, terreno);
    
    if(n === -1){
      setTestoIpoteche('Controlla che il nome del terreno sia scritto in modo corretto');
      setOpenIpoteche(true); 
      return;
    }
    var proprietà = props.terreni[n];
    
    //verifico  il terreno sia ipotecato
    if(proprietà.ipotecato === false){
      setTestoIpoteche('Non puoi riscattare un terreno che non è ipotecato');
      setOpenIpoteche(true); 
      return;
    }
    //verifico che il turnoGiocatore sia proprietario di proprietà
    if((proprietà.proprietario != props.turnoGiocatore)){
      setTestoIpoteche('Non puoi Ipotecare una proprietà che non ti appartiene');
      setOpenIpoteche(true); 
      return;
    }
    
    //modifico l'array terreni e l'array giocatori
    proprietà.ipotecato = false;
    console.log(proprietà);
    var nuoviTerreni = props.terreni;
    nuoviTerreni[n] = proprietà;
    props.setTerreni(nuoviTerreni);
    console.log(props.terreni);
  
    var nuoviGiocatori = props.giocatori;
    var spesa = (proprietà.valore/2) +(proprietà.valore/10);
    nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - spesa;
    props.setGiocatori(nuoviGiocatori);
    console.log(props.giocatori);
  
    setTestoIpoteche("L'ipoteca su questa proprietà è stata riscattata con successo");
    setOpenIpoteche(true); 
  }
  
  function riscattaStazioneSocietà(){
  
    //verifico che la società / stazione esista e salvo il risultato in proprietà
    var n = EsisteSocietàStazione(props.societàStazioni, terreno);
    
    if(n === -1){
      setTestoIpoteche('Controlla che il nome della società o della stazione sia scritto in modo corretto');
      setOpenIpoteche(true); 
      return;
    }
    var proprietà = props.societàStazioni[n];
    
    //verifico che il turnoGiocatore sia proprietario di proprietà
    if((proprietà.proprietario != props.turnoGiocatore)){
      setTestoIpoteche('Non puoi Ipotecare una proprietà che non ti appartiene');
      setOpenIpoteche(true); 
      return;
    }
    //verifico  la società/stazione sia ipotecata
    if(proprietà.ipotecato === false){
      setTestoIpoteche('Non puoi riscattare una società o una stazione che non è ipotecata');
      setOpenIpoteche(true); 
      return;
    }
     
    //modifico l'array terreni e l'array giocatori
    proprietà.ipotecato = false;
    console.log(proprietà);
    var nuoveSocietàStazioni = props.societàStazioni;
    nuoveSocietàStazioni[n] = proprietà;
    props.setSocietàStazioni(nuoveSocietàStazioni);
    console.log(props.societàStazioni);
  
    var nuoviGiocatori = props.giocatori;
    var spesa = (proprietà.valore/2) + (proprietà.valore/10);
    nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - spesa;
    props.setGiocatori(nuoviGiocatori);
    console.log(props.giocatori);
  
    setTestoIpoteche("L'ipoteca su questa proprietà è stata riscattata con successo");
    setOpenIpoteche(true); 
  }
  
  function riscatta(){
      if(tipoVendita === 'Terreno'){
        riscattaTerreno();
      }
      else{
        riscattaStazioneSocietà();
      }
    }
  
const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>

     <h2 style={{margin:'16px'}}>Che azione vuoi svolgere</h2>
    <RadioGroup value={azione} onChange={handleChangeAzione} style={{margin:'16px'}}>
        <FormControlLabel value="Ipotecare" control={<Radio />} label="Ipotecare" />
        <FormControlLabel value="Riscattare" control={<Radio />} label="Riscattare" />
    </RadioGroup>

    <h2 style={{margin:'16px'}}>Su quale proprietà?</h2>
    <RadioGroup value={tipoVendita} onChange={handleChangeTipoVendita} style={{margin:'16px'}}>
        <FormControlLabel value="Terreno" control={<Radio />} label="Terreno" />
        <FormControlLabel value="StazioneSocietà" control={<Radio />} label="Stazione o Società" />
    </RadioGroup>
    
    <Grid container direction="column">
      <Grid container directio="row" alignItems="center">
        <h3 style={{margin:'16px'}}>Inserisci il nome della casella che vuoi ipotecare o riscattare</h3>
        <TextField variant="outlined" style={{margin:'16px', marginLeft:'32px', width:'350px'}} onChange={handleChangeTerreno}/>
      </Grid>
      
      
      {azione==='Ipotecare'?
      <Button variant="contained" style={{margin:'16px', width:'100px'}} onClick={() => ipoteca2()} >
        ipoteca
      </Button>
      :
      <Button variant="contained" style={{margin:'16px', width:'200px'}} onClick={() => riscatta()} >
        Riscatta ipoteca
      </Button>
      }
    </Grid>  
  </Paper>
);

return(
<div>
  <Button onClick={handleOpenIpoteche}  width='20px' >
    Ipoteca
  </Button>
  <Modal open={openModalIpoteche} onClose={handleCloseIpoteche}>
    {body}
  </Modal>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={openIpoteche}
    autoHideDuration={6000}
    onClose={handleCloseSnackbarIpoteche}
    message={testoIpoteche}
    action={
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleCloseSnackbarIpoteche}> UNDO </Button>
      </React.Fragment>
    }
  />
</div>
);
}

export default GestoreIpoteche;