import ExpenseItem from './ExpenseItem';

 
const ExpensesList = (props) => {
	let DisExpensesContent = <p>No expense found</p>;

	if (props.items.length > 0) {
		DisExpensesContent = props.items.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return <div>{DisExpensesContent}</div>;
};

export default ExpensesList;
