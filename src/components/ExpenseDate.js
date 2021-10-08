import './ExpenseDate.css';

function ExpenseDate(props){
    const dateElem = props.date;

    return(
        <div className='date'>
            <div className='date_month'>{dateElem.toLocaleDateString('en-US',{month:'long'})}</div>
            <div className='date_day'>{dateElem.toLocaleDateString('en-US',{day:'2-digit'})}</div>
            <div className='date_year'>{dateElem.toLocaleDateString('en-US',{year:'numeric'})}</div>
        </div>
    );
}

export default ExpenseDate;