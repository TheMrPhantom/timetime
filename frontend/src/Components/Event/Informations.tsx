import { Button, Divider, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CampaignIcon from '@mui/icons-material/Campaign';
import Texts from '../../texts.json'
import eventClasses from './event.module.scss';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setInfos, setName, setPlace } from '../../Actions/EventCreationInformationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import { OwnerType } from '../../Reducer/EventOwnerReducer';
import { setOwner } from '../../Actions/EventOwnerAction';
import Spacer from '../Common/Spacer';

type Props = {
    next: () => void
}

const Informations = (props: Props) => {
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.eventCreationInfo);
    const state: OwnerType = useSelector((state: RootStateOrAny) => state.ownerSettings);

    const dispatch = useDispatch()

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <Typography variant="h5">Informationen zum Event</Typography>
            <TextField
                error={eventCreationInfos.eventName === ""}
                id="event-name"
                label={Texts.EVENT_NAME_LABEL}
                variant="outlined"
                value={eventCreationInfos.eventName}
                onChange={(value) => dispatch(setName(value.target.value))}
                className={eventClasses.textFields}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <CampaignIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                id="event-place"
                label={Texts.EVENT_PLACE_LABEL}
                variant="outlined"
                value={eventCreationInfos.eventPlace}
                onChange={(value) => dispatch(setPlace(value.target.value))}
                className={eventClasses.textFields}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <PlaceIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                id="event-infos"
                label={Texts.EVENT_INFO_LABEL}
                variant="outlined"
                value={eventCreationInfos.eventInfo}
                onChange={(value) => dispatch(setInfos(value.target.value))}
                className={eventClasses.textFields}
                multiline
                minRows={4}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <PlaceIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <Spacer vertical={20} />
            <Divider />
            <Typography variant="h5">Informationen über dich</Typography>
            <TextField
                error={false}
                id="event-name"
                label={Texts.NAME}
                variant="outlined"
                className={eventClasses.textFields}
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
                error={!state.owner.mail.includes("@")}
                id="event-name"
                label={Texts.E_MAIL}
                variant="outlined"
                className={eventClasses.textFields}
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
            <div className={eventClasses.informationButtonContainer}>
                <Button onClick={props.next}>{Texts.NEXT}</Button>
            </div>
        </Paper>
    )
}

export default Informations