import classes from "./FilePresenter.module.scss";

const FilePresenter = (props) => {
  const {fileData} = props;
  return (
    <div className={classes.FilePresenter}>
      <div className={classes.FilePresenter_iniatorType}>
        <p>{fileData.initiatorType}</p>
      </div>
      <div className={classes.FilePresenter_name}>
        <p>{fileData.name.split('')}</p>
      </div>
      <div className={classes.FilePresenter_responseEnd}>
        <p>{fileData.responseEnd.toFixed(2)} s</p>
      </div>
    </div>
  )
}

export default FilePresenter