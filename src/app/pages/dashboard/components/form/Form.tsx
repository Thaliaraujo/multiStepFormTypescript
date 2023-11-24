import { useState } from "react";
import React from "react";

import { UseForm } from "../../../../shared/hooks/UseForm";
import { IRegister, RegisterService } from "../../../../shared/services/api/register/RegisterService";
import { ApiException } from "../../../../shared/services/api/ApiException";

import { Steps } from "./components/steps/Steps";
import { StepOne } from "./components/step1/StepOne";
import { StepTwo } from "./components/step2/StepTwo";
import { StepThree } from "./components/step3/StepThree";
import { StepFour } from "./components/step4/StepFour";
import { Titles } from "../titles/Titles";
import { Paragraphs } from "../paragraphs/Paragraphs";

import { ButtonForm, SForm } from "./FormStyles";
import { Button } from "../button/StylesButton";
import { Dialog, DialogActions, DialogContent,  IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export const Form = () => {
  
  const [register, setRegister] = useState<IRegister[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');
  const [open, setOpen] = useState(false);
  
  const formComponents = [
    <StepOne 
      name={name}
      email={email}
      phone={phone}
      company={company}
      onNameChange={setName}
      onEmailChange={setEmail}
      onPhoneChange={setPhone}
      onCompanyChange={setCompany}
    />,
    <StepTwo 
      service={service}
      onServiceChange={setService}
    />,
    <StepThree 
      price={price}
      onPriceChange={setPrice}
    />,
    <StepFour />
  ];

  const AlertSubmit = () => {
    
    const handleClose = () => {
      setOpen(false);
    };

    const handleHome = (e: any) => {
      e.preventDefault();
      setOpen(false);
      changeStep(currentStep - 3, e);
    }
    
    return(
      <React.Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
        >
          <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',

              padding: '50px',
              gap:'2rem'
            }}
          >
            <Titles>
              Cotação Enviada
            </Titles>

            <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
            </IconButton>

            <Paragraphs>
              Obrigado por solicitar uma cotação conosco. Estamos felizes em atendê-lo e oferecer as melhores condições para o 
              seu negócio. Em breve, entraremos em contato com você para confirmar os detalhes da sua cotação e esclarecer 
              qualquer dúvida que você possa ter. Agradecemos a sua preferência e confiança ✨
            </Paragraphs>
            
            <DialogActions>
            <Button autoFocus onClick={handleHome}>
              Solicitar nova Cotação
            </Button>
            </DialogActions>

          </DialogContent>
        </Dialog>
      </React.Fragment>
    );
  };

  const {currentStep, currentComponents, changeStep, isFirstStep, isLastStep} = UseForm(formComponents);
  
  const handleRegister = () => {
    
    //criando um objeto para enviar dados para RegisterService
    const dataToCreate: Omit<IRegister, 'id'> = {
      name: name,
      email: email,
      phone: parseFloat(phone),
      company: company,
      service: service,
      price: price,
    };

    // Chama o serviço para criar um novo registro
    RegisterService.create(dataToCreate)
    .then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setRegister((oldregister) => [...oldregister, result[0]]);
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setService('');
        setPrice('');
        setOpen(true);
      };
    });
  };

  return (
    <SForm>
      <Steps currentStep={currentStep} />
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => changeStep(currentStep + 1, e)}>
        <div>{currentComponents}</div>
        <ButtonForm>
          {!isFirstStep && (
            <Button
              type='button'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeStep(currentStep - 1, e)}
            >
              Voltar
            </Button>
          )}

          {!isLastStep ? (
            <Button type='submit'>
              Avançar
            </Button>
          ) : (
            <Button
              type='submit'
              onClick={handleRegister}
            >
              Enviar
            </Button>
          )}
          {open && <AlertSubmit />}
        </ButtonForm>
      </form>
    </SForm>
  );
};