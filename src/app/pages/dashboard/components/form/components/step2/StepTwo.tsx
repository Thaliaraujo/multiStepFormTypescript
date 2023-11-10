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
    development: string,
    design: string,
    marketing: string,
    other: string,
    onDevelopmentChange: (value: string) => void,
    onDesignChange: (value: string) => void,
    onMarketingChange: (value: string) => void,
    onOtherChange: (value: string) => void,
}) => {
    return(
        <SStepTwo>
            <Titles>Nossos serviços</Titles>
            <Paragraphs>Selecione os serviços de seu interesse.</Paragraphs>
            
            <SCards>
                <CardForm 
                    icon= {(developer)}
                    label="Desenvolvimento"
                    onChange={props.onDevelopmentChange}
                />
                <CardForm 
                    icon= {(design)}
                    label="Web Design"
                    onChange={props.onDesignChange}
                />
                <CardForm 
                    icon= {(marketing)}
                    label="Marketing"
                    onChange={props.onMarketingChange}
                />
                <CardForm 
                    icon= {(setting)}
                    label="Outro"
                    onChange={props.onOtherChange}
                />
            </SCards>
        </SStepTwo>
    );
};