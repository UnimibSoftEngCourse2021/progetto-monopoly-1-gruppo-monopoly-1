import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, TextField, Grid} from '@material-ui/core';


function Costruisci(props){


//Stato del Modale utilizato per costruire un edificio
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };
const body = (
  <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>

    <h2 style={{margin:'16px'}}>Progetto Monopoli, università Milano Bicocca, anno accademico 2020/2021</h2>  
    <h2 style={{margin:'16px'}}>Autori:</h2>
    <h3 style={{margin:'16px'}}>Raffaele Cerizza</h3>
    <h3 style={{margin:'16px'}}>Ernesto Gallucci</h3>
    <h3 style={{margin:'16px'}}>Giulio Riggio</h3>
    <h3 style={{margin:'16px'}}>Alessandro Rosa</h3>

    <h2 style={{margin:'16px'}}>Professori:</h2>
    <h3 style={{margin:'16px'}}>Francesca Arcelli Fontana</h3>
    <h3 style={{margin:'16px'}}>Ilaria Pigazzini</h3>
    <h3 style={{margin:'16px'}}>Claudia Raibulet</h3>

    <Grid container direction="column">
    </Grid>
        
  </Paper>
);



return(
<div>
  <Button onClick={handleOpen} variant="outlined" size="small" >
    Autori
  </Button>
  <Modal open={openModal} onClose={handleClose}>
    {body}
  </Modal>
</div>
);
}
export default Costruisci;