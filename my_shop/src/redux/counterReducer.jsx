const counterReducer = (state={count:0}, action)=>{
    switch(action, type){
        case "INCREASE":
            return {count: ++state.count}
        case "DECREASE":
            return {count: --state.count}
        case "RESET":
            return {count: 0}
        case "SET COUNT":
            return {count: action.payload}
        default:
            return state
    }
    return state

}

export default counterReducer

