import classes from "./Header.module.scss";

const Header = (props) => {
  const {title, subtitle} = props;
  return (
   <div className={classes.Header}>
     <div className={classes.Header_ItemsWrapper}>
       <h1
         className={classes.Header_ItemsWrapper_Header}
         data-testid="headerTitle"
       >
         {title}
       </h1>
       <p
         className={classes.Header_ItemsWrapper_SubHeader}
         data-testid="headerSubtitle"
       >
         {subtitle}
       </p>
     </div>
   </div>
  )
}

export default Header;