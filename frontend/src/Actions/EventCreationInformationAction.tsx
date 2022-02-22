export const setName = (name: string) => {
    return {
        type: "SET_NAME",
        payload: { name: name }
    }
}

export const setPlace = (place: string) => {
    return {
        type: "SET_PLACE",
        payload: { place: place }
    }
}

export const setInfos = (infos: string) => {
    return {
        type: "SET_INFOS",
        payload: { infos: infos }
    }
}