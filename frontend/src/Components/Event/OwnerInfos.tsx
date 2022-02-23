import { InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Texts from '../../texts.json'
import styles from './event.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
type Props = {}

const OwnerInfos = (props: Props) => {
    return (
        <Paper className={styles.ownerInfosContainer}>
            <Typography variant="h5">
                Wer bist du?
            </Typography>
            <TextField
                error={false}
                id="event-name"
                label={Texts.NAME}
                variant="outlined"
                className={styles.textFields}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                error={false}
                id="event-name"
                label={Texts.E_MAIL}
                variant="outlined"
                className={styles.textFields}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <EmailIcon />
                        </InputAdornment>
                    ),
                }}
            />

        </Paper>
    )
}

export default OwnerInfos