import React, { useState } from 'react'
import Header from '../Header/Header'
import CreateEvent from "../Event/CreateEvent"
type Props = {}

const Mainpage = (props: Props) => {
    const [open, setopen] = useState(false)
    return (
        <>
            <Header open={open} />
            <CreateEvent />
        </>
    )
}

export default Mainpage