import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const onSaveExpenseHandler = (recievedExpenseData) => {
		const expenseData = {
			...recievedExpenseData, // Data racieved from child (ExpensForm)
			id: Math.random().toString(), // Add id for key identification
		};
		props.onAddExpenseData(expenseData); // Further send input data to (App.js)
	};

	return (
		<div className="new-expense">
			{/* Recieves expenseData as props form Child (Expenseorm) */}
			<ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
		</div>
	);
};

export default NewExpense;
