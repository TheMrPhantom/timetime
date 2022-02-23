import { Chip, Divider, Grow, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { addDay, addTime, deleteDay, deleteTime } from '../../Actions/DayTimeCreationAction';
import DayPicker from '../Common/DayPicker';
import PlusMinusButton from '../Common/PlusMinusButton';
import { dateToString, timeTupleToString } from '../Common/StaticFunctions';
import eventClasses from './event.module.scss';
import commonClasses from '../Common/common.module.scss';
import TimePick from '../Common/TimePicker';
import Spacer from '../Common/Spacer';
import { TransitionGroup } from 'react-transition-group';

type Props = {}

const CreateDaysAndTimes = (props: Props) => {
    const [createDay, setcreateDay] = useState<Date | null | string>(null)
    const [createStart, setcreateStart] = useState<Date | null | string>(null)
    const [createEnd, setcreateEnd] = useState<Date | null | string>(null)
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    const dispatch = useDispatch()

    const displayDateChips = () => {
        if (eventCreationInfos.days.length === 0) {
            return <Typography className={commonClasses.errorText}>Noch keine Tage hinzugefügt</Typography>
        } else {
            return (<TransitionGroup className={eventClasses.chipContainer}> {eventCreationInfos.days.map((day: Date) => {
                return (<Grow><div> <Chip
                    className={eventClasses.fitContentWidth}
                    key={day.toISOString()}
                    label={dateToString(day)}
                    variant="outlined"
                    onDelete={() => dispatch(deleteDay(day))} /></div></Grow>)
            })}</TransitionGroup>)
        }
    }
    const displayTimeChips = () => {
        if (eventCreationInfos.times.length === 0) {
            return <Typography className={commonClasses.errorText}>Noch keine Zeiten hinzugefügt</Typography>
        } else {
            return (<TransitionGroup className={eventClasses.chipContainer}> {eventCreationInfos.times.map((times: [Date, Date]) => {
                return (<Grow><div><Chip
                    className={eventClasses.fitContentWidth}
                    key={times[0].toISOString() + "time"}
                    label={timeTupleToString(times)}
                    variant="outlined"
                    onDelete={() => dispatch(deleteTime(times))} /></div></Grow>)
            })}</TransitionGroup>)
        }
    }

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <Typography variant="h5">Tage erstellen</Typography>
            <div className={eventClasses.createDayContainer}>
                <DayPicker label='Datum' date={createDay} onValueChange={setcreateDay} />
                <PlusMinusButton isRemove={false} onClick={() => {
                    setcreateDay(null);
                    dispatch(addDay(createDay as Date))
                }} />
            </div>
            <Typography variant="h6">Erstellte Tage</Typography>

            {displayDateChips()}

            <Spacer vertical={30} />
            <Divider />
            <Typography variant="h5">Uhrzeiten erstellen</Typography>
            <div className={eventClasses.createDayContainer}>
                <TimePick label='Von' date={createStart} onValueChange={setcreateStart} />
                <TimePick label='Bis' date={createEnd} onValueChange={setcreateEnd} />
                <PlusMinusButton isRemove={false} onClick={() => {
                    setcreateStart(null);
                    setcreateEnd(null)
                    dispatch(addTime([createStart as Date, createEnd as Date]))
                }} />
            </div>
            <Typography variant="h6">Erstellte Stunden</Typography>
            <div className={eventClasses.chipContainer}>
                {displayTimeChips()}
            </div>
        </Paper>
    )
}

export default CreateDaysAndTimes