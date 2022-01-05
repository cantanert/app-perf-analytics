import classes from "./Header.module.scss";

const Header = (props) => {
  const {title, subtitle} = props;
  return (
   <div className={classes.Header}>
     <h1 data-testid="headerTitle">{title}</h1>
     <p data-testid="headerSubtitle">{subtitle}</p>
   </div>
  )
}

export default Header;