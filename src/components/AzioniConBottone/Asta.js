import React from 'react';
import {Paper, Modal, Button, TextField, Grid, Snackbar} from '@material-ui/core';


function Asta(props){

const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

const [open, setOpen] = React.useState(false);
const handleCloseSnackbar = (event, reason) => {setOpen(false)};
const [testo, setTesto] = React.useState('');

var c = props.caselle[props.attualeCasella];

function AcquistaCasella(){

    const [vincitore, setVincitore] = React.useState('');
    const handleChangeVincitore = (event) => { setVincitore(event.target.value) };
    
    const [costo, setCosto] = React.useState('');
    const handleChangeCosto = (event) => { setCosto(event.target.value) };
  
    const acquistaProprieta = () => {
      if (c.tipo=='terreno') { acquistaTerreno(); }
      if (c.tipo=='societa' || c.tipo=='stazione') { acquistaSocietaStazione(); }
    }
    
    const acquistaTerreno = () => {
      
        var v = Number(vincitore);
        v--;
        
      var nuoviTerreni = props.terreni;
      var nuoviGiocatori = props.giocatori;
      if((v >= nuoviGiocatori.length) || (v<0)){
        setTesto('Controlla di aver inserito correttamente il vincitore');
        setOpen(true);
        return;
      }
      if(costo < 1){
        setTesto('Controlla di aver inserito correttamente il costo');
        setOpen(true);
        return;
      }
      
    console.log(nuoviGiocatori);
      var vecchioCapitale = nuoviGiocatori[v].capitale;
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
          nuoviTerreni[i].proprietario= v;
          props.setTerreni(nuoviTerreni);  
          // Aggiorno array giocatori
          nuovoCapitale = vecchioCapitale - costo;
          nuoviGiocatori[v].capitale=nuovoCapitale;
          props.setGiocatori(nuoviGiocatori);
          setTesto('Il terreno è stato acquistato con successo');
          setOpen(true);
         } else {
          setTesto('Non hai abbastanza soldi');
          setOpen(true);
         }
        }
      }
      
    };
    
    const acquistaSocietaStazione = () => { 

        var v = Number(vincitore);
        v--;

      var nuoveSocietaStazioni = props.societàStazioni;
      var nuoviGiocatori = props.giocatori;
      if((v >= nuoviGiocatori.length) || (v<0)){
        setTesto('Controlla di aver inserito correttamente il vincitore');
        setOpen(true);
        return;
      }
      if(costo < 1){
        setTesto('Controlla di aver inserito correttamente il costo');
        setOpen(true);
        return;
      }
    
      nuoveSocietaStazioni[c.riferimento].proprietario = v;
    
      nuoviGiocatori[v].capitale = nuoviGiocatori[v].capitale - costo;
    
      props.setSocietàStazioni(nuoveSocietaStazioni);
      props.setGiocatori(nuoviGiocatori);
      setTesto('La società o la stazione è stata acquistata con successo');
      setOpen(true);
    }
    
  
  return(
      <Grid container direction="column">
          <h4 style={{margin:'16px'}}>Adesso potete svolgere un asta su questa proprietà</h4>
          <h4 style={{margin:'16px'}}>Chi ha vinto l'asta?</h4>
          <TextField variant="outlined" style={{margin:'16px', width:'400px'}} onChange={handleChangeVincitore}/>
          <h4 style={{margin:'16px'}}>Quanto dovrà pagare?</h4>
          <TextField variant="outlined" style={{margin:'16px', width:'400px'}} onChange={handleChangeCosto} />
          <Button 
            variant="contained" 
            style={{margin:'16px', width:'400px'}} 
            onClick={() => acquistaProprieta()}>
              Concludi l'asta
          </Button>
      </Grid>
    
  );
}

const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
      <AcquistaCasella />
    </Paper>
  );

    return(
        <div>
            {((c.riferimento === -1)||
              ((props.terreni[c.riferimento].proprietario!==-1) && (c.tipo==='terreno'))||
              ((c.tipo==='societa' || c.tipo==='stazione') && (props.societàStazioni[c.riferimento].proprietario!==-1))
              )?
              null
              :
              <div>
                <h4 style={{margin:'16px'}}>Se decidi di non acquistare questa casella verrà messa all'asta</h4>
                <Button onClick={handleOpen} variant="contained" style={{margin:'16px'}}>
                    Metti all'asta
                </Button>
                <Modal open={openModal} onClose={handleClose}>
                    {body}
                </Modal>
              </div>
            }
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={open}
              autoHideDuration={6000}
              onClose={handleCloseSnackbar}
              message={testo}
              action={
                <React.Fragment>
                  <Button color="secondary" size="small" onClick={handleCloseSnackbar}> UNDO </Button>
                </React.Fragment>
              }
            />
        </div>
        );
        }

export default Asta;