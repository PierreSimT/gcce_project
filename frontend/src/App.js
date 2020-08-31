import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyColumns, applyFilename, applyDataX, applyDataY, applyDataSize, getFile, getDataX, getDataY } from './features/data/dataSlice';
import Nav from './components/Nav';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Selector from './components/Selector';
import Plotter from './components/Plotter/Plotter';
import Footer from './components/Footer';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#212121'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paper2: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  const dispatch = useDispatch();
  const file = useSelector(getFile);
  const [dataType, setDataType] = useState()

  const onChangeX = (column) => {
    console.log(column)

    var formData = new FormData();
    formData.append("file", file);
    axios.post(`http://localhost:8000/api/post/column/${column}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
      dispatch(applyDataX(res.data.values))
    })
  }

  const onChangeY = (column) => {
    console.log(column)

    var formData = new FormData();
    formData.append("file", file);
    axios.post(`http://localhost:8000/api/post/column/${column}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
      dispatch(applyDataY(res.data.values))
    })
  }

  const onChangeSize = (column) => {
    console.log(column)

    var formData = new FormData();
    formData.append("file", file);
    axios.post(`http://localhost:8000/api/post/column/${column}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res)
      dispatch(applyDataSize(res.data.values))
    })
  }

  const onChangeType = (type) => {
    console.log(type)
    setDataType(type)
  }

  return (
    <div className={classes.root}>
      <Nav />
      <br />
      <Grid container>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
            <Selector changeX={onChangeX} changeY={onChangeY} changeType={onChangeType} changeSize={onChangeSize}></Selector>
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper className={classes.paper2}>
            <Plotter plotType={dataType}></Plotter>
          </Paper>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
