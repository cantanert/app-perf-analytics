import classes from "./SearchFilters.module.scss";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import Requester from "../../utils/Requester";

const SearchFilters = () => {
  const requester = new Requester();

  const currentDate = new Date();
  const halfHourAgo = new Date(currentDate.getTime() - 30*60000);

  const [startDate, setStartDate] = useState(halfHourAgo);
  const [endDate, setEndDate] = useState(currentDate);

  const startDateHandler = (date) => {
    setStartDate(date);
  };

  const endDateHandler = (date) => {
    setEndDate(date);
  }

  const clearHandler = () => {
    setEndDate(new Date(new Date().getTime() - 30*60000));
    setEndDate(new Date());
    getAnalysisHandler();
  }

  const submitHandler = () => {
    getAnalysisHandler();
  }

  const getAnalysisHandler = () => {
    requester.post("https://app-perf-analytics.herokuapp.com/api/performance-metrics-capability",{
      startDate,
      endDate
    }).then(() => {
      //TODO update store state
    }).catch((err) => {
      console.log(err);
      alert(err?.data?.message);
    })
  }

  return (
    <div className={classes.SearchFilters}>
      <div className={classes.SearchFilters_TimePickerWrapper}>
        <div className={classes.SearchFilters_TimePicker}>
          <p className={classes.SearchFilters_TimePicker_Title}>Start Time</p>
          <DatePicker
            selected={startDate}
            onChange={startDateHandler}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </div>
        <div className={classes.SearchFilters_TimePicker}>
          <p className={classes.SearchFilters_TimePicker_Title}>End Time</p>
          <DatePicker
            selected={endDate}
            onChange={endDateHandler}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </div>
      </div>
      <div className={classes.SearchFilters_ClearButtonWrapper}>
        <Button
          secondary={true}
          customClickEvent={clearHandler}
        >
          Clear Filters
        </Button>
      </div>
      <div className={classes.SearchFilters_SubmitButtonWrapper}>
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