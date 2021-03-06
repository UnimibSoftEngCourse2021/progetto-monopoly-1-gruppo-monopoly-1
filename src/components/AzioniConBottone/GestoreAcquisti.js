import React from 'react';
import {Paper, Modal, Button, Snackbar} from '@material-ui/core';
import Asta from './Asta';

//Funzione che gestisce l'acquisto di terreni o stazioni
function GestoreAcquisti(props){

  const [openAcquisti, setOpenAcquisti] = React.useState(false);
  const handleCloseSnackbarAcquisti = () => {setOpenAcquisti(false)};
  const [testoAcquisti, setTestoAcquisti] = React.useState('');

  const [openModalAcquisti, setOpenModalAcquisti] = React.useState(false);
  const handleOpenAcquisti = () => { setOpenModalAcquisti(true) };
  const handleCloseAcquisti = () => { setOpenModalAcquisti(false) };

  var c = props.caselle[props.attualeCasella];

  const acquistaProprieta = () => {
    if (c.tipo === 'terreno') { acquistaTerreno(); }
    if (c.tipo === 'societa' || c.tipo ==='stazione') { acquistaSocietaStazione(); }
  }

  const acquistaTerreno = () => { 
    var nuoviTerreni = props.terreni;
    var nuoviGiocatori = props.giocatori;
    
    var vecchioCapitale = nuoviGiocatori[props.turnoGiocatore].capitale;
    var nuovoCapitale;

    var i;
    for (i = 0; i < props.terreni.length; i++) {
      // Se la casella è un terreno trovo il nome nel array terreni
      // Join tra gli array per NOME
      // Se il giocatore ha abbastanza soldi procede con l'acquisto
      // Se il nome della casella di tipo terreno corrisponde al nome nell'array terreni
      // allora aggiorno il proprietario Sia in array Terreni sia in array Caselle    
      if (props.terreni[i].nome === props.caselle[props.attualeCasella].nome) {
        if (props.terreni[i].valore<=vecchioCapitale) {
        // Aggiorno array terreni
        nuoviTerreni[i].proprietario=props.turnoGiocatore;
        props.setTerreni(nuoviTerreni);  
        // Aggiorno array giocatori
        nuovoCapitale = vecchioCapitale-props.terreni[i].valore;
        nuoviGiocatori[props.turnoGiocatore].capitale=nuovoCapitale;
        props.setGiocatori(nuoviGiocatori);
        
        setTestoAcquisti('Il terreno è stato acquistato con successo');
        setOpenAcquisti(true); 
      } else {
        setTestoAcquisti('Non hai abbastanza soldi');
        setOpenAcquisti(true);
      }
      }
    }
  };

  const acquistaSocietaStazione = () => { 
    var nuoveSocietaStazioni = props.societàStazioni;
    var nuoviGiocatori = props.giocatori;

    nuoveSocietaStazioni[c.riferimento].proprietario = props.turnoGiocatore;

    nuoviGiocatori[props.turnoGiocatore].capitale = nuoviGiocatori[props.turnoGiocatore].capitale - nuoveSocietaStazioni[c.riferimento].valore;

    props.setSocietàStazioni(nuoveSocietaStazioni);
    props.setGiocatori(nuoviGiocatori);

    setTestoAcquisti('La società o la stazione è stata acquistata con successo');
    setOpenAcquisti(true);
  }

  //Funzione che mostra il proprietario dela casella
  function MostraProprietario(){
    if(c.tipo==='terreno'){
      if(props.terreni[c.riferimento].proprietario === -1){
        return(<h4 style={{margin:'16px'}}>Proprietario: nessuno</h4>);
      }
      else{
        return(<h4 style={{margin:'16px'}}>Proprietario: {props.terreni[c.riferimento].proprietario+1}</h4>);
      }
    }
    else{
      if(c.riferimento===-1){
        return(<h4 style={{margin:'16px'}}>Proprietario: questo tipo di caselle non può avere un proprietario</h4>);
      }
      else{
        if(props.societàStazioni[c.riferimento].proprietario === -1){
          return(<h4 style={{margin:'16px'}}>Proprietario: nessuno</h4>);
        }
        else{
          return(<h4 style={{margin:'16px'}}>Proprietario: {props.societàStazioni[c.riferimento].proprietario}</h4>);
        }
      }
    }
  }

  //Funzione che ritorna messaggi sulla casella
  function AcquistaCasella(){
    if(c.riferimento === -1){
      return(<h4 style={{margin:'16px'}}>Mi dispiace ma questa casella non può essere aquistata</h4> );
    }
    else{
      if((props.terreni[c.riferimento].proprietario!==-1) && (c.tipo==='terreno')){
        return(<h4 style={{margin:'16px'}}>Mi dispiace ma questa casella non può essere aquistata</h4>);
      }
      else{
        if((c.tipo==='societa' || c.tipo==='stazione') && (props.societàStazioni[c.riferimento].proprietario!==-1)){
          return(<h4 style={{margin:'16px'}}>Mi dispiace ma questa casella non può essere aquistata</h4>);
        }
      }
    }
    
    return(
      <Button variant="contained" style={{margin:'16px'}} onClick={() => acquistaProprieta()}>
        Acquista
      </Button>
    );
  }

  const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
          
      <h4 style={{margin:'16px'}}>Giocatore {props.turnoGiocatore+1} sei sulla casella numero {props.attualeCasella}</h4>
      <h4 style={{margin:'16px'}}>Di tipo: {c.tipo}</h4> 
      <h4 style={{margin:'16px'}}>Di nome: {c.nome}</h4>
      <MostraProprietario />
      
      <AcquistaCasella />

      <Asta 
        attualeCasella={props.attualeCasella}
        caselle={props.caselle} 
        setCaselle={props.setCaselle}
        turnoGiocatore={props.turnoGiocatore}
        terreni={props.terreni}
        setTerreni={props.setTerreni}
        giocatori={props.giocatori}
        setGiocatori={props.setGiocatori}
        societàStazioni={props.societàStazioni}
        setSocietàStazioni={props.setSocietàStazioni}
      />
        
    </Paper>
  );

  return(
    <div>
      <Button onClick={handleOpenAcquisti}  size="small" style={{marginLeft:'8px'}}>
        Acquista
      </Button>
      <Modal open={openModalAcquisti} onClose={handleCloseAcquisti}>
        {body}
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={openAcquisti}
        autoHideDuration={6000}
        onClose={handleCloseSnackbarAcquisti}
        message={testoAcquisti}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleCloseSnackbarAcquisti}> UNDO </Button>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default GestoreAcquisti;