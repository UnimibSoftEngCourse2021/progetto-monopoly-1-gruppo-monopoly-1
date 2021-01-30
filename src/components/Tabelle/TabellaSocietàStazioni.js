import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

//Funzione che crea la tabella stazioni
function TabellaSocietàStazioni(props) {

    function createData(nome, proprietario, valore, ipotecato ) {
        return { nome, proprietario, valore, ipotecato };
      }
      
      const rows = [
        createData(props.societàStazioni[0].nome, props.societàStazioni[0].proprietario, props.societàStazioni[0].valore, props.societàStazioni[0].ipotecato),
        createData(props.societàStazioni[1].nome, props.societàStazioni[1].proprietario, props.societàStazioni[1].valore, props.societàStazioni[1].ipotecato),
        createData(props.societàStazioni[2].nome, props.societàStazioni[2].proprietario, props.societàStazioni[2].valore, props.societàStazioni[2].ipotecato),
        createData(props.societàStazioni[3].nome, props.societàStazioni[3].proprietario, props.societàStazioni[3].valore, props.societàStazioni[3].ipotecato),
        createData(props.societàStazioni[4].nome, props.societàStazioni[4].proprietario, props.societàStazioni[4].valore, props.societàStazioni[4].ipotecato),
        createData(props.societàStazioni[5].nome, props.societàStazioni[5].proprietario, props.societàStazioni[5].valore, props.societàStazioni[5].ipotecato),
       ];
    
        return (
            <div>
                <h3 align='center'>
                    Tabella delle società e delle stazioni
                </h3>
                <Box style={{margin:'20px', width:'270px'}}>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="right">Proprietario</TableCell>
                                <TableCell align="right">Valore</TableCell>
                                <TableCell align="right">Ipotecato</TableCell> 
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.nome}</TableCell>
                                    <TableCell align="right">{row.proprietario===-1? null : row.proprietario+1}</TableCell>
                                    <TableCell align="right">{row.valore}</TableCell>
                                    <TableCell align="right">{ row.ipotecato? <CheckIcon style={{color:'#f44336'}}/> : <ClearIcon style={{color:'#4caf50'}}/>}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Box>
            </div>
        )
}

export default TabellaSocietàStazioni;

