import { Collapse, Divider, Paper, Switch, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import React from 'react'
import { RootStateOrAny, useDispatch } from 'react-redux'
import styles from './event.module.scss'
import Spacer from '../Common/Spacer';
import DayPicker from '../Common/DayPicker';

import LooksOneIcon from '@mui/icons-material/LooksOne';
import TodayIcon from '@mui/icons-material/Today';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import HelpIcon from '@mui/icons-material/Help';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmailIcon from '@mui/icons-material/Email';
import Texts from '../../texts.json';
import eventClasses from './event.module.scss';
import { Button } from '@mui/material';
import PaperHeadline from '../Common/PaperHeadline';
import { EventCreationType } from '../../Reducer/CreateEventReducer';
import { setSettingsDeadlineEventCreation, setSettingsHasDeadlineEventCreation, setSettingsHasMaxPartEventCreation, setSettingsMaxPartEventCreation, setSettingsOnlyOneEventCreation, setSettingsOptionalEventCreation, setSettingsSecretEventCreation, setSettingsSendResultEventCreation } from '../../Actions/CreateEventAction';

type Props = {
    back: () => void,
    next: () => void
}

const Settings = (props: Props) => {
    const state: EventCreationType = useSelector((state: RootStateOrAny) => state.createEvent);
    const dispatch = useDispatch()

    return (
        <Paper className={styles.settingsContainer}>
            <PaperHeadline text="Optionale Event-Einstellungen" />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.iconContainer}>
                    <HelpIcon />
                </div>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">"Ich bin mir nicht sicher" Option</Typography>
                    <Typography>Möglichkeit an einem Termin nicht sicher zu zusagen</Typography>
                </div>
                <Switch checked={state.settings.optional} onChange={(value) => {
                    dispatch(setSettingsOptionalEventCreation(value.target.checked))
                }} />
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer} >
                <div className={styles.iconContainer}>
                    <AdminPanelSettingsIcon />
                </div>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Maximale Teilnehmer Pro Slot</Typography>
                    <Typography>Beschänkt die Anzahl der Teilnehmer, die sich für einen Zeitslot eintragen können auf die Festgelegte Anzahl</Typography>
                    <Collapse in={state.settings.hasMaxParticipants}>
                        <div>
                            <Spacer vertical={20} />
                            <TextField variant="outlined"
                                label="Maximale Teilnehmerzahl"
                                type="number"
                                value={state.settings.maxParticipants}
                                onChange={(value) => {
                                    dispatch(setSettingsMaxPartEventCreation(Number.parseInt(value.target.value)))
                                }} />
                        </div>
                    </Collapse>
                </div>

                <Switch checked={state.settings.hasMaxParticipants} onChange={(value) => {
                    dispatch(setSettingsHasMaxPartEventCreation(value.target.checked))
                }} />

            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.iconContainer}>
                    <LooksOneIcon />
                </div>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Nur eine Option wählbar</Typography>
                    <Typography>Teilnehmer können sich nur zu einem Zeitlot eintragen</Typography>
                </div>
                <Switch checked={state.settings.onlyOneOption} onChange={(value) => {
                    dispatch(setSettingsOnlyOneEventCreation(value.target.checked))
                }} />
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.iconContainer}>
                    <VpnKeyIcon />
                </div>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Geheime Umfrage</Typography>
                    <Typography>Teilnehmer sehen nicht, was andere Teilnehmer bei der Umfrage angegeben haben. Der Ersteller sieht weiterhin alle Antworten.</Typography>
                </div>
                <Switch checked={state.settings.secretPoll} onChange={(value) => {
                    dispatch(setSettingsSecretEventCreation(value.target.checked))
                }} />
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.iconContainer}>
                    <TodayIcon />
                </div>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Frist</Typography>
                    <Typography>Umfrage wird zu diesem Termin automatisch beendet, nach diesem Termin können sich Teilnehmer nicht mehr für Zeiten eintragen</Typography>
                    <Collapse in={state.settings.hasDeadline}>
                        <div>
                            <Spacer vertical={20} />
                            <DayPicker label='Datum' date={state.settings.deadline} onValueChange={(value: Date | null) => {
                                dispatch(setSettingsDeadlineEventCreation(value !== null ? value : new Date()))
                            }} />

                        </div>
                    </Collapse>
                </div>

                <Switch checked={state.settings.hasDeadline} onChange={(value) => {
                    dispatch(setSettingsHasDeadlineEventCreation(value.target.checked))
                }} />
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.iconContainer}>
                    <EmailIcon />
                </div>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Ergebnis per Mail versenden</Typography>
                    <Typography>Sendet nach beendigung der Umfrage die Ergebnisse an alle Teilnehmer, die eine Email Adresse angegeben haben</Typography>

                </div>
                <Switch checked={state.settings.sendResult} onChange={(value) => {
                    dispatch(setSettingsSendResultEventCreation(value.target.checked))
                }} />
            </div>
            <Divider className={styles.containerDivider} />
            <Spacer vertical={5} />
            <div className={eventClasses.informationButtonContainerDouble}>
                <Button variant='contained' onClick={props.back}>{Texts.BACK}</Button>
                <Button variant='contained' onClick={props.next}>{Texts.NEXT}</Button>
            </div>
        </Paper >
    )
}

export default Settings