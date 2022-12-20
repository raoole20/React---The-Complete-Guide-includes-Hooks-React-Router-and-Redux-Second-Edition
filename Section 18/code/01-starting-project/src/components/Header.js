import { useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { actionsAuth } from '../store/index'
const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=> dispatch(actionsAuth.logout())}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
