import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Texts from '../../texts.json';
import Informations from './Informations';
import CreateDaysAndTimes from './CreateDaysAndTimes';
import CombineDaysAndtimes from './CombineDaysAndtimes';
import Settings from './Settings';
import OwnerInfos from './OwnerInfos';
import styles from '../Common/common.module.scss';

type Props = {}

const CreateEvent = (props: Props) => {
    const steps = [
        Texts.STEPPER_EVENT_INFORMATIONS,
        Texts.STEPPER_CREATE_DAY_AND_TIMES,
        Texts.STEPPER_COMBINE_DAY_AND_TIME,
        Texts.STEPPER_EVENT_SETTINGS,
        Texts.STEPPER_EVENT_OWNER];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return false;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const displaySteps: () => JSX.Element = () => {
        switch (activeStep) {
            case 0:
                return <Informations />
            case 1:
                return <CreateDaysAndTimes />
            case 2:
                return <CombineDaysAndtimes />
            case 3:
                return <Settings />
            case 4:
                return <OwnerInfos />
            default:
                return <></>
        }
    }
    return (
        <Box style={{ margin: "20px" }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        {Texts.STEPPER_CREATE_EVENT_FINISHED}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>{Texts.RESET}</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>{Texts.STEP} {activeStep + 1}</Typography>
                    {console.log(styles)}
                    <div className={styles.flexMiddle}>
                        {displaySteps()}
                    </div>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Skip
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? Texts.FINISH : Texts.NEXT}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default CreateEvent