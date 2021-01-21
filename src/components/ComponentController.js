import { Button, Link } from '@material-ui/core';
import React from 'react';
import Acquista from './AzioniConBottone/Acquista';
import Costruisci from './AzioniConBottone/Costruisci';
import Vendi from './AzioniConBottone/Vendi';
import VendiEdificio from './AzioniConBottone/VendiEdificio';
import Ipoteca from './AzioniConBottone/Ipoteca';
import Abbandona from './AzioniConBottone/Abbandona';
import Carte from './CarteProbabilitaImprevisto/Carte';
import Banca from './Banca';


let dado1;
let dado2;
let sommaDadi;
let punteggioDoppio;
let carta1 = new Carte();
let dadiTirati; // Questo booleano permette di tirare i dadi solo ina volta per turno
let numeroTiriDadi = 0;

function verificaPunteggioDoppio(dado1, dado2){
    if(dado1 === dado2){
        return true;
    }else{
        return false;
    }
}

class ComponentController extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            primoMsgTA: '',
            secondoMsgTA: '',
            terzoMsgTA: '',
            quartoMsgTA: '',
            quintoMsgTA: '',
            sestoMsgTA: '',
            settimoMsgTA: '',
            tiroDoppio: 0
        };
      }

    spostaSegnalino (sommaDadi) {
        let numSegnalino = this.props.turnoGiocatore;
        let ascissa = this.props.segnalini[numSegnalino].ascissa;
        let ordinata = this.props.segnalini[numSegnalino].ordinata;
        let attualeCasella = this.props.segnalini[numSegnalino].attualeCasella;
        
        var i;
        for (i = 1; i < sommaDadi+1; i++) {
            if (attualeCasella === 39) {
                attualeCasella=0;
                let banca = new Banca();
                banca.giocatorePassaDalVia(this.props.giocatori,this.props.turnoGiocatore,this.props.setGiocatori);
            } else {
                attualeCasella = attualeCasella + 1
            }        
          }

        ascissa = this.props.tavolaGioco[attualeCasella][1];
        ordinata = this.props.tavolaGioco[attualeCasella][2];
  
        // Imposta l'ascissa e l'ordinata della pedina in modo che coincidano con
        // l'ascissa e l'ordinata della casella su cui è finito il giocatore.
        this.props.segnalini[numSegnalino].ascissa=ascissa;
        this.props.segnalini[numSegnalino].ordinata=ordinata;
        this.props.segnalini[numSegnalino].attualeCasella=attualeCasella;

        // Se il giocatore finisce sulla casella "Vai in Prigione", allora la sua pedina
        // viene spostata in Prigione.
        if (this.props.segnalini[numSegnalino].attualeCasella === 30) {
            alert("Vai in Prigione.");
            this.props.segnalini[numSegnalino].ascissa = this.props.tavolaGioco[10][1];
            this.props.segnalini[numSegnalino].ordinata = this.props.tavolaGioco[10][2];
            this.props.segnalini[numSegnalino].attualeCasella = 10;
        }

        if (this.props.caselle[attualeCasella].tipo ==='imprevisti') {
           // alert('imprevisti');
           carta1.estraiCarta(false, this.props.turnoGiocatore, this.props.giocatori, this.props.setGiocatori, this.props.segnalini[this.props.turnoGiocatore].attualeCasella, this.props.terreni);

           /*
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
      
      alert('Il terreno è stato acquistato con successo'); 
     }




                caselle={this.props.caselle} 
                setCaselle={this.props.setCaselle}
                turnoGiocatore={this.props.turnoGiocatore}
                terreni={this.props.terreni}
                setTerreni={this.props.setTerreni}
                giocatori={this.props.giocatori}
                setGiocatori={this.props.setGiocatori}
                societàStazioni={this.props.societàStazioni}
                setSocietàStazioni={this.props.setSocietàStazioni}
           */
        };
        if (this.props.caselle[attualeCasella].tipo ==='probabilita') {
            //alert('probabilita');
            carta1.estraiCarta(true, this.props.turnoGiocatore, this.props.giocatori, this.props.setGiocatori, this.props.segnalini[this.props.turnoGiocatore].attualeCasella, this.props.terreni);
        };        

        this.props.muoviPedine();
        this.pagaAffitto();
        this.pagaTasse(); 

    }       

    dadiTirati = false;

    tiraDadi = () => {
        
        if (!dadiTirati && this.state.tiroDoppio <= 2){
            dado1 = Math.floor(Math.random()*6) + 1;
            dado2 = Math.floor(Math.random()*6) + 1;
            sommaDadi = dado1 + dado2;
            numeroTiriDadi = numeroTiriDadi + 1;
            punteggioDoppio = verificaPunteggioDoppio(dado1, dado2);
            if ((dado1 !== dado2) || (dado1 === dado2) && (numeroTiriDadi === 3)) {
                dadiTirati = true;
                numeroTiriDadi = 0;
            }
            this.spostaSegnalino(sommaDadi);  

            var lanciDoppi = this.state.tiroDoppio;
            var msg1;
            var msg2=this.state.primoMsgTA;
            var msg3=this.state.secondoMsgTA;
            var msg4=this.state.terzoMsgTA;
            var msg5=this.state.quartoMsgTA;
            var msg6=this.state.quintoMsgTA;
            var msg7=this.state.sestoMsgTA;

            if (punteggioDoppio) {                
                lanciDoppi +=1;
                msg1='Giocatore:'+(this.props.turnoGiocatore+1)+' il punteggio dei dadi è doppio: '+dado1+' + '+dado2+' Ripetuto:'+lanciDoppi
                if (lanciDoppi==3) {
                    // Vai in prigione
                }
            }
            else {
                lanciDoppi=0;
                msg1='Giocatore:'+(this.props.turnoGiocatore+1)+' il punteggio dei dadi è: '+dado1+' + '+dado2
            }

            this.setState({
                primoMsgTA: msg1,
                secondoMsgTA: msg2,
                terzoMsgTA: msg3,
                quartoMsgTA: msg4,
                quintoMsgTA: msg5,
                sestoMsgTA: msg6,
                settimoMsgTA: msg7,
                tiroDoppio: lanciDoppi,
            })  
            
            /*
            this.setState({
                primoMsgTA: `${sommaDadi}`,
                secondoMsgTA: 'Il punteggio dei dadi è doppio: '+dado1+' + '+dado2 +' ' + `${punteggioDoppio}`,
                terzoMsgTA: `${sommaDadi}`
            })  
            */
        }
        else {
            alert('Non puoi tirare nuovamente i dadi.');
        }
    }

    // Funzione che permette di concludere il turno e che passa il comando al giocatore successivo.
    // Per comunicare ai giocatori questo cambiamento viene utilizzato un alert.
    finisciTurno = () => {
        const giocatore = this.props.turnoGiocatore;
        var giocatore2;
        if(giocatore === this.props.numeroGiocatori-1){
            giocatore2 = 0;
        }
        else{
            giocatore2 = giocatore + 1;
        }
        
        if(this.props.giocatori[giocatore2].inGioco===false){
            //cerco il primo giocatore in gioco
            var i = giocatore2;
            var x = true;
            
            while(x){
                
                if(this.props.giocatori[i].inGioco === true){
                    giocatore2 = i;
                    x = false;
                }
                else{
                    if(i===this.props.numeroGiocatori-1){
                        i = 0;
                    }
                    else{
                        i++;
                    }
                }
            }
            
        }

        dadiTirati = false;
        this.props.setTurnoGiocatore(giocatore2);  

        

        this.fallimentoVittoria();

        if(!(this.props.tempo === null)){
            this.partitaATempo();
        }

        //alert('Ora tocca ad un altro giocatore');
        
    }

    //Questa funzione verifica se il giocatore che ha concluso il turno non ha più soldi
    //verifica anche che ci siano almeno 2 giocatori in gioco se ne è rimasto solo uno ha vinto
    fallimentoVittoria = ()=>{
        var i;
        var n = 0;
        for(i=0; i<this.props.giocatori.length; i++){
            if(this.props.giocatori[i].inGioco === true){ 
                n++;
            }
        }
        
        if(n === 1){
            var vincitore;
            for(i=0; i<this.props.giocatori.length; i++){
                if(this.props.giocatori[i].inGioco === true){ 
                    vincitore = this.props.giocatori[i].numero;
                }
            }
            alert('Giocatore: '+ vincitore +' hai vinto');
            //concludere la partita
            return;
        }

        if(this.props.giocatori[this.props.turnoGiocatore].capitale <= 0){
           alert('Giocatore: ' + this.props.giocatori[this.props.turnoGiocatore].numero  + ' \n Non hai più soldi hai perso ');
           var nuoviGiocatori = this.props.giocatori;
           nuoviGiocatori[this.props.turnoGiocatore].inGioco = false;
           this.props.setGiocatori(nuoviGiocatori);
           console.log(this.props.giocatori);
           return;
           
        }
        else{
            return false;
        }

    }

    //Questa funzione decrementa il numero di turni che mancano allo scadere del tempo
    //se il tempo è finito stabilisce un vincitore confrontando i capitali dei giocatori rimasti
    partitaATempo = ()=>{
        var nuovoTempo = this.props.tempo;
        nuovoTempo = nuovoTempo - 1;
        this.props.setTempo(nuovoTempo);
        if(this.props.tempo === 0){
            var vincitore = this.props.giocatori[0];
            var i;
                        
            for(i=1; i<this.props.giocatori.length; i++){
                if(vincitore.capitale < this.props.giocatori[i].capitale){
                    vincitore = this.props.giocatori[i];
                }
            }
            console.log(vincitore);
            //verifico che ci sia un pareggio
            var pareggio = 0;
            var n = 0;
            while(n<this.props.giocatori.length){
                if(vincitore.capitale === this.props.giocatori[n].capitale){
                    pareggio++
                }
                n++;
            }
            
           console.log(pareggio);
            
            
            if(pareggio<2){
                alert('Giocatore: '+ vincitore.numero +' hai vinto');
                //concludere la partita
                return;
            }
            else{
                alert("C'é stato un pareggio");
                //concludere la partita
                return;
            }


        }
        else{
            //continua la partita
        }
    }

    //Questa funzione si occupa di verificare se la casella su cui mi trovo richiede il pagamento di un affitto
    //e modifica l'array giocatori di conseguenza
    pagaAffitto = ()=>{
        var attualeCasella = this.props.segnalini[this.props.turnoGiocatore].attualeCasella;
        var casella = this.props.caselle[attualeCasella];
        var affitto;
        var nuoviGiocatori;
        
        if(casella.tipo === 'terreno'){
            var terreno = this.props.terreni[casella.riferimento];
            //Non si paga l'affitto se il terreno è ipotecato
            if(terreno.ipotecato === true){
                return;
            }
            //Non si paga l'affitto se il terreno non ha un proprietario
            if(terreno.proprietario === -1){
                return;
            }
            //Non pago l'affitto a me stesso
            if(terreno.proprietario === this.props.turnoGiocatore){
                return;
            }
            affitto = terreno.valore*5/100;
            if(terreno.case > 0){
                affitto = affitto + ((terreno.valore*5/100)*terreno.case);
            }
            if(terreno.alberghi > 0){
                affitto = affitto*4;
            }

            nuoviGiocatori = this.props.giocatori;
            nuoviGiocatori[this.props.turnoGiocatore].capitale =  nuoviGiocatori[this.props.turnoGiocatore].capitale - affitto;
            nuoviGiocatori[terreno.proprietario].capitale = nuoviGiocatori[terreno.proprietario].capitale + affitto;
            this.props.setGiocatori(nuoviGiocatori);
            console.log(this.props.giocatori);
        }

        if(casella.tipo === 'stazione'){
            var stazione = this.props.societàStazioni[casella.riferimento];
            //Non si paga l'affitto se la stazione è ipotecata
            if(stazione.ipotecato === true){
                return;
            }
            //Non si paga l'affitto se la stazione non ha un proprietario
            if(stazione.proprietario === -1){
                return;
            }
            //Non pago l'affitto a me stesso
            if(stazione.proprietario === this.props.turnoGiocatore){
                return;
            }
            affitto = 50;
            
            nuoviGiocatori = this.props.giocatori;
            nuoviGiocatori[this.props.turnoGiocatore].capitale =  nuoviGiocatori[this.props.turnoGiocatore].capitale - affitto;
            nuoviGiocatori[stazione.proprietario].capitale = nuoviGiocatori[stazione.proprietario].capitale + affitto;
            this.props.setGiocatori(nuoviGiocatori);
        }

        if(casella.tipo === 'societa'){
            var società = this.props.societàStazioni[casella.riferimento];
            //Non si paga l'affitto se la società è ipotecata
            if(società.ipotecato === true){
                return;
            }
            //Non si paga l'affitto se la società non ha un proprietario
            if(società.proprietario === -1){
                return;
            }
            //Non pago l'affitto a me stesso
            if(società.proprietario === this.props.turnoGiocatore){
                return;
            }
            affitto = 50;            

            nuoviGiocatori = this.props.giocatori;
            nuoviGiocatori[this.props.turnoGiocatore].capitale =  nuoviGiocatori[this.props.turnoGiocatore].capitale - affitto;
            nuoviGiocatori[società.proprietario].capitale = nuoviGiocatori[società.proprietario].capitale + affitto;
            this.props.setGiocatori(nuoviGiocatori);
            console.log(this.props.giocatori);
        }
        return;
    }

    //Questa funzione fa pagare le tasse al giocatore che finisce su una casella imposte
    pagaTasse =()=>{
        var attualeCasella = this.props.segnalini[this.props.turnoGiocatore].attualeCasella;
        var casella = this.props.caselle[attualeCasella];
        var tassa;

        if(casella.tipo === 'tasse'){
            if(casella.nome === 'luxury tax'){
                tassa = 100;
            }
            else{
                tassa = 200;
            }

            var nuoviGiocatori = this.props.giocatori;
            nuoviGiocatori[this.props.turnoGiocatore].capitale =  nuoviGiocatori[this.props.turnoGiocatore].capitale - tassa;
            this.props.setGiocatori(nuoviGiocatori);

        }
        else{
            return;
        }

    }

    render () {
        
        return (
            <div>
                <table className="tableController">
                    
                    <tr>
                        <td className="tdController" >
                        
                        </td>
                        <td className="tdController" colspan="2" >
                            <VendiEdificio 
                                terreni={this.props.terreni}
                                giocatori={this.props.giocatori}
                                setTerreni={this.props.setTerreni}
                                setGiocatori={this.props.setGiocatori} 
                                turnoGiocatore={this.props.turnoGiocatore}
                            />
                        </td>
                        <td className="tdController">
                            <Ipoteca
                                terreni={this.props.terreni}
                                setTerreni={this.props.setTerreni}
                                giocatori={this.props.giocatori}
                                setGiocatori={this.props.setGiocatori} 
                                turnoGiocatore={this.props.turnoGiocatore}
                                societàStazioni={this.props.societàStazioni}
                                setSocietàStazioni={this.props.setSocietàStazioni}
                            />
                        </td>   
                        <td className="tdController">
                            <Abbandona 
                                turnoGiocatore={this.props.turnoGiocatore}
                                giocatori={this.props.giocatori}
                                setGiocatori={this.props.setGiocatori}
                                terreni={this.props.terreni}
                                setTerreni={this.props.setTerreni}
                                societàStazioni={this.props.societàStazioni}
                                setSocietàStazioni={this.props.setSocietàStazioni}
                            />
                        </td>
                    </tr>
                    
                    <tr className="trController">
                        <td className="tdController">
                            <Button type="button" size="small" onClick={() => this.tiraDadi()}>
                                Tira dadi
                            </Button>
                        </td>
                        <td className="tdController">
                            <Costruisci 
                                terreni={this.props.terreni}
                                giocatori={this.props.giocatori}
                                setTerreni={this.props.setTerreni}
                                setGiocatori={this.props.setGiocatori} 
                                turnoGiocatore={this.props.turnoGiocatore}
                            />
                        </td>
                        <td className="tdController">
                            <Vendi 
                                terreni={this.props.terreni}
                                setTerreni={this.props.setTerreni}
                                giocatori={this.props.giocatori}
                                setGiocatori={this.props.setGiocatori} 
                                turnoGiocatore={this.props.turnoGiocatore}
                                societàStazioni={this.props.societàStazioni}
                                setSocietàStazioni={this.props.setSocietàStazioni}
                            />
                        </td>    
                        <td className="tdController">
                            <Button variant="outlined" size="small" onClick={() => this.finisciTurno()}>
                                finisci turno
                            </Button>
                        </td>   
                        <td className="tdController">
                            <Acquista 
                              attualeCasella={this.props.segnalini[this.props.turnoGiocatore].attualeCasella}
                              caselle={this.props.caselle} 
                              setCaselle={this.props.setCaselle}
                              turnoGiocatore={this.props.turnoGiocatore}
                              terreni={this.props.terreni}
                              setTerreni={this.props.setTerreni}
                              giocatori={this.props.giocatori}
                              setGiocatori={this.props.setGiocatori}
                              societàStazioni={this.props.societàStazioni}
                              setSocietàStazioni={this.props.setSocietàStazioni}
                            />
                        </td>   
                    </tr>
                    <tr className="trControllerTA">
                        <td className="tdController" colspan="5">
                            <AreaTesto
                                messaggioUno={this.state.primoMsgTA}
                                messaggioDue={this.state.secondoMsgTA}
                                messaggioTre={this.state.terzoMsgTA}
                                messaggioQuattro={this.state.quartoMsgTA}
                                messaggioCinque={this.state.quintoMsgTA}
                                messaggioSei={this.state.sestoMsgTA}
                                messaggioSette={this.state.settimoMsgTA}
                            />  
                        </td>  
                    </tr>
                </table> 
            </div>         
        )
    }
}


class AreaTesto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // messaggioUno: primoMsgTA,
        // messaggioDue: secondoMsgTA,
        // messaggioTre: terzoMsgTA
      };
    }
  
    render() {
      return (
        <div className="ControllerTA" id="w3review" name="w3review" >
                <div>{this.props.messaggioUno}</div>
                <div>{this.props.messaggioDue}</div>
                <div>{this.props.messaggioTre}</div>
                <div>{this.props.messaggioQuattro}</div>
                <div>{this.props.messaggioCinque}</div>
                <div>{this.props.messaggioSei}</div>
                <div>{this.props.messaggioSette}</div>
            {/* {this.props.primoMsgTA+"\n"+this.props.secondoMsgTA+"\n"+this.props.terzoMsgTA}  */}
        </div>
      );
    }

}


export default ComponentController;

