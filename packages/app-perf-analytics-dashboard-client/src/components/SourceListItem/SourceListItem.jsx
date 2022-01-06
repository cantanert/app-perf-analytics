import classes from "./SourceListItem.module.scss";
import FilePresenter from "../FilePresenter/FilePresenter";

const SourceListItem = (props) => {
  const {resource} = props;

  const resourceRenderer = resource.map((item) => {
    return ( <FilePresenter fileData={item} />)
  })

  return (
    <div className={classes.SourceListItem}>
      {resourceRenderer}
    </div>
  )
}

export default SourceListItem;