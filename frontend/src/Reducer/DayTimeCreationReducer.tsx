const initialState = {
    days: [],
    times: []
}

const reducer = (state = initialState, { type, payload }: { type: string | Date | null, payload: any }) => {
    var newState = { ...state, ...payload }
    switch (type) {
        case "ADD_DAY":
            if (newState.days.includes(payload.day)) {
                return newState
            }
            newState.days = [...newState.days, payload.day]
            return newState

        case "DELETE_DAY":
            newState.days = newState.days.filter((element: string) => element !== payload.day)
            return newState

        case "ADD_TIME":
            if (newState.time.includes(payload.time)) {
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