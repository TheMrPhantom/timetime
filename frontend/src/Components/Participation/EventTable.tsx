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
type Props = {}

const EventTable = (props: Props) => {
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
                    <TableRow className={styles.tableRowContainer}>
                        <TableCell component="th" scope="row"><Checkbox /> </TableCell>
                        <TableCell><Checkbox /> </TableCell>
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
                        <TableCell><Checkbox /> </TableCell>
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