import { Button, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material'
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

type Props = {
    back: () => void,
    next: () => void
}

const CreateDaysAndTimes = (props: Props) => {

    const [selectedDaysAmount, setselectedDaysAmount] = useState(0)
    const [selectedTimes, setselectedTimes] = useState([-1, -1])
    const [date, setdate] = useState<Date | null>(null)
    const [times, settimes] = useState<Array<Array<number>>>([])
    const state: EventCreationType = useSelector((state: RootStateOrAny) => state.createEvent);
    const dispatch = useDispatch()

    const selectDay = (id: number) => {
        const newSelectedDaysAmount = ((selectedDaysAmount) % 2) + 1
        setselectedDaysAmount(newSelectedDaysAmount)
        if (newSelectedDaysAmount === 1) {
            setselectedTimes([id, -1])
        } else {
            if (selectedTimes[0] <= id) {

                const temp_times = times;
                temp_times.push([selectedTimes[0], id])

                settimes(temp_times)
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
            onClick={(value) => selectDay(0)} >

        </div >)
        for (let i = 0; i < 24 * 2 - 1; i++) {

            firstRow.push(<div
                className={styles.day + getSelectedClasses(i + 1)}
                onClick={(value) => { selectDay(i + 1) }}
            >
            </div >)
        }

        const secondRow = [];

        secondRow.push(<div className={styles.day + " " + styles.first + " " + getSelectedClasses(48)}
            onClick={(value) => selectDay(48)} >

        </div >)
        for (let i = 45; i < 23 * 4; i++) {

            secondRow.push(
                <div
                    className={styles.day + getSelectedClasses(i + 4)}
                    onClick={(value) => { selectDay(i + 4) }}
                >
                </div >)
        }

        const firstLegend = getLegend(0)

        const secondLegend = getLegend(12)

        return <div className={styles.outterTableContainer}>
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

    const timeIDToTime = (timeID: number): { hour: number, minute: number } => {
        const hour: number = Math.floor(timeID / 4);
        const rest: number = (timeID / 4) - hour;
        const minute: number = rest * 60
        return { hour: hour, minute: minute }
    }

    const idTimeToString = (times: Array<number>): string => {
        const start = timeIDToTime(times[0])
        const end = timeIDToTime(times[1])

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
                    {times.map((time) => {
                        return (
                            <ListItem >
                                <ListItemIcon>
                                    <AccessTimeIcon />
                                </ListItemIcon>
                                {idTimeToString(time)}
                            </ListItem>)
                    })}
                </List>
                <Button fullWidth onClick={() => { settimes([]); setselectedTimes([-1, -1]) }} disabled={times.length === 0}>Zeiten Zurücksetzen</Button>
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
                const start = timeIDToTime(timeSlot[0])
                const end = timeIDToTime(timeSlot[1])
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
            settimes([])
            setselectedDaysAmount(0)
            setselectedTimes([-1, -1])
        } else {
            alert("Datum ist in der vergangenheit oder keine Zeiten angegeben")
        }
    }

    const displayAddedSlots = () => {
        if (state.timeslots.days.length > 0) {
            return <>
                <List >
                    {state.timeslots.days.map((time) => {
                        return (
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


                            </ListItem>)
                    })}
                </List>
            </>
        } else {
            return <><Typography>Noch nichts hinzugefügt</Typography><Spacer vertical={30} /></>
        }
    }

    const nextEnabled = (): boolean => {
        return state.timeslots.days.length > 0
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
                    <Button variant='contained' fullWidth onClick={() => addDayToState()} disabled={times.length === 0}>Tag Hinzufügen</Button>

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