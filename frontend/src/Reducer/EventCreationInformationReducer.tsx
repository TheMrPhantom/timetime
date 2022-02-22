const initialState = {
    eventName: "",
    eventPlace: "",
    eventInfos: ""
}

export default (state = initialState, { type, payload }: { type: string, payload: any }) => {
    switch (type) {
        case "SET_NAME":
            var newState = { ...state, ...payload }
            newState.eventName = payload.name
            return newState
        case "SET_PLACE":
            var newState = { ...state, ...payload }
            newState.eventPlace = payload.place
            return newState
        case "SET_INFOS":
            var newState = { ...state, ...payload }
            newState.eventInfos = payload.infos
            return newState
        case "RESET":
            return initialState
        default:
            return state
    }
}
