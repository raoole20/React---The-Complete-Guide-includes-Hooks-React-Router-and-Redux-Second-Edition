import {  useDispatch } from 'react-redux'
import { actionsAuth } from '../store/index'
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch()

  const handler = (e) => {
    e.preventDefault()
    dispatch(actionsAuth.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={handler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
