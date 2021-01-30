import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel, Snackbar} from '@material-ui/core';

function GestoreUscitaPrigione(props) {

//Stato del Modale utilizato per uscire dalla prigione
const [openModalPrigione, setOpenModalPrigione] = React.useState(false);
const handleOpenPrigione = () => { setOpenModalPrigione(true) };
const handleClosePrigione = () => { setOpenModalPrigione(false) };

const [openPrigione, setOpenPrigione] = React.useState(false);
const handleCloseSnackbarPrigione = () => {setOpenPrigione(false)};
const [testoPrigione, setTestoPrigione] = React.useState('');

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di uscita dalla prigione
const [uscita, setUscita] = React.useState('cauzione');
const handleChangeTipoDiUscita = (event) => { setUscita(event.target.value) };

function pagaCauzione() {
    if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].capitale > 125) {
            var nuoviGiocatori = props.giocatori;
            nuoviGiocatori[props.turnoGiocatore].capitale -= 125;
            nuoviGiocatori[props.turnoGiocatore].inPrigione = false;
            props.setGiocatori(nuoviGiocatori);
            setTestoPrigione("Giocatore " + (props.turnoGiocatore + 1) + " paga la cauzione di € 125. Giocatore " + (props.turnoGiocatore + 1) + " uscito dalla prigione. ");
            setOpenPrigione(true);
    } else if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].capitale <= 125) {
            setTestoPrigione("Non hai abbastanza soldi per pagare la cauzione!");
            setOpenPrigione(true);
    } else {
        setTestoPrigione("Non puoi pagare la cauzione se non sei in prigione!");
        setOpenPrigione(true); 
    }
    return;
}

function usaCarta() {
    if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].carteUscitaPrigione > 0) {
            var nuoviGiocatori = props.giocatori;
            nuoviGiocatori[props.turnoGiocatore].carteUscitaPrigione -= 1;
            nuoviGiocatori[props.turnoGiocatore].inPrigione = false;
            props.setGiocatori(nuoviGiocatori);
            setTestoPrigione("Giocatore " + (props.turnoGiocatore + 1) + " usa una carta per uscire dalla prigione. Giocatore " 
                            + (props.turnoGiocatore + 1) + " uscito dalla prigione. ");
            setOpenPrigione(true);
    } else if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].carteUscitaPrigione <= 0) {
            setTestoPrigione("Non hai carte da usare per uscire dalla prigione!");
            setOpenPrigione(true);
    } else {
        setTestoPrigione("Non puoi usare carte per uscire dalla prigione se non sei in prigione!");
        setOpenPrigione(true);
    }
    return;
}

function esciDallaPrigione(){
    if(uscita === 'cauzione'){
        pagaCauzione();
    } else {
        usaCarta();
    } 
}

const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
        <h2 style={{margin:'16px'}}>Cosa vuoi utilizzare per uscire dalla prigione?</h2>
        <RadioGroup value={uscita} onChange={handleChangeTipoDiUscita} style={{margin:'16px'}}>
            <FormControlLabel value="cauzione" control={<Radio />} label="Cauzione" />
            <FormControlLabel value="carta" control={<Radio />} label="Carta" />
        </RadioGroup>
        <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => esciDallaPrigione()}>
            Conferma la scelta
        </Button>
    </Paper>
)

return (
    <div>
        <Button onClick={handleOpenPrigione} variant="outlined" size="small" >
            Esci dalla prigione
        </Button>
        <Modal open={openModalPrigione} onClose={handleClosePrigione}>
            {body}
        </Modal>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={openPrigione}
            autoHideDuration={6000}
            onClose={handleCloseSnackbarPrigione}
            message={testoPrigione}
            action={
              <React.Fragment>
                <Button color="secondary" size="small" onClick={handleCloseSnackbarPrigione}> UNDO </Button>
              </React.Fragment>
            }
        />
    </div>
);
}

export default GestoreUscitaPrigione;