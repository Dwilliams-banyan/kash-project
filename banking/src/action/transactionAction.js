export const addTransaction=({amount=0, to, transactionType, memo=""}) =>({
    type : "ADD_TRANSACTION",
    transaction : {
        id:Math.random(),
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