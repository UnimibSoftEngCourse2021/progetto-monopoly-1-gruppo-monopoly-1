import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid, Snackbar} from '@material-ui/core';
import EsisteTerreno from '../EsisteTerreno';
import Banca from '../Banca';


function GestoreVenditaEdifici(props){

const [openVenditaEdifici, setOpenVenditaEdifici] = React.useState(false);
const handleCloseSnackbarVenditaEdifici = () => {setOpenVenditaEdifici(false)};
const [testoVenditaEdifici, setTestoVenditaEdifici] = React.useState('');

//Stato del Modale utilizato per costruire un edificio
const [openModalVenditaEdifici, setOpenModalVenditaEdifici] = React.useState(false);
const handleOpenVenditaEdifici = () => { setOpenModalVenditaEdifici(true) };
const handleCloseVenditaEdifici = () => { setOpenModalVenditaEdifici(false) };

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di edificio da costruire
const [edificio, setEdificio] = React.useState('casa');
const handleChangeTipoDiEdificio = (event) => { setEdificio(event.target.value) };

//Stato del RadioGrup terreno usato per scegliere il terreno su cui costruire l'edificio
const [terreno, setTerreno] = React.useState(1);
const handleChangeTerreno = (event) => {
  setTerreno(event.target.value);
};

function vendiCasa(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno(props.terreni, terreno);
  if(n === -1){
    setTestoVenditaEdifici('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpenVenditaEdifici(true); 
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario !== props.turnoGiocatore)){
    setTestoVenditaEdifici('Non puoi vendere gli edifici se il terreno che non è tuo');
    setOpenVenditaEdifici(true); 
    return;
  }
  
  //Se sul terreno non ci sono case non ho nulla da vendere
  if(proprietà.case === 0){
    setTestoVenditaEdifici("Su questo terreno non ci sono case");
    setOpenVenditaEdifici(true); 
    return;
  }
  //modifico l'array terreni e l'array giocatori
  proprietà.case = proprietà.case - 1;
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);

  var nuoviGiocatori = props.giocatori;
  var guadagno = proprietà.valore*3/8;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale + guadagno;
  props.setGiocatori(nuoviGiocatori);

  var banca = Banca.getInstance();
  banca.incrementaCase();

  setTestoVenditaEdifici('La vendita della casa è andata a buon fine');
  setOpenVenditaEdifici(true); 
}

function vendiAlbergo(){
  //verifico che il terreno esista e salvo il risultato in proprietà
  var n = EsisteTerreno(props.terreni, terreno);
  if(n === -1){
    setTestoVenditaEdifici('Controlla che il nome del terreno sia scritto in modo corretto');
    setOpenVenditaEdifici(true); 
    return;
  }
  var proprietà = props.terreni[n];
  //verifico che il turnoGiocatore sia proprietario di proprietà
  if((proprietà.proprietario !== props.turnoGiocatore)){
    setTestoVenditaEdifici('Non puoi vendere gli edifici che non sono su un tuo terreno');
    setOpenVenditaEdifici(true); 
    return;
  }
  //Verifico ceh sul terreno ci sia un albergo
  if((proprietà.alberghi !== 1)){
    setTestoVenditaEdifici("Su questo terreno non c'è un albergo");
    setOpenVenditaEdifici(true); 
    return;
  }
  
  //modifico l'array terreni e l'array giocatori
  //quando vendo un albergo alla banca ricevo in cambio metà del prezzo d'aquisto e 4 case
  proprietà.alberghi = 0;
  proprietà.case = 4;
  var nuoviTerreni = props.terreni;
  nuoviTerreni[n] = proprietà;
  props.setTerreni(nuoviTerreni);

  var nuoviGiocatori = props.giocatori;
  var guadagno = proprietà.valore*3/8;
  nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale + guadagno;
  props.setGiocatori(nuoviGiocatori);

  var banca = Banca.getInstance();
  banca.incrementaAlberghi();

  setTestoVenditaEdifici("La vendita dell'albergo è andata a buon fine");
  setOpenVenditaEdifici(true); 
}

function vendiEdificio2(){
  if(edificio === 'casa'){
    vendiCasa();
  }
  else{
    vendiAlbergo();
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
    
      <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => vendiEdificio2()}>
        vendi questo edificio
      </Button>
    </Grid>
  </Paper>
);

return(
<div>
  <Button onClick={handleOpenVenditaEdifici} size="small" style={{marginLeft:'10px'}} >
    Vendi edificio
  </Button>
  <Modal open={openModalVenditaEdifici} onClose={handleCloseVenditaEdifici}>
    {body}
  </Modal>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={openVenditaEdifici}
    autoHideDuration={6000}
    onClose={handleCloseSnackbarVenditaEdifici}
    message={testoVenditaEdifici}
    action={
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleCloseSnackbarVenditaEdifici}> UNDO </Button>
      </React.Fragment>
    }
  />
</div>
);
}

export default GestoreVenditaEdifici;