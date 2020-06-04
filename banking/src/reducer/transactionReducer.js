const initState=[]

export default (state=initState,action)=>{
    switch(action.type){
        case "ADD_TRANSACTION":
            return [...state, action.transaction]
        case "DEL_TRANSACTION":
            return state.filter(item=> item.id !== action.id)
        case "EDIT_MEMO":
            return state.map(item =>{
                if(item.id === action.id ){
                    return {...item, memo:action.memo}
                }
                return item
            })
        default:
            return state
    }
}