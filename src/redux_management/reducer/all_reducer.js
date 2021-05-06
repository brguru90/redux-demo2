import reducer_1  from "./reducer1"
import reducer_2  from "./reducer2"
import {combineReducers} from "redux"

const allReducer=combineReducers({
    data_1:reducer_1,
    data_2:reducer_2
})
export default allReducer
