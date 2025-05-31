import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false); // Manages Edit functionality

	const onSaveExpenseHandler = (recievedExpenseData) => {
		const expenseData = {
			...recievedExpenseData, // Data racieved from child (ExpensForm)
			id: Math.random().toString(), // Add id for key identification
		};
		props.onAddExpenseData(expenseData); // Further send input data to (App.js)
		setIsEditing(false);
	};
	// Start Form Edit mode
	const startEditingHandler = () => {
		setIsEditing(true);
	};
	// Close Form Edit mode
	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{/* Deactives Editform  */}
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{/* Recieves expenseData as props form Child (ExpenseForm) */}
			{/* Active editform */}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={onSaveExpenseHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
