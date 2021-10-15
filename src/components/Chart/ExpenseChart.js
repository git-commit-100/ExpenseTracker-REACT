import Chart from "./Chart";
import './ExpenseChart.css';

const ExpenseChart = (props) => {

    let chartDataArr = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'Mar',value:0},
        {label:'Apr',value:0},
        {label:'May',value:0},
        {label:'Jun',value:0},
        {label:'Jul',value:0},
        {label:'Aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},
    ];

    //here getMonth() gives index of month eg: Jan => 0
    //also in our array we have constructed it the same way , Jan => 0
    for(let expense of props.expenses){
        let expenseMonth = expense.date.getMonth();
        chartDataArr[expenseMonth].value += expense.amount;
    }
    return(
        <div className='expense-chart'>
            <Chart dataPoints={chartDataArr}/>
        </div>
    );
}

export default ExpenseChart;