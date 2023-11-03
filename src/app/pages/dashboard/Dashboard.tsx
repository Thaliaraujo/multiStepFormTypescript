import './DashboardStyles.css'
import { Form } from "./components/form/Form";
import { Logo } from "./components/logo/Logo";
import { Paragraphs } from './components/paragraphs/Paragraphs';
import { Titles } from './components/titles/Titles';


export const Dashboard = () => {
    return(
        <div className='dashboard'>
            <Logo />
            <Titles>Obtenha uma cotação de projeto</Titles>
            <Paragraphs>
                Preencha o formulário abaixo para receber uma cotação para seu projeto. Sinta-se à vontade para acrescentar todos os detalhes que forem necessários.
            </Paragraphs>
            <Form />
        </div>
    );
};