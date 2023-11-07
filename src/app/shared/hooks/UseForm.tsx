import { useState } from "react";

export const UseForm = (steps: React.ReactNode[]) => {

    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(i: number, e: React.MouseEvent) {
       if(e) 
        e.preventDefault();
    
        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)
    };

    return{
        currentStep, 
        currentComponents: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1 === 4 ? true : false,
    };
};