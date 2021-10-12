import './ExpenseFilter.css';

function ExpenseFilter(props){

  const changeDateHandler = (e) => {
    props.onChangeFilter(e.target.value);
  }

    return(
        <div className='filter-date'>
            <label>Filter By Year</label>
            <select value={props.selected} name='filterDate' onChange={changeDateHandler}>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
            </select>
        </div>
    );
}

export default ExpenseFilter;