import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid} from '@material-ui/core';


function PescaCarta(props){

    

    

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

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    <h4 style={{margin:'16px'}}>testo</h4>
    

    
    
      <Button variant="contained" style={{margin:'16px', width:'350px'}} >
        ok
      </Button>
   
    
    
    
  </Paper>
);





return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" style={{marginLeft:'5px'}}>
    Pesca probabilità
  </Button>
  <Button onClick={handleOpen} variant="outlined" size="small" style={{marginLeft:'5px'}}>
    Pesca imprevisti
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default PescaCarta;