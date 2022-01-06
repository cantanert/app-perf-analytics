import classes from "./ChartContainer.module.scss";
import Chart from "../Chart/Chart";

function ChartContainer(props) {
  const {title, dataset, datakey, isLoading} = props;
  return (
    <div
      className={classes.chartContainer}
      data-testid="chartContainer"
    >
      <p
        className={classes.chartContainer_Title}
        data-testid="chartTitle"
      >{title}</p>
      {isLoading
        ? <p>Loading...</p>
        : dataset.length
          ? <Chart
            dataset={dataset}
            datakey={datakey}
            strokeColor="#0000FF"
            fillColor="#7EC8E3"
          />
          : <p>There is no data exist.</p>
      }
    </div>
  )
}

export default ChartContainer;