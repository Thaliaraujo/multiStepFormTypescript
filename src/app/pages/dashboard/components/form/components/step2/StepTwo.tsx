import styled from "styled-components";
import { Paragraphs } from "../../../paragraphs/Paragraphs";
import { Titles } from "../../../titles/Titles";
import { CardForm } from "../cardForm/CardForm";
import developer from "./imagesStepTwo/developer.png";


const SStepTwo = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem 0;
    gap: 2rem;
`
export const StepTwo = (props: {
    teste: string,
    onTesteChange: (value: string) => void,
}) => {
    return(
        <>
            <Titles>Nossos serviços</Titles>
            <Paragraphs>Selecione os serviços de seu interesse.</Paragraphs>
            <SStepTwo>
                <CardForm 
                    icon= {(${developer})}
                    label="Desenvolvimento"
                />
                {/* <CardForm 
                    icon= {<PersonOutlineOutlinedIcon />}
                    label="Web Design"
                />
                <CardForm 
                    icon= {<PersonOutlineOutlinedIcon />}
                    label="Marketing"
                />
                <CardForm 
                    icon= {<PersonOutlineOutlinedIcon />}
                    label="Outro"
                /> */}
            </SStepTwo>
            
        </>
    );
};