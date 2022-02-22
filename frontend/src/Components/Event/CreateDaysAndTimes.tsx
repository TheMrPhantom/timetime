import { Button, Chip, Divider, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addDay, deleteDay } from '../../Actions/DayTimeCreationAction';
import DayPicker from '../Common/DayPicker';
import PlusMinusButton from '../Common/PlusMinusButton';
import { dateToString } from '../Common/StaticFunctions';
import eventClasses from './event.module.scss';
import commonClasses from '../Common/common.module.scss';

type Props = {}

const CreateDaysAndTimes = (props: Props) => {
    const [createDay, setcreateDay] = useState<Date | null>(null)
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    const dispatch = useDispatch()

    const displayChips = () => {
        if (eventCreationInfos.days.length === 0) {
            return <Typography className={commonClasses.errorText}>Noch keine Tage hinzugefügt</Typography>
        } else {
            return eventCreationInfos.days.map((day: Date) => {
                return <Chip
                    className={eventClasses.fitContentWidth}
                    key={day.toISOString()}
                    label={dateToString(day)}
                    variant="outlined"
                    onDelete={() => dispatch(deleteDay(day))} />
            })
        }
    }

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <Typography variant="h5">Tage erstellen</Typography>
            <div className={eventClasses.createDayContainer}>
                <DayPicker label='Datum' date={createDay} onValueChange={setcreateDay} />
                <PlusMinusButton isRemove={false} onClick={() => {
                    setcreateDay(null);
                    dispatch(addDay(createDay))
                }} />
            </div>
            <Typography variant="h6">Erstellte Tage</Typography>
            <div className={eventClasses.chipContainer}>
                {displayChips()}
            </div>
            <Divider />
            <Typography variant="h5">Uhrzeiten erstellen</Typography>

        </Paper>
    )
}

export default CreateDaysAndTimes