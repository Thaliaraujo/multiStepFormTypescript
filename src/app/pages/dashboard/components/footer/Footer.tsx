import { useState } from "react";
import { ISubscription, SubscriptionService } from "../../../../shared/services/api/subscription/SubscriptionService";
import { ApiException } from "../../../../shared/services/api/ApiException";

import { InputRegister } from "../inputRegister/InputRegister";
import { Logo } from "../logo/Logo";
import { Paragraphs } from "../paragraphs/Paragraphs";

import styled from "styled-components";


const SFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem;
    border-top: 1px solid var(--neutral-400);
`

const SContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: .5rem;
`

export const Footer = () => {

    const [subscription, setSubscription] = useState<ISubscription[]>([]);
    const [email, setEmail] = useState('');

    const handleSubscription = () => {
        
        if (email.trim() === '') {
            alert('Insira seu e-mail');
            return;
          };

        //criando um objeto para enviar dados para SubscriptionService
        const dataToCreate: Omit<ISubscription, 'id'> = {
            email: email,
        };

        // Chama o serviço para criar um novo registro
        SubscriptionService.create(dataToCreate)
        .then((result) => {
        if (result instanceof ApiException) {
            alert(result.message);
        } else {
            setSubscription((oldSubscription) => [...oldSubscription, result[0]]);
            // Limpa o campo após o cadastro
            setEmail('');
        }
        });
    };

    return(
        <SFooter>
            <InputRegister
                label= ""
                placeholder="Digite seu e-mail"
                value= {email}
                onChange={newValue => setEmail(newValue)}
            />
            <button type="button" onClick={handleSubscription}>Inscreva-se</button>
            <SContent>
                <Logo />
                <Paragraphs>Desenvolvido por Thalía Araújo</Paragraphs>
            </SContent>
        </SFooter>
    );
};