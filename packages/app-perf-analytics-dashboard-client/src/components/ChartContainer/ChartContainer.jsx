import classes from "./ChartContainer.module.scss";
import Chart from "../Chart/Chart";
import Button from "../Button/Button";
import {NewTabRouter} from "../../utils/NewTabRouter";
import GlobalContext from "../../context/GlobalContext";
import {useContext} from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {
  CHANGE_DATES_OR_CLEAR_FILTER,
  NO_DATA_EXIST
} from "../../enums/messages";

function ChartContainer(props) {
  const {title, dataset, datakey} = props;

  const {
    isStatisticsPending,
    isDateFiltersChanged
  } = useContext(GlobalContext);

  return (
    <div
      className={classes.chartContainer}
      data-testid="chartContainer"
    >
      <p
        className={classes.chartContainer_Title}
        data-testid="chartTitle"
      >
        {title}
      </p>
      {isStatisticsPending
        ? <LoadingSpinner />
        : dataset.length
          ? <Chart
            dataset={dataset}
            datakey={datakey}
            strokeColor="#141E61"
            strokeWidth={2}
            fillColor="#ff6820"
          />
          : <>
            <p>{NO_DATA_EXIST}</p>
            {
              isDateFiltersChanged
                ? CHANGE_DATES_OR_CLEAR_FILTER
                : <Button
                  secondary={true}
                  customClickEvent={() => NewTabRouter("https://app-perf-analytics.herokuapp.com/data-provider-client")}
                >
                  Go to Data Provider App
                </Button>
            }
          </>

      }
    </div>
  )
}

export default ChartContainer;