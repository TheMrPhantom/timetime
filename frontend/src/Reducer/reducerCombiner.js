import { combineReducers } from "redux";
import EventCreationInformationReducer from "./EventCreationInformationReducer";

const allReducer = combineReducers({ eventCreationInfo: EventCreationInformationReducer })

export default allReducer;