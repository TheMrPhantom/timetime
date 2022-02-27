import { combineReducers } from "redux";
import CreateEventReducer from "./CreateEventReducer";

const allReducer = combineReducers({
    createEvent: CreateEventReducer
})

export default allReducer;