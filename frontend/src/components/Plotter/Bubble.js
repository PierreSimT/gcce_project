import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataX, getDataY, getDataSize } from '../../features/data/dataSlice';
import Plot from 'react-plotly.js'

const Bubble = () => {

    const dataX = useSelector(getDataX);
    const dataY = useSelector(getDataY);
    const dataSize = useSelector(getDataSize);

    return (
        <div>
            <Plot
                //config={{ responsive: true }}
                data={[
                    {
                        x: dataX,
                        y: dataY,
                        mode: 'markers',
                        marker: {
                            size: dataSize, // BUSCAR COMO OBTENER UN TAMAÑO PARA LOS MARCADOS
                            sizeref: 2.0 * Math.max(...dataSize) / (40 ** 2),
                            sizemode: 'area'
                        },
                        transforms: [
                            {
                                type: 'aggregate',
                                groups: dataX,
                                aggregations: [
                                    { target: 'y', func: 'sum', enabled: true }, // ENABLED BY A CHECKBOX TODO: AÑADIR AL RESTO DE PLOTS
                                    { target: 'marker.size', func: 'sum', enabled: true } 
                                ]
                            }]
                    }
                ]}
                layout={{ title: 'Bubble Plot' }}
            />
        </div>
    )
}

export default Bubble
