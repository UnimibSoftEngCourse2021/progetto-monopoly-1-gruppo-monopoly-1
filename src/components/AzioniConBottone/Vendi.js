import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';


function Vendi(){

    

    

//Stato del Modale utilizato per costruire un edificio
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di edificio da costruire
const [cosa, setCosa] = React.useState('terreno');
const handleChangeCosa = (event) => { setCosa(event.target.value) };

//Stato del RadioGrup terreno usato per scegliere il terreno su cui costruire l'edificio
const [terreno, setTerreno] = React.useState('');
const handleChangeTerreno = (event) => { setTerreno(event.target.value) };

const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      
    <h2 style={{margin:'16px'}}>Cosa vuoi vendere?</h2>
    <RadioGroup value={cosa} onChange={handleChangeCosa} style={{margin:'16px'}}>
        <FormControlLabel value="terreno" control={<Radio />} label="Terreno" />
        <FormControlLabel value="casa" control={<Radio />} label="Casa" />
        <FormControlLabel value="albergo" control={<Radio />} label="Albergo" />
    </RadioGroup>

    {/*<h2 style={{margin:'16px'}}>Dove vuoi costruire?</h2>
    <RadioGroup value={terreno} onChange={handleChangeTerreno} style={{margin:'16px'}}>
        <FormControlLabel value="Via Roma" control={<Radio />} label="Via Roma" />
        <FormControlLabel value="Parco della Vittoria" control={<Radio />} label="Parco della Vittoria" />
</RadioGroup>*/}
    
    <Button variant="contained" style={{margin:'16px'}}  >
      Vendi
    </Button>
    
    
  </Paper>
);



return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" style={{marginLeft:'5px'}}>
    Vendi
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default Vendi;