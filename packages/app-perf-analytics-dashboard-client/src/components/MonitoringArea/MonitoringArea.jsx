import classes from "./MonitoringArea.module.scss";
import ChartContainer from "../ChartContainer/ChartContainer";

function Chart() {
  return (
    <div className={classes.MonitoringArea}>
      <div className={classes.MonitoringArea_Row}>
        <ChartContainer title="TTFB"/>
        <ChartContainer title="FCP"/>
      </div>
      <div className={classes.MonitoringArea_Row}>
        <ChartContainer title="DOM Load"/>
        <ChartContainer title="Window Load"/>
      </div>
    </div>
  )
}

export default Chart;