const initialState = {
    eventName: "",
    eventPlace: "",
    eventInfos: ""
}

const reducer = (state = initialState, { type, payload }: { type: string, payload: any }) => {
    var newState = { ...state, ...payload }
    switch (type) {
        case "SET_NAME":
            newState.eventName = payload.name
            return newState

        case "SET_PLACE":
            newState.eventPlace = payload.place
            return newState

        case "SET_INFOS":
            newState.eventInfos = payload.infos
            return newState

        case "RESET":
            return initialState

        default:
            return state
    }
}
export default reducer
