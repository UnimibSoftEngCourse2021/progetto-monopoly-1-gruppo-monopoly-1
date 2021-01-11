import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';


function Acquista(props){

const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
        
      <h3 style={{margin:'16px'}}>Attualmente sei sulla casella {props.attualeCasella}</h3>

      <h4 style={{margin:'16px'}}>SI lo puoi acquistare</h4>  
      <h4 style={{margin:'16px'}}>non lo puoi acquistare, già acquisito</h4>  
      
      
      <Button variant="contained" style={{margin:'16px'}}  >
        Acquista
      </Button>
      
      
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