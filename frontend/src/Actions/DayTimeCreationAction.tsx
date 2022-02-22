export const addDay = (day: Date | null) => {
    return {
        type: day !== null ? "ADD_DAY" : "",
        payload: { day: day }
    }
}

export const deleteDay = (day: Date | null) => {
    return {
        type: day !== null ? "DELETE_DAY" : "",
        payload: { day: day }
    }
}

export const dddTime = (time: Date | null) => {
    return {
        type: "ADD_TIME",
        payload: { time: time }
    }
}

export const deleteTime = (time: Date | null) => {
    return {
        type: "DELETE_TIME",
        payload: { time: time }
    }
}