const initialState = {
    settings: {
        optional: false,
        hasMaxParticipants: false,
        maxParticipants: -1,
        onlyOneOption: false,
        secretPoll: false,
        hasDeadline: false,
        deadline: new Date(2000, 0),
        sendResult: false
    },
}
export type SettingsType = {
    settings: {
        optional: boolean,
        hasMaxParticipants: boolean,
        maxParticipants: number,
        onlyOneOption: boolean,
        secretPoll: boolean,
        hasDeadline: boolean
        deadline: Date,
        sendResult: boolean
    }
}
const reducer = (state = initialState, { type, payload }: { type: string, payload: SettingsType }) => {
    var newState = { ...state }
    switch (type) {
        case "UPDATE":
            newState.settings = payload.settings
            return newState
        case "RESET":
            return initialState

        default:
            return state
    }
}
export default reducer
