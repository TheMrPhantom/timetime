import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import deLocale from 'date-fns/locale/de';
import { TextField } from '@mui/material';
import styles from '../Common/common.module.scss';

type Props = {
    date: Date | string | null,
    label: string,
    onValueChange: (value: Date | null) => void
}

const DayPicker = (props: Props) => {

    const isDate = !Number.isNaN(props.date?.valueOf())

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale} >
            <DatePicker
                label={props.label}
                value={props.date}
                onChange={(newValue) => {
                    props.onValueChange(newValue as Date);
                }}
                renderInput={(params) => <TextField variant='outlined'{...params} className={styles.daypicker} error={!isDate || (props.date as Date)?.toISOString() === ""} />}
            />
        </LocalizationProvider>
    )
}

export default DayPicker