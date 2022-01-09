import classes from "./FilePresenter.module.scss";

const FilePresenter = (props) => {
  const host = "https://app-perf-analytics.herokuapp.com";
  const fileRelativePath = (file = "") => {
    return file.split(host)[1];
  }
  const {fileData} = props;
  return (
    <div
      className={classes.FilePresenter}
      data-testid="FilePresenter"
    >
      <div className={classes.FilePresenter_iniatorType}>
        <p data-testid="initiatorType">{fileData.initiatorType}</p>
      </div>
      <div className={classes.FilePresenter_name}>
        <p data-testid="name">{fileRelativePath(fileData.name)}</p>
      </div>
      <div className={classes.FilePresenter_responseEnd}>
        <p data-testid="responseEnd">{fileData?.responseEnd?.toFixed(2)}s</p>
      </div>
    </div>
  )
}

export default FilePresenter