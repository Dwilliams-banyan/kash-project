import React from 'react';
import ReactDOM from 'react-dom';
import myStore from './store/configStore'
//import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-css-only/css/bootstrap.min.css'
import "mdbreact/dist/css/mdb.css";
import AppRouter from './router/appRouter';
import {addTransaction} from './action/transactionAction'
import {addBalance} from './action/balanceAction'

const store = myStore()
console.log(store.getState())

let tests= store.dispatch(addBalance(45))
let test=store.dispatch(addTransaction({amount:20,to:"Rose",memo:"For Great Teaching",transactionType:"transfer"}))
console.log(test)
console.log(tests)
ReactDOM.render(<AppRouter />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
