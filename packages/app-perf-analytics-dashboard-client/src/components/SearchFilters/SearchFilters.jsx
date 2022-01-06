import classes from "./SearchFilters.module.scss";
import Button from "../Button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useContext, useState} from "react";
import Requester from "../../utils/Requester";
import {PERFORMANCE_METRICS_CAPABILITY} from "../../enums/endpoints";
import GlobalContext from "../../context/GlobalContext";

const SearchFilters = () => {
  const requester = new Requester();
  const globalCtx = useContext(GlobalContext);

  const currentDate = new Date();
  const halfHourAgo = new Date(currentDate.getTime() - 30*60000);

  const [startDate, setStartDate] = useState(halfHourAgo);
  const [endDate, setEndDate] = useState(currentDate);

  const clearHandler = () => {
    setStartDate(halfHourAgo);
    setEndDate(currentDate);
    globalCtx.setIsDateFilterChanged(false);
    getAnalysisHandler();
  }

  const submitHandler = () => {
    !(currentDate === endDate || halfHourAgo === startDate) && globalCtx.setIsDateFilterChanged(true);
    getAnalysisHandler();
  }

  const getAnalysisHandler = () => {
    requester.post(PERFORMANCE_METRICS_CAPABILITY,{
      startDate,
      endDate
    }).then(({data}) => {
      globalCtx.statisticSetter(data.statistics ?? []);
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
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="dd/MM/yyyy HH:mm"
          />
        </div>
        <div className={classes.SearchFilters_TimePicker}>
          <p className={classes.SearchFilters_TimePicker_Title}>End Time</p>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
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