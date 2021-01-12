import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead} from '@material-ui/core';




function TabellaGiocatori (props) {

    
    
    function createData(nome, pedina, capitale) {
        return { nome, pedina, capitale };
      }
      
      const rows = [
        createData(props.giocatori[0].nome, props.giocatori[0].pedina, props.giocatori[0].capitale),
        createData(props.giocatori[1].nome, props.giocatori[1].pedina, props.giocatori[1].capitale),
        createData(props.giocatori[2].nome, props.giocatori[2].pedina, props.giocatori[2].capitale),
        createData(props.giocatori[3].nome, props.giocatori[3].pedina, props.giocatori[3].capitale),
        createData(props.giocatori[4].nome, props.giocatori[4].pedina, props.giocatori[4].capitale),
        createData(props.giocatori[5].nome, props.giocatori[5].pedina, props.giocatori[5].capitale),
      ];
    
    
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
                                    <TableCell component="th" scope="row">{row.nome}</TableCell>
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


