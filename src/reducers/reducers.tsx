import { combineReducers } from "redux";
import completeReducer from "./completeReducers";
import incompleteReducer from "./incompleteReducer";
export default combineReducers({
    complete: completeReducer,
    incomplete: incompleteReducer
})