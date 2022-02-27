import { secureRandomNumber } from "../Components/Common/StaticFunctions"

export const addDayToEventCreation = (newDay: {
    day: Date,
    times: Array<Array<Date>>
}) => {
    return {
        type: "ADD_DAY_TO_EVENT_CREATION",
        payload: { ...newDay, id: secureRandomNumber() }
    }
}

export const removeDayFromEventCreation = (dayID: number) => {
    return {
        type: "REMOVE_DAY_FROM_EVENT_CREATION",
        payload: dayID
    }
}

export const setEventNameEventCreation = (name: string) => {
    return {
        type: "SET_EVENT_NAME_EVENT_CREATION",
        payload: name
    }
}

export const setEventPlaceEventCreation = (place: string) => {
    return {
        type: "SET_EVENT_PLACE_EVENT_CREATION",
        payload: place
    }
}

export const setEventInformationsEventCreation = (info: string) => {
    return {
        type: "SET_EVENT_INFO_EVENT_CREATION",
        payload: info
    }
}

export const setEventOwnerNameEventCreation = (name: string) => {
    return {
        type: "SET_EVENT_OWNER_NAME_EVENT_CREATION",
        payload: name
    }
}

export const setEventOwnerMailEventCreation = (mail: string) => {
    return {
        type: "SET_EVENT_OWNER_MAIL_EVENT_CREATION",
        payload: mail
    }
}

export const setSettingsOptionalEventCreation = (optional: boolean) => {
    return {
        type: "SET_EVENT_SETTINGS_OPTIONAL_EVENT_CREATION",
        payload: optional
    }
}
export const setSettingsHasMaxPartEventCreation = (hasMaxParticipants: boolean) => {
    return {
        type: "SET_EVENT_SETTINGS_HAS_MAX_PART_EVENT_CREATION",
        payload: hasMaxParticipants
    }
}
export const setSettingsMaxPartEventCreation = (maxParticipants: number) => {
    return {
        type: "SET_EVENT_SETTINGS_MAX_PART_EVENT_CREATION",
        payload: maxParticipants
    }
}
export const setSettingsOnlyOneEventCreation = (onlyOneOption: boolean) => {
    return {
        type: "SET_EVENT_SETTINGS_ONLY_ONE_EVENT_CREATION",
        payload: onlyOneOption
    }
}
export const setSettingsSecretEventCreation = (secretPoll: boolean) => {
    return {
        type: "SET_EVENT_SETTINGS_SECRET_EVENT_CREATION",
        payload: secretPoll
    }
}
export const setSettingsHasDeadlineEventCreation = (hasDeadline: boolean) => {
    return {
        type: "SET_EVENT_SETTINGS_HAS_DEADLINE_EVENT_CREATION",
        payload: hasDeadline
    }
}
export const setSettingsDeadlineEventCreation = (deadline: Date) => {
    return {
        type: "SET_EVENT_SETTINGS_DEADLINE_EVENT_CREATION",
        payload: deadline
    }
}
export const setSettingsSendResultEventCreation = (sendResult: boolean) => {
    return {
        type: "SET_EVENT_SETTINGS_SEND_RESULT_EVENT_CREATION",
        payload: sendResult
    }
}

