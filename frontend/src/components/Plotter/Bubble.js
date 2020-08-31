import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataX, getDataY } from '../../features/data/dataSlice';
import Plot from 'react-plotly.js'

const Bubble = () => {

    const dataX = useSelector(getDataX);
    const dataY = useSelector(getDataY);
    
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
                            size: [20, 30, 40] // BUSCAR COMO OBTENER UN TAMAÑO PARA LOS MARCADOS
                        },
                    }
                ]}
                layout={{ title: 'Testing Plot' }}
            />
        </div>
    )
}

export default Bubble
