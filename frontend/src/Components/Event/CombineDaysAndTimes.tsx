import React from 'react'
import { RootStateOrAny, useSelector } from 'react-redux';
import { secureRandomNumber } from '../Common/StaticFunctions';
import CombineDaysAndTimesItem from './CombineDaysAndTimesItem';
import styles from './event.module.scss';
import Texts from '../../texts.json';
import eventClasses from './event.module.scss';
import { Button, Paper } from '@mui/material';
import Spacer from '../Common/Spacer';

import { CombinedDayTimeType } from '../../Reducer/CombinedDayTimeReducer';
import PaperHeadline from '../Common/PaperHeadline';

type Props = {
    back: () => void,
    next: () => void
}

const CombineDaysAndTimes = (props: Props) => {
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.dayTimeCreation);
    const usedSlots: CombinedDayTimeType = useSelector((state: RootStateOrAny) => state.combinedDayTime);

    const nextEnabled = (): boolean => {
        return usedSlots.slots.length > 0
    }

    return (
        <Paper className={styles.combinedDayTimeContainer}>
            <PaperHeadline text="Kombiniere Tage und Zeiten" />
            <Spacer vertical={30} />
            <div className={styles.dateTimeCombineContainerOutter}>
                {eventCreationInfos.days.map((day: Date) => {
                    const timesArry: Array<{ time: Array<Date>, id: number }> = []
                    eventCreationInfos.times.forEach(((times: Array<Date>) => {
                        timesArry.push({ time: times, id: secureRandomNumber() })
                    }))
                    return <CombineDaysAndTimesItem date={day} />
                })}

            </div>
            <Spacer vertical={30} />
            <div className={eventClasses.informationButtonContainerDouble}>
                <Button onClick={props.back}>{Texts.BACK}</Button>
                <Button variant='contained' disabled={!nextEnabled()} onClick={props.next}>{Texts.NEXT}</Button>
            </div>
        </Paper>
    )
}

export default CombineDaysAndTimes