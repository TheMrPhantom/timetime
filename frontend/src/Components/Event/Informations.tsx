import { Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Texts from '../../texts.json'
import eventClasses from './event.module.scss';

type Props = {}

const Informations = (props: Props) => {
    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <TextField
                error
                id="event-name"
                label="Error"
                defaultValue="Hello World"
                variant="outlined"
            />
        </Paper>
    )
}

export default Informations