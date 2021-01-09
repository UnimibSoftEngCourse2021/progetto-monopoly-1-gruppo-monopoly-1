import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead} from '@material-ui/core';




function TabellaGiocatori (props) {

    
    
    function createData(nome, capitale) {
        return { nome, capitale };
      }
      
      const rows = [
        createData('nome', 'capitale'),
        
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
                                <TableCell align="right">Capitale</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.nome}</TableCell>
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


