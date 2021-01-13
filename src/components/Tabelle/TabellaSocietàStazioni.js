import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead} from '@material-ui/core';




function TabellaSocietàStazioni(props) {


    
    function createData(nome, proprietario, valore ) {
        return { nome, proprietario, valore  };
      }
      
      const rows = [
        createData(props.societàStazioni[0].nome, props.societàStazioni[0].proprietario, props.societàStazioni[0].valore),
        createData(props.societàStazioni[1].nome, props.societàStazioni[1].proprietario, props.societàStazioni[1].valore),
        createData(props.societàStazioni[2].nome, props.societàStazioni[2].proprietario, props.societàStazioni[2].valore),
        createData(props.societàStazioni[3].nome, props.societàStazioni[3].proprietario, props.societàStazioni[3].valore),
        createData(props.societàStazioni[4].nome, props.societàStazioni[4].proprietario, props.societàStazioni[4].valore),
        createData(props.societàStazioni[5].nome, props.societàStazioni[5].proprietario, props.societàStazioni[5].valore),
        
       ];
    
       
        return (
            <div>
               
                <h3 align='center'>
                    Tabella delle società e delle stazioni
                </h3>
                <Box style={{margin:'20px'}}>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="right">Proprietario</TableCell>
                                <TableCell align="right">Valore</TableCell>
                                
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.nome}</TableCell>
                                    <TableCell align="right">{row.proprietario}</TableCell>
                                    <TableCell align="right">{row.valore}</TableCell>
                                    
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

