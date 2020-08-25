import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import Nav from './components/Nav';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          < Paper className={classes.paper}>xs=4</Paper>
        </Grid>
        <Grid container item xs={8} direction="column" alignItems="center">
          <Paper className={classes.paper}>xs=8</Paper>
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
              { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 800, height: 650, title: 'Testing Plot' }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
