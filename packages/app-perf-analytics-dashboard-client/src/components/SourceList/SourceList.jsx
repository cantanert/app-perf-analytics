import classes from "./SourceList.module.scss";
import SourceListItem from "../SourceListItem/SourceListItem";
import dayjs from "dayjs";
import Button from "../Button/Button";
import {NewTabRouter} from "../../utils/NewTabRouter";

const SourceList = (props) => {
  const {resourceList} = props;

  const dayFormatter = (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss')
  }

  const sourceListRenderer = resourceList.map((item, index) => {
      return (
        <>
          <p
            key={index}
            className={classes.SourceList_ItemTitle}>
            {dayFormatter(item.dateInfo)}
          </p>
          <SourceListItem
            resource={item.resources}
          />
        </>
      )
  });


  return (
    <div className={classes.SourceList}>
      <p className={classes.SourceList_Title}>Resource Timing Logs</p>
      <div className={classes.SourceList_ItemWrapper}>
        {resourceList.length
          ? sourceListRenderer
          : <>
            <p>There is no data exist.</p>
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