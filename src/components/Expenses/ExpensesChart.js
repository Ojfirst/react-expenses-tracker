import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
	// Store DataPoints
	const charDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	];

	// Sum all expenses for different months
	// using for of loop because expnses is an array and not an object
	for (const expense of props.expenses) {
    // Get month from expense date
		const expenseMonth = expense.date.getMonth(); // Start from 0 => Jan
		// Accurately selecte month for chartDatePoint which start from Zero
		charDataPoints[expenseMonth].value += expense.amount; // Increase value of month by expense amount
	}

	return (
		<div>
			{/* Pass dataCharts to Chart.js */}
			<Chart dataPoints={charDataPoints} />
		</div>
	);
};

export default ExpensesChart;
