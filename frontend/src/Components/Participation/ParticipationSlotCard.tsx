import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dateToString } from '../Common/StaticFunctions';
import styles from '../Event/event.module.scss'
import pstyles from './participate.module.scss'
import { AccordionActions, Avatar, Divider, FormControlLabel, Switch } from '@mui/material';
import Spacer from '../Common/Spacer';
type Props = {}

const ParticipationSlotCard = (props: Props) => {
    return (
        <Accordion className={styles.accordion + " " + pstyles.accordion} defaultExpanded={true}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <div className={pstyles.outterHeadlineContainer}>
                    <div className={pstyles.headlineContainer}>
                        <Typography variant='h6'>{dateToString(new Date())}</Typography>
                        <Typography variant='caption'>15:00 - 16:00 Uhr</Typography>
                    </div>

                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant='h6'>
                    3 Teilnehmer
                </Typography>
                <Spacer vertical={10} />
                <div className={pstyles.nameContainer}>
                    <div className={pstyles.participantBadge}>
                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                        <Typography variant='body1'>
                            Peter
                        </Typography>
                    </div>
                    <div className={pstyles.participantBadge} >
                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                        <Typography variant='body1'>
                            Peter
                        </Typography>
                    </div>
                    <div className={pstyles.participantBadge}>
                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                        <Typography variant='body1'>
                            Peter
                        </Typography>
                    </div>
                </div>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
                <div className={pstyles.accordionActions}>
                    <FormControlLabel label={"Unter vorbehalt"} control={<Switch />} />
                    <FormControlLabel label={"Zusage"} control={<Switch />} />
                </div>
            </AccordionActions>
        </Accordion>
    )
}

export default ParticipationSlotCard