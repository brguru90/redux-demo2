const Reducer_1=(state=null,action)=>{
    switch (action.type) {
        case "SET_R1":
            return action.payload
            break;
        case "RESET_R1":
            return null
            break;    
        default:
            return state
    }
}

export default Reducer_1