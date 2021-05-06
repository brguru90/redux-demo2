
const setData=(to_reducer,data=null)=>{    
    switch (to_reducer) {
        case 1:
           return {
               type:"SET_R1",
               payload:data
           }
        case 2:
            return {
                type:"SET_R2",
                payload:data
            }
        case 3:
            return {
                type:"RESET_R1",
                payload:null
            }        
        case 4:
            return {
                type:"RESET_R2",
                payload:null
            }    
        default:
            console.log("Invalid actions")
            return {
                type:"RESET_R2",
                payload:null
            } 
            break;
    }
}

export default setData