import { dateToString } from "../Components/Common/StaticFunctions";

const initialState = {
    days: [],
    times: []
}

const reducer = (state = initialState, { type, payload }: { type: string | Date | null, payload: any }) => {
    var newState = { ...state, ...payload }
    switch (type) {
        case "ADD_DAY":
            var isContained = false;
            newState.days.forEach((value: Date) => isContained ||= dateToString(value) === dateToString(payload.day))
            if (isContained) {
                return newState
            }
            newState.days = [...newState.days, payload.day]
            return newState

        case "DELETE_DAY":
            newState.days = newState.days.filter((element: string) => element !== payload.day)
            return newState

        case "ADD_TIME":
            var isContained = false;
            newState.time.forEach((value: Date) => isContained ||= dateToString(value) === dateToString(payload.time))
            if (isContained) {
                return newState
            }
            newState.time = [...newState.time, payload.time]
            return newState

        case "DELETE_TIME":
            newState.times = newState.times.filter((element: string) => element !== payload.time)
            return newState

        case "RESET":
            return initialState

        default:
            return state
    }
}

export default reducer