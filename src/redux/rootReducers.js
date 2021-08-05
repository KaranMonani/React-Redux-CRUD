import { combineReducers } from "redux";
import userReducers from "./reducers";

const rootReducer = combineReducers({
    data: userReducers,
});

export default rootReducer;