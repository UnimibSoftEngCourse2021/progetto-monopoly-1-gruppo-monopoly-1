import React, { Component } from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid} from '@material-ui/core';


function Costruisci(){

    

    

//Stato del Modale utilizato per costruire un edificio
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di edificio da costruire
const [edificio, setEdificio] = React.useState('casa');
const handleChangeTipoDiEdificio = (event) => { setEdificio(event.target.value) };

//Stato del RadioGrup terreno usato per scegliere il terreno su cui costruire l'edificio
const [terreno, setTerreno] = React.useState('');
const handleChangeTerreno = (event) => { setTerreno(event.target.value) };

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    <h2 style={{margin:'16px'}}>Cosa vuoi costruire?</h2>
    <RadioGroup value={edificio} onChange={handleChangeTipoDiEdificio} style={{margin:'16px'}}>
        <FormControlLabel value="casa" control={<Radio />} label="Casa" />
        <FormControlLabel value="albergo" control={<Radio />} label="Albergo" />
    </RadioGroup>

    <h2 style={{margin:'16px'}}>Dove vuoi costruire?</h2>
    <Grid container direction="column">
    <TextField variant="outlined" style={{margin:'16px', width:'350px'}}/>
    
    <Button variant="contained" style={{margin:'16px', width:'350px'}}  >
      Costruisci questo edificio
    </Button>
    </Grid>
    
    
  </Paper>
);



return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" style={{marginLeft:'5px'}}>
    Costruisci
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default Costruisci;