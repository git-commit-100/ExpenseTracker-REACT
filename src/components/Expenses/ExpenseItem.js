import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import {useState} from 'react';

function ExpenseItem(props) {

    //using states to update title on click of button
    //using array destructuring to separate values
    // useState returns array of two values => 1.value , 2.function to change it
    const [title,setTitle] = useState(props.title);

    function clickHandler(){
        //calling setTitle to update componenet
        setTitle('Updated Title !');
    }


    return (
        <div className='expenseItem'>
            <ExpenseDate date={props.date}/>
            <div className='title'>{title}</div>
            <div className='amount'>${props.amount}</div>
            <button className='btn' onClick={clickHandler}>Update!</button>
        </div>
    );
}

export default ExpenseItem;