import classes from "./SourceList.module.scss";
import SourceListItem from "../SourceListItem/SourceListItem";
import dayjs from "dayjs";
import Button from "../Button/Button";
import {NewTabRouter} from "../../utils/NewTabRouter";
import GlobalContext from "../../context/GlobalContext";
import {useContext} from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import {NO_DATA_EXIST} from "../../enums/messages";

const SourceList = (props) => {
  const {resourceList} = props;

  const {isStatisticsPending} = useContext(GlobalContext);

  const dayFormatter = (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss')
  }

  const sourceListRenderer = resourceList.map((item, index) => {
      return (
        <div
          key={index}
          className={classes.SourceList_ItemTitle_Container}
          data-testid="SourceListItemTitleContainer"
        >
          <p
            key={index + "p_element"}
            className={classes.SourceList_ItemTitle}
            data-testid="SourceListItemTitle"
          >
            {dayFormatter(item.dateInfo)}
          </p>
          <SourceListItem
            resource={item.resources}
          />
        </div>
      )
  });


  return (
    <div className={classes.SourceList}>
      <p className={classes.SourceList_Title}>Resource Timing Logs</p>
      <div className={classes.SourceList_ItemWrapper}>
        { isStatisticsPending
          ? <LoadingSpinner />
          : resourceList.length
            ? sourceListRenderer
            : <>
              <p data-testid="noEntryText">{NO_DATA_EXIST}</p>
              <Button
                secondary={true}
                customClickEvent={() => NewTabRouter('https://app-perf-analytics.herokuapp.com/data-provider-client')}
              >Go to Data Provider App</Button>
            </>
        }
      </div>
    </div>
  )
}

export default SourceList;