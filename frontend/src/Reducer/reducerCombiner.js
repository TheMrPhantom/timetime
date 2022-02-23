import { combineReducers } from "redux";
import DayTimeCreationReducer from "./DayTimeCreationReducer";
import EventCreationInformationReducer from "./EventCreationInformationReducer";
import CombinedDayTimeReducer from "./CombinedDayTimeReducer";
import EventSettingsReducer from "./EventSettingsReducer";

const allReducer = combineReducers({
    eventCreationInfo: EventCreationInformationReducer,
    dayTimeCreation: DayTimeCreationReducer,
    combinedDayTime: CombinedDayTimeReducer,
    eventSettings: EventSettingsReducer
})

export default allReducer;