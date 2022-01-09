import classes from "./SourceListItem.module.scss";
import FilePresenter from "../FilePresenter/FilePresenter";

const SourceListItem = (props) => {
  const {resource} = props;

  const resourceRenderer = resource.map((item, index) => {
    return (
      <FilePresenter
        fileData={item}
        key={index}
      />)
  })

  return (
    <div
      className={classes.SourceListItem}
      data-testid="FilePresenterWrapper"
    >
      {resourceRenderer}
    </div>
  )
}

export default SourceListItem;