import styled from "styled-components";

import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";
import { CardForm } from "../cardForm/CardForm";

import developer from "./imagesStepTwo/developer.svg";
import design from "./imagesStepTwo/design.svg";
import marketing from "./imagesStepTwo/marketing.svg";
import setting from "./imagesStepTwo/Setting.svg";


const SStepTwo = styled.div `
     margin: 0 1rem;
`

const SCards = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    gap: 2rem;
`

export const StepTwo = (props: {
    service: string,
    onServiceChange: (value: string) => void,
}) => {
    const handleServiceChange = (selectedService: string) => {
        props.onServiceChange(selectedService);
    };

    return(
        <SStepTwo>
            <Titles>Nossos serviços</Titles>
            <Paragraphs>Selecione os serviços de seu interesse.</Paragraphs>
            
            <SCards>
                <CardForm 
                    icon= {(developer)}
                    label="Desenvolvimento"
                    onClick={() => handleServiceChange("Desenvolvimento")}
                />
                <CardForm 
                    icon= {(design)}
                    label="Web Design"
                    onClick={() => handleServiceChange("Web Design")}
                />
                <CardForm 
                    icon= {(marketing)}
                    label="Marketing"
                    onClick={() => handleServiceChange("Marketing")}
                />
                <CardForm 
                    icon= {(setting)}
                    label="Outro"
                    onClick={() => handleServiceChange("Outro")}
                />
            </SCards>
        </SStepTwo>
    );
};
