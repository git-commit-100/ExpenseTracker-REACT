import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className='expenseItem'>
            <ExpenseDate date={props.date}/>
            <div className='title'>{props.title}</div>
            <div className='amount'>${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;