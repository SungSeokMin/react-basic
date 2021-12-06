import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const dataPoinValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximun = Math.max(...dataPoinValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximun}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
