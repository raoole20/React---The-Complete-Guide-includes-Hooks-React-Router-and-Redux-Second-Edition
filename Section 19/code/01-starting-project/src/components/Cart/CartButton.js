import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/UI.silice';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const quantity = useSelector( state => state.cart.totalQuantity)
  
  const toggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
