import React from "react";
import { Stepper, StepLabel, Step} from '@mui/material';
import styled from "styled-components";


const stepStyle = {
    "& .Mui-disabled":{
        "& .MuiStepIcon-root": {
            color: "#D9DBE9"
        }
    },
    "& .Mui-active": {
        "& .MuiStepIcon-root": {
            color: "warning.main"
        }
    },
    "& .Mui-completed": {
        "& .MuiStepIcon-root": {
            color: "#4A3AFF"
        }
    }
};

const SSteps = styled.div `
    display: flex;
    justify-content: space-around;
`

interface ISteps {
    currentStep: number;
  }

export const Steps: React.FC<ISteps> = ({ currentStep })=> {
    return (
        <SSteps>
            <Stepper activeStep={currentStep} sx={stepStyle}>
                <Step  >
                    <StepLabel />
                </Step>
                <Step>
                    <StepLabel />
                </Step>
                <Step>
                    <StepLabel />
                </Step>
                <Step>
                    <StepLabel />
                </Step>
            </Stepper>
      </SSteps>
    );
};