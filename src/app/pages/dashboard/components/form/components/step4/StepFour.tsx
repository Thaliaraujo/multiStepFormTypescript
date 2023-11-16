import styled from "styled-components";
import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";
import check from "./imagesStepFour/check.svg"

const SStepFour = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 1rem .5rem;
`

const SImage = styled.img`
    width: 80px;
    margin-left: 15rem;

`

export const StepFour = () => {
    return(
        <SStepFour>
            <SImage src={check} alt=""/>
            <Titles>Envie sua solicitação de cotação</Titles>
            <Paragraphs>
                Revise todas as informações que você digitou nas etapas anteriores e, se tudo estiver correto, envie sua mensagem para receber uma cotação do projeto em 24 a 48 horas.
            </Paragraphs>
        </SStepFour>
    );
};