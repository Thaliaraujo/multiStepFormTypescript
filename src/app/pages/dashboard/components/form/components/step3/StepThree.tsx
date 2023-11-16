import styled from "styled-components";
import Ellipse from './imagesStepThree/Ellipse.svg'

import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";
import { CardForm } from "../cardForm/CardForm";

const SStepThree = styled.div `
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

export const StepThree = (props: {
    price: string,
    onPriceChange: (value: string) => void,
}) => {
    const handlePriceChange = (selectedPrice: string) => {
        props.onPriceChange(selectedPrice);
    };

    return(
        <SStepThree>
            <Titles>Qual é o orçamento do seu projeto?</Titles>
            <Paragraphs>Selecione a faixa de orçamento do projeto que você tem em mente.</Paragraphs>
            
            <SCards>
                <CardForm 
                    icon={(Ellipse)}
                    label="R$5.000 - R$10.000"
                    onClick={() => handlePriceChange("R$5.000 - R$10.000")}
                />
                <CardForm 
                    icon={(Ellipse)}
                    label="R$10.000 - R$20.000"
                    onClick={() => handlePriceChange("R$10.000 - R$20.000")}
                />
                <CardForm 
                    icon={(Ellipse)}
                    label="R$20.000 - R$50.000"
                    onClick={() => handlePriceChange("R$20.000 - R$50.000")}
                />
                <CardForm 
                    icon={(Ellipse)}
                    label="R$50.000 +"
                    onClick={() => handlePriceChange("R$50.000 +")}
                />
            </SCards>
        </SStepThree>
    );
};
