const initialState = {
    owner: {
        name: "",
        mail: ""
    },
}
export type OwnerType = {
    owner: {
        name: string,
        mail: string
    }
}
const reducer = (state = initialState, { type, payload }: { type: string, payload: OwnerType }) => {
    var newState = { ...state }
    switch (type) {
        case "UPDATE_OWNER":
            newState.owner = payload.owner
            return newState
        case "RESET_OWNER":
            return initialState

        default:
            return state
    }
}
export default reducer
