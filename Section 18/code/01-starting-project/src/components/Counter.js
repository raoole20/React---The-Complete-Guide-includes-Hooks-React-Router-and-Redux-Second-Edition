import { useDispatch, useSelector } from 'react-redux'
import { actionsCounter } from '../store/index'
import classes from './Counter.module.css';


const Counter = () => {
  const counter = useSelector( state => state.counter.counter )
  const show = useSelector( state => state.counter.shwoCounter )
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(actionsCounter.toggle())
  }

  return (
    <main className={classes.counter} style={{ height: '280px' }}>
      <h1>Redux Counter</h1>
      { show ? <div className={classes.value} >{counter}</div> : <div style={{ height: '36.25px', width: '100%', display: 'block', margin: '32px 0'}}></div>}
      <div>
        <button onClick={() => { dispatch(actionsCounter.increment())}}>INCREMENT</button>
        <button onClick={() => { dispatch(actionsCounter.increase( 10 ))}} >INCREMENT 5</button>
        <button onClick={() => { dispatch(actionsCounter.decrement())}} >DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
