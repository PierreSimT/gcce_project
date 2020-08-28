import React from 'react'
import Plot from 'react-plotly.js'

const Plotter = (props) => {

  var component = <React.Fragment></React.Fragment>;

  if (props.plotType === 'scatter') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'markers',
        }
      ]}
      layout={{ title: 'Scatter Plot' }}
    />

  } else if (props.plotType === 'lines') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          mode: 'lines',
          marker: { color: 'red' },
        }
      ]}
      layout={{ title: 'Lines Plot' }}
    />

  } else if (props.plotType === 'bar') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'bar',
          marker: { color: 'red' }
        }
      ]}
      layout={{ title: 'Bar Chart' }}
    />

  } else if (props.plotType === 'pie') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          values: [1, 2, 3],
          labels: ['Test1', 'Test2', 'Test3'],
          type: 'pie',
        }
      ]}
      layout={{ title: 'Pie Chart' }}
    />

  } else if (props.plotType === 'bubble') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          mode: 'markers',
          marker: { 
            size: [20, 30, 40]
          },
        }
      ]}
      layout={{ title: 'Testing Plot' }}
    />

  }

  return (
    <div>
      {component}
    </div>
  )
}

export default Plotter;