import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2025');

	const filterYearHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
		console.log(selectedYear);
	};

	return (
		<Card className="expenses">
			{/* Added props (onChangeilter) to recieve data from ExpensesFilter.js */}
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterYearHandler}
			/>

			{props.items.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
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
