import { Button, Chip, Divider, Grow, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
import Texts from '../../texts.json';
import PaperHeadline from '../Common/PaperHeadline';
import { DayTimeCreationType } from '../../Reducer/DayTimeCreationReducer';

type Props = {
    back: () => void,
    next: () => void
}



const CreateDaysAndTimes = (props: Props) => {
    const [createDay, setcreateDay] = useState<Date | null | string>(null)
    const [createStart, setcreateStart] = useState<Date | null | string>(null)
    const [createEnd, setcreateEnd] = useState<Date | null | string>(null)
    const eventCreationInfos: DayTimeCreationType = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    const dispatch = useDispatch()
    const nextEnabled = (): boolean => {
        return eventCreationInfos.days.length !== 0 && eventCreationInfos.times.length !== 0
    }
    useEffect(() => {
        if (createStart !== null) {
            const createStartAny: any = createStart
            const s: Date = new Date(createStartAny)
            s.setHours(s.getHours() + 1)
            setcreateEnd(s)
        }
    }, [createStart])

    useEffect(() => {
        if (createDay !== null && !Number.isNaN(createDay.valueOf()) && new Date() < createDay) {
            dispatch(addDay(createDay as Date))
            setcreateDay(null);
        }
    }, [createDay, dispatch])

    const displayDateChips = () => {
        if (eventCreationInfos.days.length === 0) {
            return <Typography className={commonClasses.errorText}>Noch keine Tage hinzugefügt</Typography>
        }
        return (<TransitionGroup className={eventClasses.chipContainer}> {eventCreationInfos.days.map((day: Date) => {
            return (<Grow><div> <Chip
                className={eventClasses.fitContentWidth}
                key={day.toISOString()}
                label={dateToString(day)}
                variant="outlined"
                onDelete={() => dispatch(deleteDay(day))} /></div></Grow>)
        })}</TransitionGroup>)

    }
    const displayTimeChips = () => {
        if (eventCreationInfos.times.length === 0) {
            return <Typography className={commonClasses.errorText}>Noch keine Zeiten hinzugefügt</Typography>
        } else {
            return (<TransitionGroup className={eventClasses.chipContainer}> {eventCreationInfos.times.map((times: Array<Date>) => {
                return (<Grow><div><Chip
                    className={eventClasses.fitContentWidth}
                    key={times[0].toISOString() + "time"}
                    label={timeTupleToString(times)}
                    variant="outlined"
                    onDelete={() => dispatch(deleteTime([times[0], times[1]]))} /></div></Grow>)
            })}</TransitionGroup>)
        }
    }

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <PaperHeadline text="Tage und Uhrzeiten erstellen" />
            <Typography variant="h5">Tage hinzufügen</Typography>
            <div className={eventClasses.createDayContainer}>
                <DayPicker selectedDays={eventCreationInfos.days} label='Datum' date={createDay} onValueChange={setcreateDay} />

            </div>
            {displayDateChips()}
            <Spacer vertical={30} />
            <Divider />
            <Typography variant="h5">Uhrzeiten hinzufügen</Typography>
            <div className={eventClasses.createDayContainer}>
                <TimePick label='Von' date={createStart} onValueChange={setcreateStart} />
                <TimePick label='Bis' date={createEnd} onValueChange={setcreateEnd} />
                <PlusMinusButton isRemove={false} onClick={() => {
                    const start: any = createStart;
                    const end: any = createEnd;
                    if (new Date(start) > new Date(end)) {
                        const createStartAny: any = createStart
                        const s: Date = new Date(createStartAny)
                        s.setHours(s.getHours() + 1)
                        setcreateEnd(s)
                        return
                    }
                    setcreateStart(null);
                    setcreateEnd(null);
                    dispatch(addTime([createStart as Date, createEnd as Date]));
                }} />
            </div>
            <div className={eventClasses.chipContainer}>
                {displayTimeChips()}
            </div>
            <Spacer vertical={30} />
            <div className={eventClasses.informationButtonContainerDouble}>
                <Button onClick={props.back}>{Texts.BACK}</Button>
                <Button disabled={!nextEnabled()} variant='contained' onClick={props.next}>{Texts.NEXT}</Button>
            </div>

        </Paper>
    )
}

export default CreateDaysAndTimes