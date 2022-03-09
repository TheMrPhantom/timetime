import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Checkbox, Typography } from '@mui/material';
import { dateToString, timeTupleToString } from '../Common/StaticFunctions';
import styles from './participate.module.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
type Props = {}

const EventTable = (props: Props) => {

    const [expanded, setexpanded] = useState<Array<boolean>>(Array(5).fill(false));

    const expandSetter = (index: number, value: boolean) => {
        const newArray = Array(5).fill(false);
        newArray[index] = true;
        setexpanded(newArray);
    }

    return (
        <TableContainer component={Paper} className={styles.tableContainer}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Checkbox />Unter Vorbehalt</TableCell>
                        <TableCell><Checkbox />Zusage</TableCell>
                        <TableCell align="right">Datum</TableCell>
                        <TableCell align="right">Uhrzeit</TableCell>
                        <TableCell align="left">Teilnehmer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className={styles.tableRowContainer}
                        onMouseEnter={(value) => { expandSetter(0, true) }}
                        
                    >
                        <TableCell component="th" scope="row" className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell align="right"><Typography variant='h6'>{dateToString(new Date())}</Typography></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion expanded={expanded[0]}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}
                        onMouseEnter={(value) => { expandSetter(1, true) }}
                        
                    >
                        <TableCell component="th" scope="row" className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion expanded={expanded[1]}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3 / (2)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}
                        onMouseEnter={(value) => { expandSetter(2, true) }}
                       
                    >
                        <TableCell component="th" scope="row" className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell align="right"><Typography variant='h6'>{dateToString(new Date())}</Typography></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion expanded={expanded[2]}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}
                        onMouseEnter={(value) => { expandSetter(3, true) }}
                        
                    >
                        <TableCell component="th" scope="row" className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion expanded={expanded[3]}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3 / (2)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}
                        onMouseEnter={(value) => { expandSetter(4, true) }}
                        
                    >
                        <TableCell component="th" scope="row" className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell className={styles.checkboxCell}><Checkbox /> </TableCell>
                        <TableCell align="right"><Typography variant='h6'>{dateToString(new Date())}</Typography></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion expanded={expanded[4]}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}>
                        <TableCell component="th" scope="row"><Checkbox /> </TableCell>
                        <TableCell ><Checkbox /> </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3 / (2)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}>
                        <TableCell component="th" scope="row"><Checkbox /> </TableCell>
                        <TableCell ><Checkbox /> </TableCell>
                        <TableCell align="right"><Typography variant='h6'>{dateToString(new Date())}</Typography></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>
                    <TableRow className={styles.tableRowContainer}>
                        <TableCell component="th" scope="row"><Checkbox /> </TableCell>
                        <TableCell ><Checkbox /> </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"><Typography variant='h6'>{timeTupleToString([new Date(), new Date()])}</Typography></TableCell>
                        <TableCell align="left"><Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant='h6'>3 / (2)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className={styles.nameContainer}>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge} >
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "orange" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                    <div className={styles.participantBadge}>
                                        <Avatar sx={{ width: 32, height: 32 }} style={{ backgroundColor: "green" }}>P</Avatar>
                                        <Typography variant='body1'>
                                            Peter
                                        </Typography>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion></TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default EventTable