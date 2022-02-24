const initialState = {
    slots: Array<{ date: Date, start: Date, end: Date, id: number }>(...[]),
}
export type CombinedDayTimeType = {
    slots: Array<{ date: Date, start: Date, end: Date, id: number }>
}

const reducer = (state: CombinedDayTimeType = initialState, { type, payload }: { type: string, payload: any }) => {
    var newState = { ...state }
    switch (type) {
        case "ADD":
            newState.slots = newState.slots.filter((slot) => slot.id !== payload.slot.id)
            newState.slots = [...newState.slots, payload.slot]
            return newState
        case "REMOVE":
            newState.slots = newState.slots.filter((slot: { date: Date, start: Date, end: Date, id: number }) => slot.id !== payload.id)
            return newState
        case "RESET":
            return initialState

        default:
            return state
    }
}
export default reducer
