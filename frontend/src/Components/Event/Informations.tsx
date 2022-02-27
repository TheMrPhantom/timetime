import { Button, Divider, InputAdornment, Paper, TextField, Typography } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CampaignIcon from '@mui/icons-material/Campaign';
import Texts from '../../texts.json'
import eventClasses from './event.module.scss';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Spacer from '../Common/Spacer';
import PaperHeadline from '../Common/PaperHeadline';
import { EventCreationType } from '../../Reducer/CreateEventReducer';
import { setEventInformationsEventCreation, setEventNameEventCreation, setEventOwnerMailEventCreation, setEventOwnerNameEventCreation, setEventPlaceEventCreation } from '../../Actions/CreateEventAction';

type Props = {
    next: () => void
}

const Informations = (props: Props) => {
    const state: EventCreationType = useSelector((state: RootStateOrAny) => state.createEvent);
    const dispatch = useDispatch()

    const nextEnabled = (): boolean => {
        return state.eventInformations.name !== "" && (state.eventInformations.owner.mail.length === 0 || state.eventInformations.owner.mail.includes("@"))
    }

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
            <PaperHeadline text="Allgemeine Informationen" />
            <Typography variant="h5">Informationen zum Event</Typography>
            <TextField
                error={state.eventInformations.name === ""}
                id="event-name"
                label={Texts.EVENT_NAME_LABEL}
                variant="outlined"
                value={state.eventInformations.name}
                onChange={(value) => dispatch(setEventNameEventCreation(value.target.value))}
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
                value={state.eventInformations.place}
                onChange={(value) => dispatch(setEventPlaceEventCreation(value.target.value))}
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
                value={state.eventInformations.informations}
                onChange={(value) => dispatch(setEventInformationsEventCreation(value.target.value))}
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
                value={state.eventInformations.owner.name}
                onChange={(value) => {
                    dispatch(setEventOwnerNameEventCreation(value.target.value))
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
                error={!state.eventInformations.owner.mail.includes("@") && state.eventInformations.owner.mail.length > 0}
                id="event-name"
                label={Texts.E_MAIL}
                variant="outlined"
                className={eventClasses.textFields}
                value={state.eventInformations.owner.mail}
                onChange={(value) => {
                    dispatch(setEventOwnerMailEventCreation(value.target.value))
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
                <Button variant='contained' disabled={!nextEnabled()} onClick={props.next}>{Texts.NEXT}</Button>
            </div>
        </Paper>
    )
}

export default Informations