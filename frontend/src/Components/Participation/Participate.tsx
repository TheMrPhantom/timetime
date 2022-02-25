import React from 'react'
import ParticipationSlotCard from './ParticipationSlotCard'
import styles from './participate.module.scss'
import { Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import pstyles from './participate.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type Props = {}

const Participate = (props: Props) => {
    return (
        <div className={styles.participatePageContainer}>
            <Typography variant='h4'>Trage dich ein</Typography>
            <div className={styles.participatePageSubContainer}>
                <Paper className={styles.personInfos}>
                    <Typography variant='h5'>
                        Informationen über dich
                    </Typography>
                    <TextField
                        id="event-name"
                        label="Name"
                        variant="outlined"
                        className={pstyles.textFields}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        id="event-name"
                        label="Email Adresse"
                        variant="outlined"
                        className={pstyles.textFields}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircleIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button variant='contained' className={pstyles.sendButton}>Absenden</Button>
                </Paper>
                <div className={styles.accordionContainer}>
                    <ParticipationSlotCard />
                    <ParticipationSlotCard />
                    <ParticipationSlotCard />
                    <ParticipationSlotCard />
                </div>
            </div>


        </div>
    )
}

export default Participate