import { Button, Collapse, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import DayPicker from '../Common/DayPicker'
import styles from './event.module.scss'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Spacer from '../Common/Spacer';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { EventCreationType } from '../../Reducer/CreateEventReducer';
import { addDayToEventCreation, removeDayFromEventCreation } from '../../Actions/CreateEventAction';
import EventIcon from '@mui/icons-material/Event';
import { dateToString, timeTupleToString } from '../Common/StaticFunctions';
import Texts from '../../texts.json'
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';

type Props = {
    back: () => void,
    next: () => void
}

const CreateDaysAndTimes = (props: Props) => {

    const [selectedDaysAmount, setselectedDaysAmount] = useState(0)
    const [selectedTimes, setselectedTimes] = useState([-1, -1])
    const [date, setdate] = useState<Date | null>(null)
    const [times, settimes] = useState<Array<Array<number>>>([])
    const [mouseDownDay, setmouseDownDay] = useState(-1)
    const state: EventCreationType = useSelector((state: RootStateOrAny) => state.createEvent);
    const dispatch = useDispatch()

    const selectDay = (id: number, hover: boolean) => {
        var newSelectedDaysAmount = selectedDaysAmount
        if (!hover) {
            newSelectedDaysAmount = ((selectedDaysAmount) % 2) + 1
        }

        setselectedDaysAmount(newSelectedDaysAmount)
        if (newSelectedDaysAmount === 1) {
            setselectedTimes([id, -1])
        } else {
            if (selectedTimes[0] <= id && selectedTimes[0] !== -1 && id !== -1) {

                const temp_times = times;
                const to_add = [selectedTimes[0], id];
                if (!temp_times.some((element) => element[0] === to_add[0] && element[1] === to_add[1])) {
                    temp_times.push(to_add)
                    settimes(temp_times)
                } else {
                    alert("Zeit bereits hinzugefügt")
                }

                setselectedTimes([-1, -1])
                setselectedDaysAmount(0)
            } else {
                setselectedTimes([id, -1])
                setselectedDaysAmount(1)
            }
        }
    }

    const getSelectedClasses = (index: number): string => {
        var dayClasses = " "
        if (selectedDaysAmount === 1 && selectedTimes[0] === index) {
            dayClasses += styles.selectionStart
        } else if (selectedDaysAmount === 2) {
            if (selectedTimes[0] === index) {
                dayClasses += styles.selectionStart
            }
            if (selectedTimes[0] < index && index < selectedTimes[1]) {
                dayClasses += " " + styles.selection
            }
            if (selectedTimes[1] === index) {
                dayClasses += " " + styles.selectionEnd
            }
        }

        times.forEach((time) => {
            if (time[0] === index) {
                dayClasses += " " + styles.selectionStart
            }
            if (time[0] < index && index < time[1]) {
                dayClasses += " " + styles.selection
            }
            if (time[1] === index) {
                dayClasses += " " + styles.selectionEnd
            }
        })

        if (index % 4 === 3) {
            dayClasses += " " + styles.hour
        }
        return dayClasses
    }

    const getLegend = (offset: number): JSX.Element[] => {
        const legend = []
        for (let i = 0; i < 12; i++) {
            legend.push(
                <div className={styles.legendItem}>
                    <Typography variant='button'>{i + offset} Uhr</Typography>
                </div>
            )
        }
        return legend
    }

    const createDaySlider = () => {
        const firstRow = [];

        firstRow.push(<div className={styles.day + " " + styles.first + " " + getSelectedClasses(0)}
            onMouseDown={(value) => handleMouseDown(0)}
            onMouseUp={(value) => handleMouseUp(0)}
            onMouseOver={(value) => handleMouseOver(0)}
        >
        </div >)
        for (let i = 0; i < 24 * 2 - 1; i++) {

            firstRow.push(<div
                className={styles.day + getSelectedClasses(i + 1)}
                onMouseDown={(value) => handleMouseDown(i + 1)}
                onMouseUp={(value) => handleMouseUp(i + 1)}
                onMouseOver={(value) => handleMouseOver(i + 1)}
            >
            </div >)
        }

        const secondRow = [];

        secondRow.push(<div className={styles.day + " " + styles.first + " " + getSelectedClasses(48)}
            onMouseDown={(value) => handleMouseDown(48)}
            onMouseUp={(value) => handleMouseUp(48)}
            onMouseOver={(value) => handleMouseOver(48)}
        >

        </div >)
        for (let i = 45; i < 23 * 4; i++) {

            secondRow.push(
                <div
                    className={styles.day + getSelectedClasses(i + 4)}
                    onMouseDown={(value) => handleMouseDown(i + 4)}
                    onMouseUp={(value) => handleMouseUp(i + 4)}
                    onMouseOver={(value) => handleMouseOver(i + 4)}
                >
                </div >)
        }

        const firstLegend = getLegend(0)

        const secondLegend = getLegend(12)

        return <div className={styles.outterTableContainer} onMouseLeave={() => { handleMouseLeave() }}>
            <div className={styles.innerTableContainer}>
                <div className={styles.legendContainer}>
                    {firstLegend}
                </div>
                <div className={styles.daysContainer}>
                    {firstRow}
                </div>
            </div>
            <div className={styles.innerTableContainer}>
                <div className={styles.legendContainer}>
                    {secondLegend}
                </div>
                <div className={styles.daysContainer}>
                    {secondRow}
                </div>
            </div>


        </div>
    }

    const timeIDToTime = (timeID: number, isEnd: boolean): { hour: number, minute: number } => {
        if (isEnd) {
            timeID += 1
        }
        const hour: number = Math.floor(timeID / 4);
        const rest: number = (timeID / 4) - hour;
        const minute: number = rest * 60
        return { hour: hour, minute: minute }
    }

    const idTimeToString = (times: Array<number>): string => {
        const start = timeIDToTime(times[0], false)
        const end = timeIDToTime(times[1], true)

        var output = ""
        output += start.hour + ":" + start.minute.toString().padStart(2, '0')
        output += " - "
        output += end.hour + ":" + end.minute.toString().padStart(2, '0')
        output += " Uhr"

        return output
    }

    const displayTimesList = () => {
        if (times.length > 0) {
            return <>
                <List>
                    <TransitionGroup>
                        {times.sort((a, b) => {
                            const timeA = timeIDToTime(a[0], false)
                            const timeB = timeIDToTime(b[0], false)
                            return (timeA.hour * 60 + timeA.minute) - (timeB.hour * 60 + timeB.minute)
                        }).map((time) => {
                            return (<Collapse key={time.toString() + "collapse"}>
                                <ListItem secondaryAction={
                                    <IconButton edge="end" onClick={() => {
                                        removeTimeslot(time)
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                }>
                                    <ListItemIcon>
                                        <AccessTimeIcon />
                                    </ListItemIcon>
                                    {idTimeToString(time)}

                                </ListItem></Collapse>)
                        })}
                    </TransitionGroup>
                </List>
                <Button fullWidth onClick={() => { settimes([]); setselectedTimes([-1, -1]); setselectedDaysAmount(0) }} disabled={times.length === 0}>Zeiten Zurücksetzen</Button>
            </>
        } else {
            return <><Typography>Noch keine Zeiten </Typography><Spacer vertical={30} /></>
        }
    }

    const addDayToState = () => {
        if (date !== null && new Date() < date && times.length > 0) {
            const toAdd: {
                day: Date;
                times: Date[][];
            } = {
                day: date,
                times: []
            }
            times.forEach((timeSlot) => {
                const start = timeIDToTime(timeSlot[0], false)
                const end = timeIDToTime(timeSlot[1], true)
                const startDate = new Date()
                const endDate = new Date()

                startDate.setHours(start.hour)
                startDate.setMinutes(start.minute)
                endDate.setHours(end.hour)
                endDate.setMinutes(end.minute)

                toAdd.times.push([startDate, endDate])
            })
            dispatch(addDayToEventCreation(toAdd))
            setdate(null)
        } else {
            alert("Datum ist in der vergangenheit oder keine Zeiten angegeben")
        }
    }

    const displayAddedSlots = () => {
        if (state.timeslots.days.length > 0) {
            return <>
                <List >
                    <TransitionGroup>
                        {state.timeslots.days.map((time) => {
                            return (<Collapse key={time.id + "collapse"}>
                                <ListItem className={styles.addedSlotListItem} secondaryAction={
                                    <IconButton edge="end" onClick={() => {
                                        dispatch(removeDayFromEventCreation(time.id))
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                }>
                                    <ListItemIcon>
                                        <EventIcon />
                                    </ListItemIcon>
                                    <ListItemText secondary={time.times.map((value, index) => {
                                        if (index < time.times.length - 1) {
                                            return timeTupleToString(value) + "  /  "
                                        } else {
                                            return timeTupleToString(value)
                                        }
                                    })} primary={dateToString(time.day)} />


                                </ListItem></Collapse>)
                        })}
                    </TransitionGroup>
                </List>
            </>
        } else {
            return <><Typography>Noch nichts hinzugefügt</Typography><Spacer vertical={30} /></>
        }
    }

    const nextEnabled = (): boolean => {
        return state.timeslots.days.length > 0
    }

    const removeTimeslot = (slot: number[]) => {
        settimes(times.filter((element) => {
            return element[0] !== slot[0] && element[1] !== slot[1]
        }))
    }

    const handleMouseUp = (id: number) => {
        if (mouseDownDay !== id) {
            selectDay(id, true)
        }
        setmouseDownDay(-1)
    }

    const handleMouseDown = (id: number) => {
        selectDay(id, false)
        setmouseDownDay(id)
    }

    const handleMouseOver = (id: number) => {
        if (mouseDownDay !== -1 && selectedTimes[0] !== -1) {
            if (mouseDownDay !== id) {
                setselectedTimes([selectedTimes[0], id])
                setselectedDaysAmount(2)
            } else {
                setselectedTimes([selectedTimes[0], -1])
                setselectedDaysAmount(1)
            }
        }
    }

    const handleMouseLeave = () => {
        if (mouseDownDay !== -1 && selectedTimes[0] !== -1) {
            setselectedTimes([selectedTimes[0], -1])
            setselectedDaysAmount(1)
            setmouseDownDay(-1)
        }
    }

    return (
        <Paper elevation={2} className={styles.stepperPaper}>
            <div className={styles.timeFlex}>
                <div className={styles.leftTimesContainer}>
                    <Typography variant='h6'>Tag</Typography>

                    <DayPicker label="Datum" date={date} onValueChange={setdate} />

                    <Typography variant='h6'>Zeiten</Typography>
                    <div className={styles.timeContainer}>
                        {displayTimesList()}

                    </div>
                    <Divider style={{ width: "100%" }} />
                    <Button variant='contained' fullWidth onClick={() => addDayToState()} disabled={times.length === 0 || date === null || date < new Date()}>Tag Hinzufügen</Button>

                </div>
                {createDaySlider()}
            </div>
            <Divider />
            <Typography variant='h6'>Zusammenfassung</Typography>
            {displayAddedSlots()}
            <Divider />
            <div className={styles.informationButtonContainerDouble}>
                <Button onClick={props.back}>{Texts.BACK}</Button>
                <Button disabled={!nextEnabled()} variant='contained' onClick={props.next}>{Texts.NEXT}</Button>
            </div>

        </Paper >
    )
}

export default CreateDaysAndTimes