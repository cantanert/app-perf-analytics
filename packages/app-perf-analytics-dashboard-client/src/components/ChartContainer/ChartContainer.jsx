import classes from "./ChartContainer.module.scss";
import Chart from "../Chart/Chart";
import Button from "../Button/Button";
import {NewTabRouter} from "../../utils/NewTabRouter";
import GlobalContext from "../../context/GlobalContext";
import {useContext} from "react";

function ChartContainer(props) {
  const globalCtx = useContext(GlobalContext);
  const isLoading = globalCtx.isStatisticsPending;
  const isDateFiltersChanged = globalCtx.isDateFiltersChanged

  const {title, dataset, datakey} = props;

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
      {isLoading
        ? <p>Loading...</p>
        : dataset.length
          ? <Chart
            dataset={dataset}
            datakey={datakey}
            strokeColor="#0000FF"
            fillColor="#7EC8E3"
          />
          : <>
            <p>There is no data exist.</p>
            {
              isDateFiltersChanged
                ? "Change date range or clear filters."
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