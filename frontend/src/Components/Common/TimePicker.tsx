import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import deLocale from 'date-fns/locale/de';
import { TextField } from '@mui/material';
import styles from '../Common/common.module.scss';
import { TimePicker } from '@mui/lab';

type Props = {
    date: Date | string | null,
    label: string,
    onValueChange: (value: Date | null) => void
}

const TimePick = (props: Props) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale} >
            <TimePicker
                label={props.label}
                value={props.date}
                onChange={(newValue) => {
                    if (newValue !== null && !Number.isNaN(newValue?.valueOf())) {
                        props.onValueChange(newValue as Date);
                    }
                }}
                renderInput={(params) => <TextField variant='outlined'{...params} className={styles.daypicker} error={(props.date as Date)?.toISOString() === ""} />}
            />
        </LocalizationProvider>
    )
}

export default TimePick