import { OwnerType } from "../Reducer/EventOwnerReducer"

export const setOwner = (settings: OwnerType) => {
    return {
        type: "UPDATE_OWNER",
        payload: settings
    }
}

export const resetOwner = () => {
    return {
        type: "RESET_OWNER",
        payload: {}
    }
}

