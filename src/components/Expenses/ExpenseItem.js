import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className='expenseItem'>
            <ExpenseDate date={props.date}/>
            <div className='hidden'>{props.id}</div>
            <div className='title'>{props.title}</div>
            <div className='amount'>${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;