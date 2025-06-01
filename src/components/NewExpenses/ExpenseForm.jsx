import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	// Manage/Store user input individually
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// Alternative to calling different eventHandler
  // Handles all form input eventlistening
	const inputChangeHandler = (identifier, value) => {
		if (identifier === 'title') {
			setEnteredTitle(value);
		} else if (identifier === 'amount') {
			setEnteredAmount(value);
		} else {
			setEnteredDate(value);
		}
	};

	const submiteHandler = (e) => {
		e.preventDefault();
    // Computed user inputs
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData); // Passes Data to Parent (NewExpense)
    //Clear userInput
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
	};

	return (
		<form onSubmit={submiteHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					{/* <input type="text" onChange={TitleChangeHandler} /> */}
					<input
						type="text"
            value={enteredTitle} // Two ways binding data passing
						onChange={(e) => inputChangeHandler('title', e.target.value)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
            value={enteredAmount}
						min={0.01}
						step={0.01}
						onChange={(e) => inputChangeHandler('amount', e.target.valueAsNumber)}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
            value={enteredDate}
						min="2025-01-01"
						max="2026-12-31"
						onChange={(e) => inputChangeHandler('date', e.target.value)}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;

// // Alternative Approach to settin useState
// const [userInput, setUserInput] = useState({
// 	enteredTitle: '',
// 	enterAmount: '',
// 	enterDate: '',
// });

// // Handler for change state
// const TitleChangeHandler = (e) => {
// 	setEnteredTitle(e.target.value);
// 	// setUserInput({ ...userInput, enteredTitle: e.target.value });
// 	// //Sets guarantee newState when depending on previous date
// setUserInput((prevState) => {
//   return{...prevState, enteredTitle: e.target.value}
// })
// 	// console.log(e.target.value);
// // };

// const AmountChangeHandler = (e) => {
// 	setEnteredAmount(e.target.value);
// 	// setUserInput({ ...userInput, enteredTitle: e.target.value });
// 	// console.log(e.target.value);
// };

// const DateChangeHandler = (e) => {
// 	setEnteredDate(e.target.value);
// 	// setUserInput({ ...userInput, enterDate: e.target.value });
// 	// console.log(e.target.value);
// };
