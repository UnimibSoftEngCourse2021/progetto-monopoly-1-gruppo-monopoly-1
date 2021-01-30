import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Typography} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

function TabellaTerreni (props) {

    function createData(nome, coloreSfondo, proprietario, casa, alberghi, valore, ipotecato) {
        return { nome, coloreSfondo, proprietario, casa, alberghi, valore, ipotecato };
      }
      
      const rows = [
        createData(props.terreni[0].nome, props.terreni[0].coloreSfondo, props.terreni[0].proprietario, props.terreni[0].case, props.terreni[0].alberghi, props.terreni[0].valore, props.terreni[0].ipotecato),
        createData(props.terreni[1].nome, props.terreni[1].coloreSfondo, props.terreni[1].proprietario, props.terreni[1].case, props.terreni[1].alberghi, props.terreni[1].valore, props.terreni[1].ipotecato),
        createData(props.terreni[2].nome, props.terreni[2].coloreSfondo, props.terreni[2].proprietario, props.terreni[2].case, props.terreni[2].alberghi, props.terreni[2].valore, props.terreni[2].ipotecato),
        createData(props.terreni[3].nome, props.terreni[3].coloreSfondo, props.terreni[3].proprietario, props.terreni[3].case, props.terreni[3].alberghi, props.terreni[3].valore, props.terreni[3].ipotecato),
        createData(props.terreni[4].nome, props.terreni[4].coloreSfondo, props.terreni[4].proprietario, props.terreni[4].case, props.terreni[4].alberghi, props.terreni[4].valore, props.terreni[4].ipotecato),
        createData(props.terreni[5].nome, props.terreni[5].coloreSfondo, props.terreni[5].proprietario, props.terreni[5].case, props.terreni[5].alberghi, props.terreni[5].valore, props.terreni[5].ipotecato),
        createData(props.terreni[6].nome, props.terreni[6].coloreSfondo, props.terreni[6].proprietario, props.terreni[6].case, props.terreni[6].alberghi, props.terreni[6].valore, props.terreni[6].ipotecato),
        createData(props.terreni[7].nome, props.terreni[7].coloreSfondo, props.terreni[7].proprietario, props.terreni[7].case, props.terreni[7].alberghi, props.terreni[7].valore, props.terreni[7].ipotecato),
        createData(props.terreni[8].nome, props.terreni[8].coloreSfondo, props.terreni[8].proprietario, props.terreni[8].case, props.terreni[8].alberghi, props.terreni[8].valore, props.terreni[8].ipotecato),
        createData(props.terreni[9].nome, props.terreni[9].coloreSfondo, props.terreni[9].proprietario, props.terreni[9].case, props.terreni[9].alberghi, props.terreni[9].valore, props.terreni[9].ipotecato),
        createData(props.terreni[10].nome, props.terreni[10].coloreSfondo, props.terreni[10].proprietario, props.terreni[10].case, props.terreni[10].alberghi, props.terreni[10].valore, props.terreni[10].ipotecato),
        createData(props.terreni[11].nome, props.terreni[11].coloreSfondo, props.terreni[11].proprietario, props.terreni[11].case, props.terreni[11].alberghi, props.terreni[11].valore, props.terreni[11].ipotecato),
        createData(props.terreni[12].nome, props.terreni[12].coloreSfondo, props.terreni[12].proprietario, props.terreni[12].case, props.terreni[12].alberghi, props.terreni[12].valore, props.terreni[12].ipotecato),
        createData(props.terreni[13].nome, props.terreni[13].coloreSfondo, props.terreni[13].proprietario, props.terreni[13].case, props.terreni[13].alberghi, props.terreni[13].valore, props.terreni[13].ipotecato),
        createData(props.terreni[14].nome, props.terreni[14].coloreSfondo, props.terreni[14].proprietario, props.terreni[14].case, props.terreni[14].alberghi, props.terreni[14].valore, props.terreni[14].ipotecato),
        createData(props.terreni[15].nome, props.terreni[15].coloreSfondo, props.terreni[15].proprietario, props.terreni[15].case, props.terreni[15].alberghi, props.terreni[15].valore, props.terreni[15].ipotecato),
        createData(props.terreni[16].nome, props.terreni[16].coloreSfondo, props.terreni[16].proprietario, props.terreni[16].case, props.terreni[16].alberghi, props.terreni[16].valore, props.terreni[16].ipotecato),
        createData(props.terreni[17].nome, props.terreni[17].coloreSfondo, props.terreni[17].proprietario, props.terreni[17].case, props.terreni[17].alberghi, props.terreni[17].valore, props.terreni[17].ipotecato),
        createData(props.terreni[18].nome, props.terreni[18].coloreSfondo, props.terreni[18].proprietario, props.terreni[18].case, props.terreni[18].alberghi, props.terreni[18].valore, props.terreni[18].ipotecato),
        createData(props.terreni[19].nome, props.terreni[19].coloreSfondo, props.terreni[19].proprietario, props.terreni[19].case, props.terreni[19].alberghi, props.terreni[19].valore, props.terreni[19].ipotecato),
        createData(props.terreni[20].nome, props.terreni[20].coloreSfondo, props.terreni[20].proprietario, props.terreni[20].case, props.terreni[20].alberghi, props.terreni[20].valore, props.terreni[20].ipotecato),
        createData(props.terreni[21].nome, props.terreni[21].coloreSfondo, props.terreni[21].proprietario, props.terreni[21].case, props.terreni[21].alberghi, props.terreni[21].valore, props.terreni[21].ipotecato),
       ];
    
        return (
            <div>
                <h3 align='center'>
                    Tabella dei terreni
                </h3>
                <Box style={{margin:'20px'}}>
                <TableContainer >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Terreno</TableCell>
                                <TableCell align="center">Colore</TableCell>
                                <TableCell align="right">Proprietario</TableCell>
                                <TableCell align="right">Case</TableCell>
                                <TableCell align="right">Alberghi</TableCell>
                                <TableCell align="right">Valore</TableCell>
                                <TableCell align="right">Ipotecato</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">{row.nome}</TableCell>
                                    <TableCell align="right">
                                        <Typography align='center' style={{background:row.coloreSfondo}}>Gruppo</Typography>
                                    </TableCell>
                                    <TableCell align="right">{row.proprietario===-1? null : row.proprietario+1}</TableCell>
                                    <TableCell align="right">{row.casa}</TableCell>
                                    <TableCell align="right">{row.alberghi}</TableCell>
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

export default TabellaTerreni;

