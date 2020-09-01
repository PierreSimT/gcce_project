import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataX, getDataY } from '../../features/data/dataSlice';
import Plot from 'react-plotly.js'

const Lines = () => {

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
                        mode: 'lines',
                        transforms: [
                            {
                                type: 'aggregate',
                                groups: dataX,
                                aggregations: [
                                    { target: 'y', func: 'sum', enabled: true }, // ENABLED BY A CHECKBOX TODO: AÑADIR AL RESTO DE PLOTS
                                ]
                            }]
                    }
                ]}
                layout={{ title: 'Lines Plot' }}
            />
        </div>
    )
}

export default Lines
