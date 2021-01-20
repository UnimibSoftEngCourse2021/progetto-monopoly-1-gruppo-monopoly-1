import React from 'react'
import { Box, TableCell, TableRow, TableBody, TableContainer, Table, TableHead, Typography} from '@material-ui/core';
import hat from '../../img/hat.png';
import iron from '../../img/iron.png';
import car from '../../img/car.png';
import boat from '../../img/boat.png';
import doggo from '../../img/doggo.png';
import shoe from '../../img/shoe.png';
import thimble from '../../img/thimble.png';
import wheelbarrow from '../../img/wheelbarrow.png';

function TabellaGiocatori (props) {

    function createData(numero, pedina, capitale) {
        return { numero, pedina, capitale };
    }
      
      const rows = [props.giocatori.length];

      var i;
      for(i=0; i < props.giocatori.length; i++){
        rows[i] = createData(props.giocatori[i].numero, props.giocatori[i].pedina, props.giocatori[i].capitale)
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
                                <TableRow key={row.numero}>
                                    <TableCell component="th" scope="row">
                                        {row.numero===turno?
                                        <Typography align='center' style={{background:'#cddc39'}}>{row.numero}</Typography>
                                        :
                                        <Typography >{row.numero}</Typography>
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


