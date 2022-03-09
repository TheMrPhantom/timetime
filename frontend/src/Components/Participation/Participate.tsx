import React, { useEffect, useState } from 'react'
import ParticipationSlotCard from './ParticipationSlotCard'
import styles from './participate.module.scss'
import { Button, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import pstyles from './participate.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventTable from './EventTable'
import { useParams } from 'react-router-dom'
import { doGetRequest, getAndStore } from '../Common/StaticFunctions'
import Config from '../../environment.json'

type Props = {}

type RouteParams = {
    pollUrl: string
}



const Participate = (props: Props) => {

    const pollUrl = useParams<RouteParams>().pollUrl;
    const [event, setevent] = useState<any>(null)

    useEffect(() => {
        getAndStore("event/infos/" + pollUrl, setevent)
    }, [])

    const getHeadline = () => {
        if (event?.name !== null) {
            return <><b>{event?.owner_name}</b> hat dich zum Event < b > {event?.name}</b > eingeladen</>
        } else {
            return <>Du wurstest zum Event < b > {event?.name}</b > eingeladen</>
        }
    }

    return (
        <div className={styles.participatePageContainer}>
            <Typography variant='h4'>
                <b>{event?.owner_name}</b> hat dich zum Event <b>{event?.name}</b> eingeladen
            </Typography>

            <Typography variant='h5'>Trage dich ein</Typography>
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
                    />{event?.send_result ?
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
                        /> : <></>
                    }
                    <Button variant='contained' className={pstyles.sendButton}>Absenden</Button>
                </Paper>

            </div>

            {window.innerWidth >= Config.COMPACT_SIZE_THRESHOLD ?
                <EventTable /> :
                <div className={styles.accordionContainer}>
                    <ParticipationSlotCard />
                    <ParticipationSlotCard />
                    <ParticipationSlotCard />
                    <ParticipationSlotCard />
                </div>}

        </div>
    )
}

export default Participate