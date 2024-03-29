import classes from "./MonitoringArea.module.scss";
import ChartContainer from "../ChartContainer/ChartContainer";
import SourceList from "../SourceList/SourceList";
import Requester from "../../utils/Requester";
import {useEffect, useContext} from "react";
import {metricTypes} from "../../enums/metricTypes";
import GlobalContext from "../../context/GlobalContext";
import dayjs from "dayjs";
import {PERFORMANCE_METRICS_QUERY} from "../../enums/endpoints";
import Card from "../Card/Card";

const requester = new Requester();

function MonitoringArea() {
  const {
    statistics,
    statisticSetter,
    isStatisticsPendingSetter
  } = useContext(GlobalContext);

  useEffect(() => {
    requester.get(PERFORMANCE_METRICS_QUERY)
      .then(({data}) => {
        statisticSetter(data.statistics ?? []);
        isStatisticsPendingSetter(false);
      })
      .catch((err) => {
        isStatisticsPendingSetter(false);
        console.log(err)
      })
  },[]);

  const timeFormatter = (date) => {
    return dayjs(date).format("HH:mm:ss");
  };

  const getMetricsByType = {
    [metricTypes.FCP.value]: function (){
      return statistics.map((item) => {
        return {
          [metricTypes.FCP.value] : item[metricTypes.FCP.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.TTFB.value]: function (){
      return statistics.map((item) => {
        return {
          [metricTypes.TTFB.value] : item[metricTypes.TTFB.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.DOM_LOAD.value]: function (){
      return statistics.map((item) => {
        return {
          [metricTypes.DOM_LOAD.value] : item[metricTypes.DOM_LOAD.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.WINDOW_LOAD.value]: function (){
      return statistics.map((item) => {
        return {
          [metricTypes.WINDOW_LOAD.value] : item[metricTypes.WINDOW_LOAD.value],
          xAxisLabel: timeFormatter(item.date)
        }
      })
    },
    [metricTypes.RESOURCES.value]: function (){
      return statistics.map((item) => {
        return {
          [metricTypes.RESOURCES.value] : item[metricTypes.RESOURCES.value],
          dateInfo: item.date
        }
      })
    }
  };

  const chartContainerTypes = [
    metricTypes.FCP,
    metricTypes.TTFB,
    metricTypes.DOM_LOAD,
    metricTypes.WINDOW_LOAD,
  ];

  return (
    <div className={classes.MonitoringArea}>
      <Card>
        <div
          className={classes.MonitoringArea_Row}
          data-testid="MonitoringAreaRow"
        >
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
      </Card>
      <Card>
        <div
          className={classes.MonitoringArea_Row}
          data-testid="MonitoringAreaRow"
        >
          <SourceList
            resourceList={getMetricsByType[metricTypes.RESOURCES.value]()}
          />
        </div>
      </Card>
    </div>
  );
}

export default MonitoringArea;