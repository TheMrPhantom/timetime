import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import deLocale from 'date-fns/locale/de';
import { TextField } from '@mui/material';
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

    const isDate = !Number.isNaN(props.date?.valueOf())
    console.log(props.selectedDays)
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale} >
            <DatePicker
                label={props.label}
                value={props.date}
                renderDay={(day, selected, DayProps) => {
                    const inputArray: Array<string> = []
                    const currentDayString = dateToString(day)
                    props.selectedDays?.forEach((value) => inputArray.push(dateToString(value)))
                    console.log(inputArray)
                    console.log(currentDayString)
                    console.log(inputArray.includes(currentDayString))
                    if (inputArray.includes(currentDayString)) {
                        return <PickersDay {...DayProps} className={styles.pickerDay} />
                    }
                    return <PickersDay {...DayProps} />
                }}
                onChange={(newValue) => {
                    props.onValueChange(newValue as Date);
                }}
                renderInput={(params) => <TextField variant='outlined'{...params} className={styles.daypicker} error={!isDate || (props.date as Date)?.toISOString() === ""} />}
            />
        </LocalizationProvider>
    )
}

export default DayPicker