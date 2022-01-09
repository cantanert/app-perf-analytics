import classes from "./FilePresenter.module.scss";

const FilePresenter = (props) => {
  const host = "https://app-perf-analytics.herokuapp.com";
  const fileRelativePath = (file = "") => {
    return file.split(host)[1];
  }
  const {fileData} = props;
  return (
    <div className={classes.FilePresenter}>
      <div className={classes.FilePresenter_iniatorType}>
        <p>{fileData.initiatorType}</p>
      </div>
      <div className={classes.FilePresenter_name}>
        <p>{fileRelativePath(fileData.name)}</p>
      </div>
      <div className={classes.FilePresenter_responseEnd}>
        <p>{fileData?.responseEnd?.toFixed(2)}s</p>
      </div>
    </div>
  )
}

export default FilePresenter