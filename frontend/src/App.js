import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import Nav from './components/Nav';
import { makeStyles } from '@material-ui/core/styles';

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
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
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
          layout={{ width: 500, height: 500, title: 'Testing Plot' }}
        />
    </div>
  );
}

export default App;
