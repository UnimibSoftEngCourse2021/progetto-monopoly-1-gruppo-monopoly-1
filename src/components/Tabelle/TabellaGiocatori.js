import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Typography} from '@material-ui/core';


function TabellaGiocatori (props) {

   
    

    function StampaNumero(numero){
        var t = props.turnoGiocatore +1;
        
        if(numero === t){
            return(<Typography align='center' style={{background:'#cddc39'}}>{numero}</Typography>);
        }
        var i;
        for(i=0; i<props.giocatori.length; i++){
            if(props.giocatori[i].numero===numero && props.giocatori[i].inGioco===true){
                return (<Typography align='center'>{numero}</Typography>);
            }
        }
        return (<Typography align='center' style={{background:'#d50000'}}>{numero}</Typography>);
    }
    
    function createData(numero, pedina, capitale) {
        return { numero, pedina, capitale };
    }
      
      const rows = [props.giocatori.length];

      var i;
      for(i=0; i < props.giocatori.length; i++){
        rows[i] = createData(props.giocatori[i].numero, props.giocatori[i].pedina, props.giocatori[i].capitale)
      }
     
      
      
        return (
            <div>
                <h3 align='center'>
                    Tabella dei giocatori
                </h3>
                <Box width={'300px'}>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Giocatore</TableCell>
                                <TableCell align="right">Pedina</TableCell>
                                <TableCell align="right">Capitale</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.numero}>
                                    <TableCell component="th" scope="row">
                                    { StampaNumero(row.numero) }
                                            
                                        
                                    </TableCell>
                                    <TableCell align="right"><img alt="" src={row.pedina} style={{width:'35px'}}/></TableCell>
                                    <TableCell align="right">{row.capitale}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Box>
            </div>
        )
    
}

export default TabellaGiocatori;


