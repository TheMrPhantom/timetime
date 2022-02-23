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

export const addTime = (times: [Date | null, Date | null]) => {
    return {
        type: "ADD_TIME",
        payload: { times: times }
    }
}

export const deleteTime = (times: [Date | null, Date | null]) => {
    return {
        type: "DELETE_TIME",
        payload: { times: times }
    }
}