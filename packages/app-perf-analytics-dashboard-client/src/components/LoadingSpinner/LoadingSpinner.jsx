import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return(
    <div className={classes.Wrapper}>
      <div className={classes.LoadingSpinner}/>
    </div>
  )
}

export default LoadingSpinner;