import { combineReducers } from "redux";
import DayTimeCreationReducer from "./DayTimeCreationReducer";
import EventCreationInformationReducer from "./EventCreationInformationReducer";

const allReducer = combineReducers({
    eventCreationInfo: EventCreationInformationReducer,
    dayTimeCreation: DayTimeCreationReducer
})

export default allReducer;