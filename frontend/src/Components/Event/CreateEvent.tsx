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
import CombineDaysAndTimes from './CombineDaysAndTimes';
import Settings from './Settings';
import styles from '../Common/common.module.scss';
import Config from '../../environment.json';

type Props = {}

const CreateEvent = (props: Props) => {
    const steps = [
        Texts.STEPPER_EVENT_INFORMATIONS,
        Texts.STEPPER_CREATE_DAY_AND_TIMES,
        Texts.STEPPER_EVENT_SETTINGS];
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepOptional = (step: number) => {
        return step === 3;
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
                return <Informations next={() => handleNext()} />
            case 1:
                return <CreateDaysAndTimes back={() => handleBack()} next={() => handleNext()} />
            case 2:
                return <Settings back={() => handleBack()} next={() => handleNext()} />
            default:
                return <></>
        }
    }

    const getStepperHeader = () => {
        return steps.map((label, index) => {
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
            if (window.innerWidth > Config.COMPACT_SIZE_THRESHOLD) {
                return (
                    <Step key={label} {...stepProps} >
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
            } else {
                return (
                    <Step key={label} {...stepProps} style={{ display: index === activeStep ? 'inherit' : 'none' }}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
            }
        })
    }

    return (
        <Box style={{ margin: "20px" }}>
            <Stepper activeStep={activeStep}>
                {getStepperHeader()}
            </Stepper>
            {
                activeStep === steps.length ? (
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
                        <div className={styles.flexMiddle}>
                            {displaySteps()}
                        </div>
                    </React.Fragment>
                )
            }
        </Box >
    );
}

export default CreateEvent