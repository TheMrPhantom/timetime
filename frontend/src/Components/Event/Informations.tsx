import { InputAdornment, Paper, TextField } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CampaignIcon from '@mui/icons-material/Campaign';
import Texts from '../../texts.json'
import eventClasses from './event.module.scss';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setInfos, setName, setPlace } from '../../Actions/EventCreationInformationAction';

type Props = {}

const Informations = (props: Props) => {
    const eventCreationInfos = useSelector((state: RootStateOrAny) => state.eventCreationInfo);
    const dispatch = useDispatch()

    return (
        <Paper elevation={2} className={eventClasses.stepperPaper}>
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

        </Paper>
    )
}

export default Informations