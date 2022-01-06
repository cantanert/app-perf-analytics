import {createContext, useState} from "react";

const GlobalContext = createContext({
  statistics: [],
  isStatisticsPending: false,
  isDateFiltersChanged: false,
  statisticSetter: () => {},
  isStatisticsPendingSetter: () => {},
  setIsDateFilterChanged: () => {}
});
//This default context value is important for auto-completion

export function GlobalContextProvider(props){

  const [statistics, setStatistics] = useState([]);
  const [isStatisticsPending, setIsStatisticsPending] = useState(true)
  const [isDateFiltersChanged, setIsDateFiltersChanged] = useState(false)

  function statisticSetter(metrics) {
    setStatistics(metrics);
  }

  function isStatisticsPendingSetter(boolean){
    setIsStatisticsPending(boolean);
  }

  function setIsDateFilterChanged(boolean){
    setIsDateFiltersChanged(boolean)
  }

  const context = {
    statistics,
    isStatisticsPending,
    isDateFiltersChanged,
    statisticSetter,
    isStatisticsPendingSetter,
    setIsDateFilterChanged
  };

  return <GlobalContext.Provider value={context}>
    {props.children}
  </GlobalContext.Provider>
}

export default GlobalContext