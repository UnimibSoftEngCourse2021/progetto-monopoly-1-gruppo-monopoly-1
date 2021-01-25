import React from 'react';
import {Paper, Modal, Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';

function UscitaPrigione(props) {

//Stato del Modale utilizato per uscire dalla prigione
const [openModal, setOpenModal] = React.useState(false);
const handleOpen = () => { setOpenModal(true) };
const handleClose = () => { setOpenModal(false) };

//Stato del RadioGrup casaAlbergo usato per scegliere la tipologia di uscita dalla prigione
const [uscita, setUscita] = React.useState('cauzione');
const handleChangeTipoDiUscita = (event) => { setUscita(event.target.value) };

function PagaCauzione() {
    if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].capitale > 125) {
            var nuoviGiocatori = props.giocatori;
            nuoviGiocatori[props.turnoGiocatore].capitale -= 125;
            nuoviGiocatori[props.turnoGiocatore].inPrigione = false;
            props.setGiocatori(nuoviGiocatori);
            alert("Giocatore " + (props.turnoGiocatore + 1) + " uscito dalla prigione."); 
    } else if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].capitale <= 125) {
            alert("Non hai abbastanza soldi per pagare la cauzione!");
    } else {
            alert("Non puoi pagare la cauzione se non sei in prigione!");
    }
    return;
}

function UsaCarta() {
    if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].carteUscitaPrigione > 0) {
            var nuoviGiocatori = props.giocatori;
            nuoviGiocatori[props.turnoGiocatore].carteUscitaPrigione -= 1;
            nuoviGiocatori[props.turnoGiocatore].inPrigione = false;
            props.setGiocatori(nuoviGiocatori);
            alert("Giocatore " + (props.turnoGiocatore + 1) + " uscito dalla prigione.");   
    } else if (props.giocatori[props.turnoGiocatore].inPrigione === true 
        && props.giocatori[props.turnoGiocatore].carteUscitaPrigione <= 0) {
            alert("Non hai carte da usare per uscire dalla prigione!");
    } else {
            alert("Non puoi usare carte per uscire dalla prigione se non sei in prigione!");
    }
    return;
}

function EsciDallaPrigione(){
    if(uscita === 'cauzione'){
        PagaCauzione();
    } else {
        UsaCarta();
    } 
}

const body = (
    <Paper style={{marginTop:'16px', marginLeft:'200px', marginRight:'200px'}}>
        <h2 style={{margin:'16px'}}>Cosa vuoi utilizzare per uscire dalla prigione?</h2>
        <RadioGroup value={uscita} onChange={handleChangeTipoDiUscita} style={{margin:'16px'}}>
            <FormControlLabel value="cauzione" control={<Radio />} label="Cauzione" />
            <FormControlLabel value="carta" control={<Radio />} label="Carta" />
        </RadioGroup>
        <Button variant="contained" style={{margin:'16px', width:'350px'}} onClick={() => EsciDallaPrigione()}>
            Conferma la scelta
        </Button>
    </Paper>
)

return (
    <div>
        <Button onClick={handleOpen} variant="outlined" size="small" >
            Esci dalla prigione
        </Button>
        <Modal open={openModal} onClose={handleClose}>
            {body}
        </Modal>
    </div>
);
}

export default UscitaPrigione;