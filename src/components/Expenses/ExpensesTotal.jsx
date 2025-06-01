import React from 'react';

const ExpensesTotal = (props) => {
  const total = props.data.toLocaleString();

	return (
		<div>
			<p>Total: N{total}</p>
		</div>
	);
};

export default ExpensesTotal;
