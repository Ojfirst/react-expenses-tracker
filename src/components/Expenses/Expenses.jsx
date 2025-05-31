import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2025'); // Initial useState
	//FilterHandler
	const filterYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear); // New useState
	};

	// Filters expenses by year
	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});




	return (
		<div>
			<Card className="expenses">
				{/* Added props (onChangeFilter) to recieve data from ExpensesFilter.js */}
				<ExpensesFilter
					selected={filteredYear} // Initial useState
					onChangeFilter={filterYearHandler} // Set props recieve input value from child (ExpenseesFilter.js)
				/>
        {/* Pass filteredExpense to ExpensesChart Component */}
        <ExpensesChart expenses={filteredExpense} />
        {/* Conditional rendering to show message if no expenses found */}
        {/* Pass filteredExpenses as props to be used in Expenseslist Component */}
        <ExpensesList items={filteredExpense}/>
			</Card>
		</div>
	);
};

export default Expenses;

// let filterInfoText = '2022, 2023,2024';

// if (filteredYear === '2024') {
//   filterInfoText = '2022, 2023, 2025';
// } else if (filteredYear === '2023') {
//   filterInfoText ='2022, 2024, 2025';
// } else if (filteredYear === '2022') {
//   filterInfoText = '2023, 2024, 2025';
// }

// {/* <p>Data for year {filterInfoText} is hidden.</p> */}
