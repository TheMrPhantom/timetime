import { dateToString, timeTupleToString } from "../Components/Common/StaticFunctions";

const initialState = {
    days: Array<Date>(...[]),
    times: Array<Array<Date>>(...[])
}

const reducer = (state = initialState, { type, payload }: { type: string | Date | null, payload: any }) => {
    var newState = { ...state }
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
            newState.days = newState.days.filter((element: Date) => dateToString(element) !== dateToString(payload.day))
            return newState

        case "ADD_TIME":
            console.log("paaay" + timeTupleToString(payload.times))
            console.log(newState)
            var isContained = false;

            newState.times.forEach((value: Array<Date>) => {
                isContained ||= timeTupleToString(value) === timeTupleToString(payload.times)
            })
            if (isContained) {
                return newState
            }
            console.log(newState.times.concat([[payload.times[0], payload.times[1]]]))
            newState.times = newState.times.concat([[payload.times[0], payload.times[1]]])
            console.log(newState)
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