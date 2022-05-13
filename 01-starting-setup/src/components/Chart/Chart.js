import React from 'react';
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((v) => v.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <>
      <div className='chart'>
        {props.dataPoints.map((dataPoint, i) => (
          <ChartBar key={i}
                    value={dataPoint.value}
                    label={dataPoint.label}
                    maxValue={totalMax}/>
        ))}
      </div>
    </>
  );
};

export default Chart;