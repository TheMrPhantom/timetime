import { combineReducers } from "redux";
import DayTimeCreationReducer from "./DayTimeCreationReducer";
import EventCreationInformationReducer from "./EventCreationInformationReducer";
import CombinedDayTimeReducer from "./CombinedDayTimeReducer";

const allReducer = combineReducers({
    eventCreationInfo: EventCreationInformationReducer,
    dayTimeCreation: DayTimeCreationReducer,
    combinedDayTime: CombinedDayTimeReducer
})

export default allReducer;