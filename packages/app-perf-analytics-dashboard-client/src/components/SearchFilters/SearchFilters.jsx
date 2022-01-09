import classes from "./SearchFilters.module.scss";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useContext, useEffect, useState} from "react";
import Requester from "../../utils/Requester";
import {PERFORMANCE_METRICS_QUERY} from "../../enums/endpoints";
import GlobalContext from "../../context/GlobalContext";
import { toast } from 'react-toastify';

import {
  FILTERS_HAS_NO_CHANGE,
  SMT_WENT_WRONG
} from "../../enums/messages";

const requester = new Requester();

const SearchFilters = () => {
  const {
    initialStartDate,
    startDate,
    initialEndDate,
    endDate,
    isDateFiltersChanged,
    statisticSetter,
    startDateSetter,
    endDateSetter,
    isStatisticsPendingSetter
  } = useContext(GlobalContext);

  const [isClearFilterAction, setIsClearFilterAction] = useState(false);


  useEffect(() => {
    if (isClearFilterAction && isDateFiltersChanged){
      getAnalysisHandler();
      setIsClearFilterAction(false);
    }
  },[isClearFilterAction])

  const clearHandler = () => {
    if (isDateFiltersChanged){
      startDateSetter(initialStartDate);
      endDateSetter(initialEndDate);
      setIsClearFilterAction(true);
    } else {
      toast.warn(FILTERS_HAS_NO_CHANGE);
    }
  }

  const submitHandler = () => {
    if (isDateFiltersChanged){
      getAnalysisHandler();
    } else {
      toast.warn(FILTERS_HAS_NO_CHANGE);
    }
  }

  const getAnalysisHandler = () => {
    isStatisticsPendingSetter(true);
    requester.post(PERFORMANCE_METRICS_QUERY,{
      startDate,
      endDate
    }).then(({data}) => {
      statisticSetter(data.statistics ?? []);
    }).catch((err) => {
      toast.error(err?.data?.message ?? SMT_WENT_WRONG);
    }).finally(() => {
      isStatisticsPendingSetter(false);
    })
  }

  return (
    <div
      className={classes.SearchFilters}
      data-testid="SearchFilters"
    >
      <div className={classes.SearchFilters_TimePickerWrapper}>
        <div className={classes.SearchFilters_TimePicker}>
          <p
            className={classes.SearchFilters_TimePicker_Title}
            data-testid="startTime"
          >
            Start Time
          </p>
          <DatePicker
            selected={startDate}
            onChange={(date) => startDateSetter(date)}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </div>
        <div className={classes.SearchFilters_TimePicker}>
          <p
            className={classes.SearchFilters_TimePicker_Title}
            data-testid="endTime"
          >
            End Time
          </p>
          <DatePicker
            selected={endDate}
            onChange={(date) => endDateSetter(date)}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </div>
      </div>
      <div
        className={classes.SearchFilters_ClearButtonWrapper}
        data-testid="clearButton"
      >
        <Button
          secondary={true}
          customClickEvent={clearHandler}
        >
          Clear Filters
        </Button>
      </div>
      <div
        className={classes.SearchFilters_SubmitButtonWrapper}
        data-testid="submitButton"
      >
        <Button
          customClickEvent={submitHandler}
        >
          Submit Search
        </Button>
      </div>

    </div>
  )
}

export default SearchFilters;