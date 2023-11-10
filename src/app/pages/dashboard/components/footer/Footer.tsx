import { useState } from "react";
import { ISubscription, SubscriptionService } from "../../../../shared/services/api/subscription/SubscriptionService";
import { ApiException } from "../../../../shared/services/api/ApiException";

import { Input } from "../input/Input";
import { Logo } from "../logo/Logo";
import { Paragraphs } from "../paragraphs/Paragraphs";
import { Button } from "../button/StylesButton";

import styled from "styled-components";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Alert from '@mui/material/Alert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const SFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    border-top: 1px solid var(--neutral-400);
`

const SContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
`

export const Footer = () => {

    const [subscription, setSubscription] = useState<ISubscription[]>([]);
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    
    const AlertThanks = () => {
        return (
            <Box sx={{ width: '50%' }}>
            <Collapse in={open}>
                <Alert
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpen(false);
                    }}
                    >
                    <CloseIcon fontSize="small" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
                iconMapping={{
                    success: <CheckCircleOutlineIcon fontSize="small" />,
                  }}
                >
                    Obrigado por se inscrever na nossa newsletter! Estamos muito felizes em ter você como parte da nossa comunidade. 😊
                </Alert>
            </Collapse>
            </Box>
        );
    };

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
            setOpen(true);
        }
        });
    };

    return(
        <>
            <SFooter>
                <Input
                    placeholder="Digite seu e-mail"
                    value= {email}
                    icon= {<MailOutlineOutlinedIcon />}
                    onChange={newValue => setEmail(newValue)}
                />
                <Button type="button" onClick={handleSubscription}>Inscreva-se</Button>
                {open && <AlertThanks />}
            </SFooter>
            <SContent>
                <Logo />
                <Paragraphs>Desenvolvido por Thalía Araújo</Paragraphs>
            </SContent>
        </>
        
    );
};