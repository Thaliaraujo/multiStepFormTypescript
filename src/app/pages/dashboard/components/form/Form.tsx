import { useState } from "react";
import { UseForm } from "../../../../shared/hooks/UseForm";
import { IRegister, RegisterService } from "../../../../shared/services/api/register/RegisterService";
import { ApiException } from "../../../../shared/services/api/ApiException";

import { Steps } from "./components/steps/Steps";
import { StepOne } from "./components/step1/StepOne";
import { StepTwo } from "./components/step2/StepTwo";
import { StepThree } from "./components/step3/StepThree";
import { StepFour } from "./components/step4/StepFour";

export const Form = () => {
  
  const [register, setRegister] = useState<IRegister[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [teste, setTeste] = useState('');

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
      teste={teste}
      onTesteChange={setTeste}
    />,
    <StepThree />,
    <StepFour />
  ];

  const {currentStep, currentComponents, changeStep, isFirstStep, isLastStep} = UseForm(formComponents);
  
  const handleRegister = () => {
    
    //criando um objeto para enviar dados para RegisterService
    const dataToCreate: Omit<IRegister, 'id'> = {
      name: name,
      email: email,
      phone: parseFloat(phone),
      company: company,
      teste: teste
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
        setTeste('');
      };
    });
  };

  return (
    <div>
      <Steps currentStep={currentStep} />
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => changeStep(currentStep + 1, e)}>
        <div>{currentComponents}</div>
        <>
          {!isFirstStep && (
            <button
              type='button'
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => changeStep(currentStep - 1, e)}
            >
              Voltar
            </button>
          )}

          {!isLastStep ? (
            <button type='submit'>
              Avançar
            </button>
          ) : (
            <button 
              type='submit'
              onClick={handleRegister}
            >
              Enviar
            </button>
          )}
        </>
      </form>
    </div>
  );
};