import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { applyColumns, applyFilename, getColumns, getFilename } from '../features/data/dataSlice';
import { FormControl, Grid, InputLabel, Select, MenuItem, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    select: {
        minWidth: 120,
        width: '100%',
    },
    grid: {
        padding: theme.spacing(1)
    }
}));

const Selector = (props) => {

    const classes = useStyles();

    const columns = useSelector(getColumns);
    const dispatch = useDispatch();

    const [valueX, setValueX] = useState('');
    const [valueY, setValueY] = useState('');
    const [plotType, setTyoe] = useState('');

    const onChangeValueX = (event) => {
        setValueX(event.target.value)
        props.changeX(event.target.value)
    }

    const onChangeValueY = (event) => {
        setValueY(event.target.value)
        props.changeY(event.target.value)
    }

    const onChangeTyoe = (event) => {
        setTyoe(event.target.value)
        props.changeType(event.target.value)
    }

    return (
        <div>
            <Typography variant="body1" gutterBottom>
                A continuaci&oacute;n se seleccionar&aacute; la columna que representa el valor X e Y del conjunto de datos.
            </Typography>
            <Grid container >
                <Grid item xs={4} className={classes.grid}>
                <div style={{ textAlign: 'center' }}>
                        <FormControl variant="filled" className={classes.select}>
                            <InputLabel id="x-column-label">Type</InputLabel>
                            <Select
                                labelId="x-column-label"
                                id="demo-simple-select"
                                value={plotType}
                                onChange={onChangeTyoe}
                            >
                                <MenuItem value="scatter">Scatter</MenuItem>
                                <MenuItem value="lines">Lines</MenuItem>
                                <MenuItem value="bar">Bar</MenuItem>
                                <MenuItem value="pie">Pie</MenuItem>
                                <MenuItem value="bubble">Bubble</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.grid}>
                    <div style={{ textAlign: 'center' }}>
                        <FormControl variant="filled" className={classes.select}>
                            <InputLabel id="x-column-label">X Column</InputLabel>
                            <Select
                                labelId="x-column-label"
                                id="demo-simple-select"
                                value={valueX}
                                onChange={onChangeValueX}
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
                <Grid item xs={4} className={classes.grid}>
                    <div style={{ textAlign: 'center' }}>
                        <FormControl variant="filled" className={classes.select}>
                            <InputLabel id="x-column-label">Y Column</InputLabel>
                            <Select
                                labelId="x-column-label"
                                id="demo-simple-select"
                                value={valueY}
                                onChange={onChangeValueY}
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
