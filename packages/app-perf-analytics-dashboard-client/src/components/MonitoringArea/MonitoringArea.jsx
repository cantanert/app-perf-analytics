import classes from "./MonitoringArea.module.scss";
import ChartContainer from "../ChartContainer/ChartContainer";
import SourceList from "../SourceList/SourceList";
import Requester from "../../utils/Requester";
import {useState, useEffect, useContext} from "react";
import {metricTypes} from "../../enums/metricTypes";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
import {PERFORMANCE_METRICS_CAPABILITY} from "../../enums/endpoints";

const requester = new Requester();

function MonitoringArea() {
  const globalCtx = useContext(GlobalContext);
  const metrics = globalCtx.statistics;
  const isMetricsPending = globalCtx.isStatisticsPending;

  useEffect(() => {
    requester.get(PERFORMANCE_METRICS_CAPABILITY)
      .then(({data}) => {
        globalCtx.statisticSetter(data.statistics ?? []);
        globalCtx.isStatisticsPendingSetter(false);
      })
      .catch((err) => {
        globalCtx.isStatisticsPendingSetter(false);
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
  const chartContainerTypes = [
    metricTypes.FCP,
    metricTypes.TTFB,
    metricTypes.DOM_LOAD,
    metricTypes.WINDOW_LOAD,
  ]
  return (
    <div className={classes.MonitoringArea}>
      <div className={classes.MonitoringArea_Row}>
        {
          chartContainerTypes.map((type, index) => {
            return (
              <ChartContainer
                key={index}
                title={type.name}
                dataset={getMetricsByType[type.value]()}
                datakey={type.value}
              />
            )
          })
        }
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