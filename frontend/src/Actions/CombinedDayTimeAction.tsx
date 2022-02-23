export const add = (slot: { date: Date, start: Date, end: Date, id: number }) => {
    return {
        type: "ADD",
        payload: { slot: slot }
    }
}

export const remove = (id: number) => {
    return {
        type: "REMOVE",
        payload: { id: id }
    }
}

