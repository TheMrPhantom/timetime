import { InputAdornment, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import Texts from '../../texts.json'
import styles from './event.module.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { OwnerType } from '../../Reducer/EventOwnerReducer';
import { setOwner } from '../../Actions/EventOwnerAction';
type Props = {}

const OwnerInfos = (props: Props) => {

    const state: OwnerType = useSelector((state: RootStateOrAny) => state.ownerSettings);
    const dispatch = useDispatch()

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
                value={state.owner.name}
                onChange={(value) => {
                    const newState: OwnerType = { ...state }
                    newState.owner.name = value.target.value
                    dispatch(setOwner(newState))
                }}
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
                value={state.owner.mail}
                onChange={(value) => {
                    const newState: OwnerType = { ...state }
                    newState.owner.mail = value.target.value
                    dispatch(setOwner(newState))
                }}
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