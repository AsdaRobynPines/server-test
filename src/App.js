import { useSelector, useDispatch } from 'react-redux';
import {updateStatus} from './actions/actions.js';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const { status } = useSelector(state => state)
  console.log(status)
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {status}
        </p>
        <button onClick={() => dispatch(updateStatus('a call?'))}>
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
