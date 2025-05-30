import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = (props) => {
	// If no expenses are found for the selected year, display a message

	if (props.items.length === 0) {
		return (
			<h5 className="expenses-list__fallback">
				No expenses found for the selected year.
			</h5>
		);
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
