import React from 'react'
import Plot from 'react-plotly.js'
import Scatter from './Scatter';
import Lines from './Lines';
import Bar from './Bar';
import Pie from './Pie';
import Bubble from './Bubble';


const Plotter = (props) => {

  var component = <React.Fragment></React.Fragment>;

  if (props.plotType === 'scatter') {

    component = <Scatter></Scatter>

  } else if (props.plotType === 'lines') {

    component = <Lines></Lines>

  } else if (props.plotType === 'bar') {

    component = <Bar></Bar>

  } else if (props.plotType === 'pie') {

    component = <Pie></Pie>

  } else if (props.plotType === 'bubble') {

    component = <Bubble></Bubble>

  }

  return (
    <div>
      {component}
    </div>
  )
}

export default Plotter;