import { Paragraphs } from '../paragraphs/Paragraphs';
import { Titles } from '../titles/Titles';
import styled from "styled-components";


const Content = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 1rem .5rem;
`

export const TitleAndParagraph = () => {
    return(
        <Content>
            <Titles>Obtenha uma cotação de projeto</Titles>
            <Paragraphs>
                Preencha o formulário abaixo para receber uma cotação para seu projeto. Sinta-se à vontade para acrescentar todos os detalhes que forem necessários.
            </Paragraphs>
        </Content>
    );
};