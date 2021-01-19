import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';


function Acquista(props){

const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

const acquistaProprieta = () => {
  if (props.caselle[props.attualeCasella].tipo=='terreno') { acquistaTerreno(); }
  if (props.caselle[props.attualeCasella].tipo=='societa') { acquistaSocieta(); }
  if (props.caselle[props.attualeCasella].tipo=='stazione') { acquistaStazioni(); }
}

const acquistaTerreno = () => { 
  var nuoviTerreni = props.terreni;
  var nuoviGiocatori = props.giocatori;
  var nuoveCaselle = props.caselle;

  var vecchioCapitale = nuoviGiocatori[props.turnoGiocatore].capitale;
  var nuovoCapitale;

  var i;
  for (i = 0; i < props.terreni.length; i++) {
    // Se la casella è un terreno trovo il nome nel array terreni
    // Join tra gli array per NOME
    // Se il giocatore ha abbastanza soldi procede con l'acquisto
    // Se il nome della casella di tipo terreno corrisponde al nome nell'array terreni
    // allora aggiorno il proprietario Sia in array Terreni sia in array Caselle    
    if (props.terreni[i].nome==props.caselle[props.attualeCasella].nome) {
      if (props.terreni[i].valore<=vecchioCapitale) {
      // Aggiorno array terreni
      nuoviTerreni[i].proprietario=props.turnoGiocatore;
      props.setTerreni(nuoviTerreni);  
      // Aggiorno array giocatori
      nuovoCapitale = vecchioCapitale-props.terreni[i].valore;
      nuoviGiocatori[props.turnoGiocatore].capitale=nuovoCapitale;
      props.setGiocatori(nuoviGiocatori);
      // Aggiorno array caselle
      nuoveCaselle[props.attualeCasella].proprietario=props.turnoGiocatore;
      props.setCaselle(nuoveCaselle);
      alert('Terreno acquisito casella:'+props.attualeCasella); 
     } else {
      alert('Non hai abbastanza soldi'); 
     }
    }
  }
  
};

const acquistaSocieta = () => { 
  alert('da fare'); 
}

const acquistaStazioni = () => { 
  alert('da fare'); 
}

const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
        
      <h4 style={{margin:'16px'}}>Giocatore {props.turnoGiocatore} sei sulla casella {props.attualeCasella}</h4>
      <h4 style={{margin:'16px'}}>Di tipo: {props.caselle[props.attualeCasella].tipo}</h4> 
      <h4 style={{margin:'16px'}}>Di nome: {props.caselle[props.attualeCasella].nome}</h4> 
      <h4 style={{margin:'16px'}}>Proprietario: {props.caselle[props.attualeCasella].proprietario}</h4>
      
      {(props.caselle[props.attualeCasella].proprietario==-1 && 
         (props.caselle[props.attualeCasella].tipo=='terreno'
          ||
          props.caselle[props.attualeCasella].tipo=='societa'
          ||
          props.caselle[props.attualeCasella].tipo=='stazione')
        )?     
          <Button variant="contained" style={{margin:'16px'}} onClick={() => acquistaProprieta()}>
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