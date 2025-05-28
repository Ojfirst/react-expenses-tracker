import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2025');
	//FilterHandler
	const filterYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	//unction for filter by year
	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				{/* Added props (onChangeilter) to recieve data from ExpensesFilter.js */}
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterYearHandler}
				/>

				{filteredExpense.length === 0 ? (
					<p>No expense found</p>
				) : (
					filteredExpense.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)}
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
