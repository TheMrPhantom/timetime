import { Divider, Paper, Switch, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import React from 'react'
import { RootStateOrAny, useDispatch } from 'react-redux'
import styles from './event.module.scss'
import { SettingsType } from '../../Reducer/EventSettingsReducer';
import { setSettings } from '../../Actions/EventSettingsAction';
type Props = {}

const Settings = (props: Props) => {
    const state: SettingsType = useSelector((state: RootStateOrAny) => state.eventSettings);
    const dispatch = useDispatch()

    return (
        <Paper className={styles.settingsContainer}>
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">"Ich bin mir nicht sicher" Option</Typography>
                    <Switch checked={state.settings.optional} onChange={(value) => {
                        const newState: SettingsType = { ...state }
                        newState.settings.optional = value.target.checked
                        dispatch(setSettings(newState))
                    }} />
                </div>
                <Typography>Gibt den Teilnehmern die Möglichkeit an einem nicht sicher zu zusagen</Typography>
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer} >
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Maximale Teilnehmer Pro Slot</Typography>
                    <Switch checked={state.settings.hasMaxParticipants} onChange={(value) => {
                        const newState: SettingsType = { ...state }
                        newState.settings.hasMaxParticipants = value.target.checked
                        dispatch(setSettings(newState))
                    }} />
                </div>
                <Typography>Beschänkt die Anzahl der Teilnehmer, die sich für einen Zeitslot eintragen können auf die Festgelegte Anzahl</Typography>
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Nur eine Option wählbar</Typography>
                    <Switch checked={state.settings.onlyOneOption} onChange={(value) => {
                        const newState: SettingsType = { ...state }
                        newState.settings.onlyOneOption = value.target.checked
                        dispatch(setSettings(newState))
                    }} />
                </div>
                <Typography>Teilnehmer können sich nur zu einem Zeitlot eintragen</Typography>
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Geheime Umfrage</Typography>
                    <Switch checked={state.settings.secretPoll} onChange={(value) => {
                        const newState: SettingsType = { ...state }
                        newState.settings.secretPoll = value.target.checked
                        dispatch(setSettings(newState))
                    }} />
                </div>
                <Typography>Teilnehmer sehen nicht, was andere Teilnehmer bei der Umfrage angegeben haben. Der Ersteller sieht weiterhin alle Antworten.</Typography>
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Frist</Typography>
                    <Switch checked={state.settings.hasDeadline} onChange={(value) => {
                        const newState: SettingsType = { ...state }
                        newState.settings.hasDeadline = value.target.checked
                        dispatch(setSettings(newState))
                    }} />
                </div>
                <Typography>Umfrage wird zu diesem Termin automatisch beendet, nach diesem Termin können sich Teilnehmer nicht mehr für Zeiten eintragen</Typography>
            </div>
            <Divider className={styles.containerDivider} />
            <div className={styles.settingsMiddleContainer}>
                <div className={styles.settingsInnerContainer}>
                    <Typography variant="h6">Ergebnis per Mail versenden</Typography>
                    <Switch checked={state.settings.sendResult} onChange={(value) => {
                        const newState: SettingsType = { ...state }
                        newState.settings.sendResult = value.target.checked
                        dispatch(setSettings(newState))
                    }} />
                </div>
                <Typography>Sendet nach beendigung der Umfrage die Ergebnisse an alle Teilnehmer, die eine Email Adresse angegeben haben</Typography>
            </div>
        </Paper>
    )
}

export default Settings