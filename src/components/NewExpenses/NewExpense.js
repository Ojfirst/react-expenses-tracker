import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
	const onSaveExpenseHandler = (recievedExpenseData) => {
		const expenseData = {
			...recievedExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseData);
	};

	return (
		<div className="new-expense">
			{/* Recieves expenseData as props form Child (Expenseorm) */}
			<ExpenseForm onSaveExpenseData={onSaveExpenseHandler} />
		</div>
	);
};

export default NewExpense;
