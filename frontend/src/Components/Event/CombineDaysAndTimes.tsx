import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { secureRandomNumber } from '../Common/StaticFunctions';
import CombineDaysAndTimesItem from './CombineDaysAndTimesItem'
import styles from './event.module.scss';
import Texts from '../../texts.json';
import eventClasses from './event.module.scss';
import { Button } from '@mui/material';

type Props = {
    back: () => void,
    next: () => void
}

const CombineDaysAndTimes = (props: Props) => {
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    return (
        <div className={styles.dateTimeCombineContainerOutter}>
            {eventCreationInfos.days.map((day: Date) => {
                const timesArry: Array<{ time: Array<Date>, id: number }> = []
                eventCreationInfos.times.forEach(((times: Array<Date>) => {
                    timesArry.push({ time: times, id: secureRandomNumber() })
                }))
                return <CombineDaysAndTimesItem date={day} times={timesArry} />
            })}
            <div className={eventClasses.informationButtonContainerDouble}>
                <Button onClick={props.back}>{Texts.BACK}</Button>
                <Button onClick={props.next}>{Texts.NEXT}</Button>
            </div>
        </div>
    )
}

export default CombineDaysAndTimes