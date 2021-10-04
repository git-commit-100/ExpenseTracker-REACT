import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className='expenseItem'>
            <div className='date'>28 Aug 2021</div>
            <div className='title'>Car Insurance</div>
            <div className='amount'>$249.99</div>
        </div>
    );
}

export default ExpenseItem;