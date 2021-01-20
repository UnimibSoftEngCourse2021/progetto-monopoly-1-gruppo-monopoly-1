import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Typography} from '@material-ui/core';




function TabellaGiocatori (props) {

    function InGioco(nome){
        var i;
        for(i=0; i<props.giocatori.length; i++){
            if(props.giocatori[i].nome===nome && props.giocatori[i].inGioco===true){
                return (<Typography align='center'>{nome}</Typography>);
            }
        }
        return (<Typography align='center' style={{background:'#d50000'}}>{nome}</Typography>);
    }
    
    function createData(nome, pedina, capitale, inGioco) {
        return { nome, pedina, capitale, inGioco };
    }
      
      const rows = [props.giocatori.length];

      var i;
      for(i=0; i < props.giocatori.length; i++){
        rows[i] = createData(props.giocatori[i].nome, props.giocatori[i].pedina, props.giocatori[i].capitale, props.giocatori[i].inGioco)
      }
     
      var turno = props.turnoGiocatore.toString();
      
    
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
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                    {row.nome===turno?
                                        <Typography align='center' style={{background:'#cddc39'}}>{row.nome}</Typography>
                                        :
                                        InGioco(row.nome)
                                            
                                    }
                                            
                                        
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


