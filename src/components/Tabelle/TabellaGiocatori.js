import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Typography} from '@material-ui/core';




function TabellaGiocatori (props) {

    
    
    function createData(nome, pedina, capitale) {
        return { nome, pedina, capitale };
    }
      
      const rows = [props.giocatori.length];

      var i;
      for(i=0; i < props.giocatori.length; i++){
        rows[i] = createData(props.giocatori[i].nome, props.giocatori[i].pedina, props.giocatori[i].capitale)
      }
     /* createData(props.giocatori[0].nome, props.giocatori[0].pedina, props.giocatori[0].capitale),
        createData(props.giocatori[1].nome, props.giocatori[1].pedina, props.giocatori[1].capitale),
        createData(props.giocatori[2].nome, props.giocatori[2].pedina, props.giocatori[2].capitale),
        createData(props.giocatori[3].nome, props.giocatori[3].pedina, props.giocatori[3].capitale),
        createData(props.giocatori[4].nome, props.giocatori[4].pedina, props.giocatori[4].capitale),
        createData(props.giocatori[5].nome, props.giocatori[5].pedina, props.giocatori[5].capitale),
    */
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
                                        <Typography >{row.nome}</Typography>
                                        }
                                    </TableCell>
                                    <TableCell align="right">{row.pedina}</TableCell>
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


