import classes from './Card.module.scss';

const Card = (props) => {
  return (
    <div
      data-testid="Card"
      className={classes.Card}
    >
      {props.children}
    </div>
  );
}

export default Card;