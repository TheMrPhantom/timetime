import React from 'react'
import Header from '../Header/Header'
import CreateEvent from "../Event/CreateEvent"
import { Route, Routes } from 'react-router-dom';
import Participate from '../Participation/Participate';
type Props = {}

const Mainpage = (props: Props) => {

    return (
        <>
            <Header open={false} />
            <Routes>
                <Route path="/create" element={<CreateEvent />} />
                <Route path="/poll" element={<Participate />} />
            </Routes>
        </>
    )
}

export default Mainpage