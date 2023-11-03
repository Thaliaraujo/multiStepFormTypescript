import { useState } from "react";
import { InputRegister } from "../../../inputRegister/InputRegister";

export const StepOne = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');

    return(
        <form>
            <InputRegister 
                label= "Nome"
                placeholder="Davi Santos"
                value= {name}
                onChange={newValue => setName(newValue)}
            />

            <InputRegister 
                label="Email"
                placeholder="davi.santos@gmail.com" 
                value={email} 
                onChange={newValue => setEmail(newValue)}
            />

            <InputRegister 
                label="Telefone"
                placeholder="11909090909" 
                value={phone} 
                onChange={newValue => setPhone(newValue)}
            />

            <InputRegister 
                label="Empresa"
                placeholder="Small Tech" 
                value={company} 
                onChange={newValue => setCompany(newValue)}
            />
        </form>
    );
};