import {createStore,combineReducers} from 'redux'
import balance from '../reducer/balanceReducer'
import transaction from '../reducer/transactionReducer'

export default ()=>{
    return createStore(combineReducers({
        transaction : transaction,
        balance : balance
    }))
}