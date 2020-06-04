import {v4 as uuidv4} from 'uuid'
export const addTransaction=({amount=0, to, transactionType, memo=""}) =>({
    type : "ADD_TRANSACTION",
    transaction : {
        id:uuidv4(),
        memo,
        to,
        transactionType,
        amount,
        date:new Date()
    }
}) 

export const editMemo=(id,memo)=>({
    type: 'EDIT_MEMO',
    id,
    memo
})
export const  deleteTransaction=(id)=>({
    type: 'DEL_TRANSACTION',
    id
})