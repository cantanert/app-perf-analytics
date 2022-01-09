import {createContext, useEffect, useState} from "react";

const GlobalContext = createContext({
  statistics: [],
  isStatisticsPending: false,
  initialStartDate: null,
  startDate: null,
  initialEndDate: null,
  endDate: null,
  isDateFiltersChanged: false,
  statisticSetter: () => {},
  isStatisticsPendingSetter: () => {},
  startDateSetter: () => {},
  endDateSetter: () => {},
});

export function GlobalContextProvider(props){
  const currentDate = new Date();
  const halfHourAgo = new Date(currentDate.getTime() - 30*60000);

  const [statistics, setStatistics] = useState([]);
  const [isStatisticsPending, setIsStatisticsPending] = useState(true);
  const [initialStartDate] = useState(halfHourAgo);
  const [startDate, setStartDate] = useState(halfHourAgo);
  const [initialEndDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(currentDate);
  const [isDateFiltersChanged, setIsDateFiltersChanged] = useState(false);

  useEffect(() => {
    if (!(initialEndDate === endDate && initialStartDate === startDate)){
      setIsDateFiltersChanged(true);
    } else {
      setIsDateFiltersChanged(false);
    }
  }, [startDate, endDate]);

  function statisticSetter(metrics) {
    setStatistics(metrics);
  }

  function isStatisticsPendingSetter(boolean){
    setIsStatisticsPending(boolean);
  }

  function startDateSetter(date){
    setStartDate(date);
  }

  function endDateSetter(date){
    setEndDate(date)
  }

  const context = {
    statistics,
    initialStartDate,
    startDate,
    initialEndDate,
    endDate,
    isStatisticsPending,
    isDateFiltersChanged,
    statisticSetter,
    isStatisticsPendingSetter,
    startDateSetter,
    endDateSetter
  };

  return <GlobalContext.Provider value={context}>
    {props.children}
  </GlobalContext.Provider>
}

export default GlobalContext