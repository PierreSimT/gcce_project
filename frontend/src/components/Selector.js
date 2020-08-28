import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { applyColumns, applyFilename, getColumns, getFilename } from '../features/data/dataSlice';
import { FormControl, Grid, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    select: {
        minWidth: 120
    }

}));

const Selector = () => {

    const classes = useStyles();

    const columns = useSelector(getColumns);
    const dispatch = useDispatch();

    const [valueX, setValueX] = useState('');
    const [valueY, setValueY] = useState('');

    return (
        <div>
            <Typography variant="body1" gutterBottom>
                A continuaci&oacute;n se seleccionar&aacute; la columna que representa el valor X e Y del conjunto de datos.
            </Typography>
            <Grid container>
                <Grid item xs={6}>
                    <div style={{ textAlign: 'center' }}>
                        <FormControl variant="filled" className={classes.select}>
                            <InputLabel id="x-column-label">X Column</InputLabel>
                            <Select
                                labelId="x-column-label"
                                id="demo-simple-select"
                                value={valueX}
                                onChange={ event => setValueX(event.target.value)}
                            >
                                {
                                    columns.map((val, idx) => {
                                        return <MenuItem key={idx} value={val}>{val}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{ textAlign: 'center' }}>
                        <FormControl variant="filled" className={classes.select}>
                            <InputLabel id="x-column-label">Y Column</InputLabel>
                            <Select
                                labelId="x-column-label"
                                id="demo-simple-select"
                                value={valueY}
                                onChange={ event => setValueY(event.target.value)}
                            >
                                {
                                    columns.map((val, idx) => {
                                        return <MenuItem key={idx} value={val}>{val}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Selector
