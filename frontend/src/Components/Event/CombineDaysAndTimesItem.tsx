import React, { useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dateToString, secureRandomNumber, timeTupleToString } from '../Common/StaticFunctions';
import { Button, Chip, Divider, Grow } from '@mui/material';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { CombinedDayTimeType } from '../../Reducer/CombinedDayTimeReducer';
import styles from './event.module.scss'
import Spacer from '../Common/Spacer';
import { TransitionGroup } from 'react-transition-group';
import { DayTimeCreationType } from '../../Reducer/DayTimeCreationReducer';
import { add, remove } from '../../Actions/CombinedDayTimeAction';

type Props = {
    date: Date
    expanded?: boolean
}

const getTimeStringsArray = (inp: Array<Array<Date>>): Array<{ text: string, id: number, start: Date, end: Date }> => {
    const output: Array<{ text: string, id: number, start: Date, end: Date }> = []
    inp.forEach((value) => {
        output.push({ text: timeTupleToString(value), id: secureRandomNumber(), start: value[0], end: value[1] })
    })
    return output
}

const CombineDaysAndTimesItem = (props: Props) => {
    const allSlots: DayTimeCreationType = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    const usedSlots: CombinedDayTimeType = useSelector((state: RootStateOrAny) => state.combinedDayTime);
    const dispatch = useDispatch()

    useEffect(() => {
        getTimeStringsArray(allSlots.times).forEach((value) => {
            addSlotToUsed(value)
        })
    }, [])


    const addSlotToUsed = (slot: {
        text: string;
        id: number;
        start: Date;
        end: Date;
    }) => {
        var isAlreadyAdded = false;
        usedSlots.slots.forEach((value) => {
            isAlreadyAdded = isAlreadyAdded || (slot.start === value.start && slot.end === value.end && props.date === value.date)
        })
        if (!isAlreadyAdded) {
            dispatch(add({ date: props.date, start: slot.start, end: slot.end, id: slot.id })
            )
        }
    }

    const displayTimeChipsSuggestion = () => {
        return (<TransitionGroup className={styles.accordionChipContainer}> {getTimeStringsArray(allSlots.times).map((slot) => {
            return (<Grow>
                <div>
                    <Chip
                        className={styles.fitContentWidth}
                        key={slot.id}
                        label={slot.text}
                        variant="outlined"
                        onClick={() => {
                            addSlotToUsed(slot)
                        }
                        }
                    />
                </div>
            </Grow>)
        })}</TransitionGroup>)
    }

    const displayUsedTime = () => {
        return (<TransitionGroup className={styles.accordionChipContainer}> {usedSlots.slots.map((slot) => {
            if (props.date !== slot.date) {
                return <></>
            }
            return (<Grow>
                <div>
                    <Chip
                        className={styles.fitContentWidth}
                        key={slot.id}
                        label={timeTupleToString([slot.start, slot.end])}
                        variant="outlined"
                        onDelete={() => dispatch(remove(slot.id))} />
                </div>
            </Grow>)
        })}</TransitionGroup>)
    }

    const displayUsedTimeHeader = () => {
        return (<div className={styles.accordionHeaderDivInner}> {usedSlots.slots.map((slot) => {
            if (props.date !== slot.date) {
                return <></>
            }
            return (<Typography variant='caption'>{timeTupleToString([slot.start, slot.end])}</Typography>)
        })}</div>)
    }

    return (
        <Accordion className={styles.accordion} defaultExpanded={props.expanded}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <div className={styles.accordionHeaderDiv}>
                    <Typography variant='h6'>{dateToString(props.date)}</Typography>
                    {displayUsedTimeHeader()}
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    In Verwendung
                </Typography>
                {displayUsedTime()}
                <Divider />
                <Spacer vertical={10} />
                <div className={styles.accordionDetailsHeader}>
                    <Typography variant='h6'>
                        Vorschläge
                    </Typography>
                    <Button variant='outlined' onClick={() => {
                        getTimeStringsArray(allSlots.times).forEach((slot) => {
                            addSlotToUsed(slot)
                        })
                    }}>
                        Alle Zeiten hinzufügen</Button>
                </div>
                {displayTimeChipsSuggestion()}
            </AccordionDetails>
        </Accordion>
    )
}

export default CombineDaysAndTimesItem