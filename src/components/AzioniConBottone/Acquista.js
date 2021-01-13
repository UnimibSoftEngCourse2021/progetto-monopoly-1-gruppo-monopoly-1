import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';


function Acquista(props){

const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

const acquistaTerreno = () => { 
  props.caselle[props.attualeCasella].proprietario=props.turnoGiocatore;
  alert('acquisito'); 
};

const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
        
      <h4 style={{margin:'16px'}}>Giocatore {props.turnoGiocatore} sei sulla casella {props.attualeCasella}</h4>
      <h4 style={{margin:'16px'}}>Di tipo: {props.caselle[props.attualeCasella].tipo}</h4> 
      <h4 style={{margin:'16px'}}>Di nome: {props.caselle[props.attualeCasella].nome}</h4> 
      <h4 style={{margin:'16px'}}>Proprietario: {props.caselle[props.attualeCasella].proprietario}</h4>
      
      {(props.caselle[props.attualeCasella].proprietario=='' && props.caselle[props.attualeCasella].tipo=='terreno')?     
          <Button variant="contained" style={{margin:'16px'}} onClick={() => acquistaTerreno()}>
          Acquista
          </Button> : 
          <h4 style={{margin:'16px'}}>non lo puoi acquistare</h4>  }
      
    </Paper>
  );

    return(
        <div>
          <Button onClick={handleOpen} variant="outlined" size="small" style={{marginLeft:'5px'}}>
          Acquista
          </Button>
          <Modal open={openModal} onClose={handleClose}>
            {body}
          </Modal>
        </div>
        );
        }

export default Acquista;