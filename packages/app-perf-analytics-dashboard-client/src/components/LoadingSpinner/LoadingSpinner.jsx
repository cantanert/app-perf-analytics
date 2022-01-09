import classes from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return(
    <div
      className={classes.Wrapper}
      data-testid="LoadingSpinner"
    >
      <div className={classes.LoadingSpinner}/>
    </div>
  );
}

export default LoadingSpinner;