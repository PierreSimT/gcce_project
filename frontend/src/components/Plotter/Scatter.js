import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getDataX, getDataY } from '../../features/data/dataSlice';
import Plot from 'react-plotly.js'

const Scatter = () => {

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
                        type: 'scatter',
                        mode: 'markers',
                    }
                ]}
                layout={{ title: 'Scatter Plot' }}
            />
        </div>
    )
}

export default Scatter
