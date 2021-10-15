import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    /*to find maxValue , we must convert array of object into an array of values , 
    so that we can perform Math.max() to receive maximum value */
    let amountObjects = props.dataPoints.map(dataPoint => dataPoint.value);
    let maximumValue = Math.max(...amountObjects);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
