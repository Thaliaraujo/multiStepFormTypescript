import { Input } from "../../../input/Input";

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
        <div>
            <Input
                label="Nome"
                placeholder="Davi Santos"
                value={props.name}
                onChange={props.onNameChange}
            />

            <Input
                label="Email"
                placeholder="davi.santos@gmail.com"
                value={props.email}
                onChange={props.onEmailChange}
            />

            <Input
                label="Telefone"
                placeholder="11909090909"
                value={props.phone.toString()}
                onChange={props.onPhoneChange}     
            />

            <Input
                label="Empresa"
                placeholder="Small Tech"
                value={props.company}
                onChange={props.onCompanyChange}
            />
        </div>
    );
};
