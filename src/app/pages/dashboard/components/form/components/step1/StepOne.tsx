import styled from "styled-components";
import { Input } from "../../../input/Input";
import { Titles } from "../../../titles/Titles";

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const SStepOne = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`

export const StepOne = (props: {
    name: string,
    email: string,
    phone: string,
    company: string,
    onNameChange: (value: string) => void,
    onEmailChange: (value: string) => void,
    onPhoneChange: (value: string) => void,
    onCompanyChange: (value: string) => void,
}) => {
    return (
        <>
            <Titles>Dados de Contato</Titles>
            <SStepOne>
                <Input
                    label="Nome"
                    placeholder="Davi Santos"
                    value={props.name}
                    icon= {<PersonOutlineOutlinedIcon />}
                    onChange={props.onNameChange}
                />

                <Input
                    label="Email"
                    placeholder="davi.santos@gmail.com"
                    value={props.email}
                    icon= {<PersonOutlineOutlinedIcon />}
                    onChange={props.onEmailChange}
                />

                <Input
                    label="Telefone"
                    placeholder="11909090909"
                    value={props.phone.toString()}
                    icon= {<PersonOutlineOutlinedIcon />}
                    onChange={props.onPhoneChange}     
                />

                <Input
                    label="Empresa"
                    placeholder="Small Tech"
                    value={props.company}
                    icon= {<PersonOutlineOutlinedIcon />}
                    onChange={props.onCompanyChange}
                />
            </SStepOne>
        </>
    );
};
