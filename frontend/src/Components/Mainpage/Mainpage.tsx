import React from 'react'
import Header from '../Header/Header'
import CreateEvent from "../Event/CreateEvent"
type Props = {}

const Mainpage = (props: Props) => {
    return (
        <>
            <Header open={false} />
            <CreateEvent />
        </>
    )
}

export default Mainpage