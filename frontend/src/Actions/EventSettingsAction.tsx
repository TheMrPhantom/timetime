import { SettingsType } from "../Reducer/EventSettingsReducer"

export const setSettings = (settings: SettingsType) => {
    return {
        type: "UPDATE",
        payload: settings
    }
}

export const resetSettings = (id: number) => {
    return {
        type: "RESET",
        payload: { id: id }
    }
}

