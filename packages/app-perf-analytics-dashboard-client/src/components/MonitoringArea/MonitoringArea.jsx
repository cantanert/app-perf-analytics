import classes from "./MonitoringArea.module.scss";
import ChartContainer from "../ChartContainer/ChartContainer";
import SourceList from "../SourceList/SourceList";
import Requester from "../../utils/Requester";
import {useState, useEffect} from "react";
import {metricTypes} from "../../enums/metricTypes";
import dayjs from "dayjs";

const requester = new Requester();

function MonitoringArea() {
  const [metrics, setMetrics] = useState([]);
  const [isMetricsPending, setIsMetricsPending] = useState(true)
  useEffect(() => {
    requester.get('http://app-perf-analytics.herokuapp.com/api/performance-metrics-capability')
      .then(({data}) => {
        setIsMetricsPending(false);
        setMetrics(data.statistics ?? []);
      })
      .catch((err) => {
        setIsMetricsPending(false);
        console.log(err)
      })
  },[])

  const timeFormatter = (date) => {
    return dayjs(date).format("HH:mm:ss");
  }

  const getMetricsByType = {
    [metricTypes.FCP.value]: function (){
      return metrics.map((item) => {
        return {
          [metricTypes.FCP.value] : item[metricTypes.FCP.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.TTFB.value]: function (){
      return metrics.map((item) => {
        return {
          [metricTypes.TTFB.value] : item[metricTypes.TTFB.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.DOM_LOAD.value]: function (){
      return metrics.map((item) => {
        return {
          [metricTypes.DOM_LOAD.value] : item[metricTypes.DOM_LOAD.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.WINDOW_LOAD.value]: function (){
      return metrics.map((item) => {
        return {
          [metricTypes.WINDOW_LOAD.value] : item[metricTypes.WINDOW_LOAD.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.RESOURCES.value]: function (){
      return metrics.map((item) => {
        return {
          [metricTypes.RESOURCES.value] : item[metricTypes.RESOURCES.value],
          dateInfo: item.date
        }
      })
    }
  }
  return (
    <div className={classes.MonitoringArea}>
      <div className={classes.MonitoringArea_Row}>
        <ChartContainer
          isLoading={isMetricsPending}
          title={metricTypes.TTFB.name}
          dataset={getMetricsByType[metricTypes.TTFB.value]()}
          datakey={metricTypes.TTFB.value}
        />
        <ChartContainer
          isLoading={isMetricsPending}
          title={metricTypes.FCP.name}
          dataset={getMetricsByType[metricTypes.FCP.value]()}
          datakey={metricTypes.FCP.value}
        />
      </div>
      <div className={classes.MonitoringArea_Row}>
        <ChartContainer
          isLoading={isMetricsPending}
          title={metricTypes.DOM_LOAD.name}
          dataset={getMetricsByType[metricTypes.DOM_LOAD.value]()}
          datakey={metricTypes.DOM_LOAD.value}
        />
        <ChartContainer
          isLoading={isMetricsPending}
          title={metricTypes.WINDOW_LOAD.name}
          dataset={getMetricsByType[metricTypes.WINDOW_LOAD.value]()}
          datakey={metricTypes.WINDOW_LOAD.value}
        />
      </div>
      <div className={classes.MonitoringArea_Row}>
        <SourceList
          resourceList={getMetricsByType[metricTypes.RESOURCES.value]()}
        />
      </div>
    </div>
  )
}

export default MonitoringArea;