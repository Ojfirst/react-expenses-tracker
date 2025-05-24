const ExpenseDate = ({ date }) => {
	// Helper
	const month = date.toLocaleString('en-GB', { month: 'long' });
	const day = date.toLocaleString('en-GB', { day: '2-digit' });
	const year = date.getFullYear();

	return (
		<div>
			<div>{month}</div>
			<div>{year}</div>
			<div>{day}</div>
		</div>
	);
};

export default ExpenseDate;
