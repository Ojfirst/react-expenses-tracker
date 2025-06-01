import React from 'react';
import ExpensesTotal from './ExpensesTotal';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const dropDownChangeHandler = (e) => {
		// Passing data to Expenses.js(parent)
		props.onChangeFilter(e.target.value);
	};

  	const total = props.data.reduce(
		(accumulator, initialExpenseAmount) => { return accumulator + initialExpenseAmount;
		
}, 0);
	console.log('ExpensesTotal', total);

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				{/* Recieves value data from parent (Expense.js) */}
				{/* onChange is eventlistening is handled in parent (Expense.js) */}
        <ExpensesTotal data={total} />
				<select value={props.selected} onChange={dropDownChangeHandler}>
					<option value="2025">2025</option>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
