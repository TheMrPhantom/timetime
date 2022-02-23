import React from 'react'
import CombineDaysAndTimesItem from './CombineDaysAndTimesItem'
import styles from './event.module.scss';

type Props = {}

const CombineDaysAndTimes = (props: Props) => {
    return (
        <div className={styles.dateTimeCombineContainerOutter}>
            <CombineDaysAndTimesItem times={[{ time: "10:22", id: 19 }, { time: "12:22", id: 13 }, { time: "13:5", id: 12 }]} />
            <CombineDaysAndTimesItem times={[{ time: "10:22", id: 19 }, { time: "12:22", id: 13 }, { time: "13:5", id: 12 }]} />
            <CombineDaysAndTimesItem times={[{ time: "10:22", id: 19 }, { time: "12:22", id: 13 }, { time: "13:5", id: 12 }]} />
            <CombineDaysAndTimesItem times={[{ time: "10:22", id: 19 }, { time: "12:22", id: 13 }, { time: "13:5", id: 12 }]} />
            <CombineDaysAndTimesItem times={[{ time: "10:22", id: 19 }, { time: "12:22", id: 13 }, { time: "13:5", id: 12 }]} />
        </div>
    )
}

export default CombineDaysAndTimes