import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { decrementByNum, increment, decrement, incrementByNum } from './redux/counterSlice';


function App() {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className='container'>
        <h1>Counter: {count}</h1>
        <button className='increment' onClick={() => dispatch(increment())}> Increment</button>
        <button className='decrement' onClick={() => dispatch(decrement())}> Decrement</button>
        <button className='incrementByNumber' onClick={() => dispatch(incrementByNum(40))}> Increment By 40</button>
        <button className='decrementByNumber' onClick={() => dispatch(decrementByNum(40))}> Decrement By 40</button>
      </div>
    </div>
  );
}

export default App;
