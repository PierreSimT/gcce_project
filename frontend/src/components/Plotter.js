import React from 'react'
import Plot from 'react-plotly.js'

const Plotter = (props) => {

  var component = <React.Fragment></React.Fragment>;

  if (props.plotType === 'scatter') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          x: props.valuesX,
          y: props.valuesY,
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
          x: props.valuesX,
          y: props.valuesY,
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
          x: props.valuesX,
          y: props.valuesY,
          type: 'bar',
          transforms: [ 
          {
            type: 'aggregate',
            groups: props.valuesX,
            aggregations: [
              { target: 'y', func: 'sum', enabled: true }, // ENABLED BY A CHECKBOX TODO: AÑADIR AL RESTO DE PLOTS
            ]
          }]
        }
      ]}
      layout={{ title: 'Bar Chart' }}
    />

  } else if (props.plotType === 'pie') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          values: props.valuesX,
          labels: props.valuesY, //['Test1', 'Test2', 'Test3'],
          type: 'pie',
          transforms: [ 
            {
              type: 'aggregate',
              groups: props.valuesX,
              aggregations: [
                { target: 'y', func: 'sum', enabled: true }, // BUSCAR LA MEJOR TRANSFORMACION PARA ESTE PLOT
              ]
            }]
        }
      ]}
      layout={{ title: 'Pie Chart' }}
    />

  } else if (props.plotType === 'bubble') {

    component = <Plot
      //config={{ responsive: true }}
      data={[
        {
          x: props.valuesX,
          y: props.valuesY,
          mode: 'markers',
          marker: {
            size: [20, 30, 40] // BUSCAR COMO OBTENER UN TAMAÑO PARA LOS MARCADOS
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