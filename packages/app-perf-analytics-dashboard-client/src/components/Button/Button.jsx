import classes from './Button.module.scss'

const Button = (props) => {
  return(
    <button
      className={`${classes.Button} ${props.secondary ? classes.Button_Secondary : null}`}
      style={props.customStyles}
      onClick={props.customClickEvent}
    >
      {props.children}
    </button>
  )
}

export default Button;