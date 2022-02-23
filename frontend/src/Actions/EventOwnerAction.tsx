import { OwnerType } from "../Reducer/EventOwnerReducer"

export const setOwner = (settings: OwnerType) => {
    return {
        type: "UPDATE",
        payload: settings
    }
}

export const resetOwner = () => {
    return {
        type: "RESET",
        payload: {}
    }
}

