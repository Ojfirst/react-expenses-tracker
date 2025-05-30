import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
	// Calculate how much a specific chart bar instance be filled
	let ChartBarFillHeight = '0%';

	// Check if max-value of given data is greaater than zero
	if (props.max > 0) {
		ChartBarFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
	}

	<div className="chart-bar">
		<div className="chart-bar__inner">
			<div
				className="chart-bar__fill"
				style={{ height: ChartBarFillHeight }}></div>
		</div>
		<div className="chart-bar__label">{props.label}</div>
	</div>;
};

export default ChartBar;
