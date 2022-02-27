const getInitialDate = (): Date => {
    const date = new Date();
    date.setHours(date.getHours() + 24 * 7);
    return date;
}

const initialState: EventCreationType = {
    eventInformations: {
        name: "",
        place: "",
        informations: "",
        owner: {
            name: "",
            mail: ""
        }
    }, timeslots: {
        days: []
    }, settings: {
        optional: false,
        hasMaxParticipants: false,
        maxParticipants: 0,
        onlyOneOption: false,
        secretPoll: false,
        hasDeadline: false,
        deadline: getInitialDate(),
        sendResult: false
    }
}

export type EventCreationType = {
    eventInformations: {
        name: string,
        place: string,
        informations: string,
        owner: {
            name: string,
            mail: string
        }
    }, timeslots: {
        days: Array<{
            day: Date,
            times: Array<Array<Date>>,
            id: number
        }>
    },
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

const reducer = (state = initialState, { type, payload }: {
    type: string, payload: any | {
        day: Date,
        times: Array<Array<Date>>,
        id: number
    }
}) => {

    var newState = { ...state }
    switch (type) {
        case "ADD_DAY_TO_EVENT_CREATION":
            newState.timeslots.days.push(payload)
            return newState
        case "REMOVE_DAY_FROM_EVENT_CREATION":
            newState.timeslots.days = newState.timeslots.days.filter(element => {
                return element.id !== payload
            });
            return newState
        case "SET_EVENT_NAME_EVENT_CREATION":
            newState.eventInformations.name = payload
            return newState
        case "SET_EVENT_PLACE_EVENT_CREATION":
            newState.eventInformations.place = payload
            return newState
        case "SET_EVENT_INFO_EVENT_CREATION":
            newState.eventInformations.informations = payload
            return newState
        case "SET_EVENT_OWNER_NAME_EVENT_CREATION":
            newState.eventInformations.owner.name = payload
            return newState
        case "SET_EVENT_OWNER_MAIL_EVENT_CREATION":
            newState.eventInformations.owner.mail = payload
            return newState
        case "SET_EVENT_SETTINGS_OPTIONAL_EVENT_CREATION":
            newState.settings.optional = payload
            return newState
        case "SET_EVENT_SETTINGS_HAS_MAX_PART_EVENT_CREATION":
            newState.settings.hasMaxParticipants = payload
            return newState
        case "SET_EVENT_SETTINGS_MAX_PART_EVENT_CREATION":
            newState.settings.maxParticipants = payload
            return newState
        case "SET_EVENT_SETTINGS_ONLY_ONE_EVENT_CREATION":
            newState.settings.onlyOneOption = payload
            return newState
        case "SET_EVENT_SETTINGS_SECRET_EVENT_CREATION":
            newState.settings.secretPoll = payload
            return newState
        case "SET_EVENT_SETTINGS_HAS_DEADLINE_EVENT_CREATION":
            newState.settings.hasDeadline = payload
            return newState
        case "SET_EVENT_SETTINGS_DEADLINE_EVENT_CREATION":
            newState.settings.deadline = payload
            return newState
        case "SET_EVENT_SETTINGS_SEND_RESULT_EVENT_CREATION":
            newState.settings.sendResult = payload
            return newState

        default:
            return state
    }

}
export default reducer
