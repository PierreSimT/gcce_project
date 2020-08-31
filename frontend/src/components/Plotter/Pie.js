import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataX, getDataY } from '../../features/data/dataSlice';
import Plot from 'react-plotly.js'

const Pie = () => {

    const dataX = useSelector(getDataX);
    const dataY = useSelector(getDataY);

    return (
        <div>
            <Plot
                //config={{ responsive: true }}
                data={[
                    {
                        values: dataY,
                        labels: dataX, //['Test1', 'Test2', 'Test3'],
                        type: 'pie',
                        transforms: [
                            {
                                type: 'aggregate',
                                groups: dataX,
                                aggregations: [
                                    { target: 'y', func: 'sum', enabled: true }, // BUSCAR LA MEJOR TRANSFORMACION PARA ESTE PLOT
                                ]
                            }]
                    }
                ]}
                layout={{ title: 'Pie Chart' }}
            />
        </div>
    )
}

export default Pie
