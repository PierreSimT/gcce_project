import React from 'react';
import Nav from './components/Nav';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Selector from './components/Selector';
import Plotter from './components/Plotter';
import Footer from './components/Footer';

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

  return (
    <div className={classes.root}>
      <Nav />
      <br />
      <Grid container>
        <Grid item md={4} xs={12}>
          <Paper className={classes.paper}>
            <Selector></Selector>
          </Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper className={classes.paper2}>
            <Plotter></Plotter>
          </Paper>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
