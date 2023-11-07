import { useState } from "react";
import { Input } from "../../../input/Input";

export const StepOne = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    
    return(
        <div>
            <Input 
                label= "Nome"
                placeholder="Davi Santos"
                value= {name}
                onChange={newValue => setName(newValue)}
            />

            <Input 
                label="Email"
                placeholder="davi.santos@gmail.com" 
                value={email} 
                onChange={newValue => setEmail(newValue)}
            />

            <Input 
                label="Telefone"
                placeholder="11909090909" 
                value={phone} 
                onChange={newValue => setPhone(newValue)}
            />

            <Input 
                label="Empresa"
                placeholder="Small Tech" 
                value={company} 
                onChange={newValue => setCompany(newValue)}
            />
        </div>
    );
};