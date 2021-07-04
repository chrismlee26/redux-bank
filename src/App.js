import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators} from 'redux';
import { actionCreators } from './state/index';


function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney}  = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>deposit</button>
      <button onClick={() => withdrawMoney(100)}>-</button>
    </div>
  );
}

export default App;
