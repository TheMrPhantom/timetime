import { Button, Chip, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addDay, deleteDay } from '../../Actions/DayTimeCreationAction';
import DayPicker from '../Common/DayPicker';
import eventClasses from './event.module.scss';
type Props = {}

const CreateDaysAndTimes = (props: Props) => {
    const [createDay, setcreateDay] = useState<Date | null>(null)
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    const dispatch = useDispatch()

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <Typography variant="h5">Tage erstellen</Typography>
            <DayPicker label='Datum' date={createDay} onValueChange={setcreateDay} />
            <Button onClick={() => dispatch(addDay(createDay))}>Test</Button>
            <Typography variant="h6">Erstellte Tage</Typography>
            <div className={eventClasses.chipContainer}>
                {eventCreationInfos.days.map((day: Date) => {
                    return <Chip
                        className={eventClasses.fitContentWidth}
                        key={day.toISOString()}
                        label={day.getDay() + "." + day.getMonth() + "." + day.getFullYear()}
                        variant="outlined"
                        onDelete={() => dispatch(deleteDay(day))} />
                })}
            </div>
            <Divider />
            <Typography variant="h5">Uhrzeiten erstellen</Typography>

        </Paper>
    )
}

export default CreateDaysAndTimes