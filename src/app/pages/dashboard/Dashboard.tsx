import './DashboardStyles.css'
import { Footer } from './components/footer/Footer';
import { Form } from "./components/form/Form";
import { Logo } from "./components/logo/Logo";
import { TitleAndParagraph } from './components/tiltleAndParagraph/TitleAndParagraph';


export const Dashboard = () => {
    return(
        <div>
            <Logo />
            <TitleAndParagraph />
            <Form />
            <Footer />
        </div>
    );
};