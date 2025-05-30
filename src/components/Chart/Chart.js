import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	return (
		<div className="chart">
      {/* Maping every datapoint to a chartbar componenet */}
			{props.dataCharts.map((dataChart) => (
				<ChartBar
          key={dataChart.label} // Key props for rendering efficiently
					value={dataChart.value} // User Stored Value
					maxValue={null} // ChartBar Plot value in relation to maxx value in the entire chart
					label={dataChart.labell} //
				/>
			))}
		</div>
	);
};

export default Chart;
