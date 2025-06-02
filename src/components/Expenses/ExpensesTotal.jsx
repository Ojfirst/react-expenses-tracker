import React from 'react';
import './ExpensesTotal.css';

const ExpensesTotal = (props) => {
	const total = props.data.toLocaleString();

	return (
		<div>
			<p className="total">
				Total: <span className="amount">N{total}</span>
			</p>
		</div>
	);
};

export default ExpensesTotal;
