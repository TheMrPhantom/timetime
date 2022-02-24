import { dateToString, timeTupleToString } from "../Components/Common/StaticFunctions";

const initialState = {
    days: Array<Date>(...[]),
    times: Array<Array<Date>>(...[])
}

export type DayTimeCreationType = {
    days: Array<Date>,
    times: Array<Array<Date>>
}

const reducer = (state: DayTimeCreationType = initialState, { type, payload }: { type: string | Date | null, payload: any }) => {
    var newState = { ...state }
    var isContained = false;
    switch (type) {
        case "ADD_DAY":

            newState.days.forEach((value: Date) => isContained ||= dateToString(value) === dateToString(payload.day))
            if (isContained) {
                return newState
            }
            newState.days = [...newState.days, payload.day]
            return newState

        case "DELETE_DAY":
            newState.days = newState.days.filter((element: Date) => dateToString(element) !== dateToString(payload.day))
            return newState

        case "ADD_TIME":
            newState.times.forEach((value: Array<Date>) => {
                isContained ||= timeTupleToString(value) === timeTupleToString(payload.times)
            })
            if (isContained) {
                return newState
            }
            newState.times = newState.times.concat([[payload.times[0], payload.times[1]]])

            return newState

        case "DELETE_TIME":
            newState.times = newState.times.filter((element: Array<Date>) => timeTupleToString(element) !== timeTupleToString(payload.times))
            return newState

        case "RESET":
            return initialState

        default:
            return state
    }
}

export default reducer