const initBal = 0

export default (balance = initBal, action)=>{
    switch(action.type){
        case "ADD_BALANCE":
            return balance + action.amount
        case 'SUB_BALANCE':
            return balance - action.amount
        default:
            return balance
    }
}