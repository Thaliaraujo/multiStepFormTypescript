import { useState } from "react";
import { InputRegister } from "./components/inputRegister/InputRegister";
import { IRegister, RegisterService } from "../../shared/services/api/register/RegisterService";
import { ApiException } from "../../shared/services/api/ApiException";


export const Dashboard = () => {

    const [register, setRegister] = useState<IRegister[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    
    const handleRegister = () => {
        
        if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
            alert('Os campos nome, e-mail e telefone são obrigatórios.');
            return;
          }
        //criando um objeto para enviar dados para RegisterService
        const dataToCreate: Omit<IRegister, 'id'> = {
            name: name,
            email: email,
            phone: parseFloat(phone), // Converte 'phone' para número
            company: company,
        };

        // Chama o serviço para criar um novo registro
        RegisterService.create(dataToCreate)
        .then((result) => {
        if (result instanceof ApiException) {
            alert(result.message);
        } else {
            setRegister((oldregister) => [...oldregister, result[0]]);
            // Limpa os campos após o cadastro
            setName('');
            setEmail('');
            setPhone('');
            setCompany('');
        }
        });
    };

    return(
        <div>
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

                <button type="button" onClick={handleRegister}>Cadastrar</button>
            </form>
        </div>
    );
};