import classes from "./SourceList.module.scss";
import SourceListItem from "../SourceListItem/SourceListItem";
import dayjs from "dayjs";

const SourceList = (props) => {
  const {resourceList} = props;

  const dayFormatter = (date) => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss')
  }

  const sourceListRenderer = resourceList.map((item) => {
      return (
        <>
          <p className={classes.SourceList_title}>{dayFormatter(item.dateInfo)}</p>
          <SourceListItem resource={item.resources} />
        </>
      )
  });

  return (
    <div className={classes.SourceList}>
      {sourceListRenderer}
    </div>
  )
}

export default SourceList;