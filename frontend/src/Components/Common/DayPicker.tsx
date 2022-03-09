import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import deLocale from 'date-fns/locale/de';
import { Paper, TextField } from '@mui/material';
import styles from '../Common/common.module.scss';
import PickersDay from '@mui/lab/PickersDay';
import { dateToString } from './StaticFunctions';

type Props = {
    date: Date | string | null,
    label: string,
    selectedDays?: Date[]
    onValueChange: (value: Date | null) => void
}

const DayPicker = (props: Props) => {

    return (
        <Paper>
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale} >
            <StaticDatePicker
                openTo="day"
                label={props.label}
                value={props.date}
                renderDay={(day, selected, DayProps) => {
                    const inputArray: Array<string> = []
                    const currentDayString = dateToString(day)
                    props.selectedDays?.forEach((value) => inputArray.push(dateToString(value)))

                    if (inputArray.includes(currentDayString)) {
                        return <PickersDay {...DayProps} className={styles.pickerDay} />
                    }
                    return <PickersDay {...DayProps} />
                }}
                onChange={(newValue) => {
                    props.onValueChange(newValue as Date);
                }}
                renderInput={(params) => <TextField variant='outlined'{...params} className={styles.daypicker} error={props.date !== null && (props.date as Date) < new Date()} />}
            />
        </LocalizationProvider>
        </Paper>
    )
}

export default DayPicker