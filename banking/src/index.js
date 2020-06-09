import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import myStore from './store/configStore'
//import Home from './components/Home';
import * as serviceWorker from './serviceWorker';
import 'bootstrap-css-only/css/bootstrap.min.css'
import "mdbreact/dist/css/mdb.css";
import AppRouter from './router/appRouter';
import {addTransaction} from './action/transactionAction'
import {addBalance} from './action/balanceAction'

const store = myStore()

store.subscribe(()=> console.log(store.getState()))

store.dispatch(addBalance(45))
store.dispatch(addBalance(250))
store.dispatch(addBalance(88))
store.dispatch(addTransaction({amount:20,to:"Rose",memo:"For Great Teaching",transactionType:"transfer"}))
store.dispatch(addTransaction({amount:25,to:"DeMarcus",memo:"Rent",transactionType:"Withdrawal"}))
store.dispatch(addTransaction({amount:30,to:"Joey",memo:"Car Note",transactionType:"Withdrawal"}))

const JSX = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(JSX, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
