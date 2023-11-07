import { useState } from "react";
import { Input } from "../../../input/Input";

export const StepTwo = () => {

    const [teste, setTeste] = useState('');
    return(
        <div>
            <Input 
                label= "test"
                placeholder="tets"
                value= {teste}
                onChange={newValue => setTeste(newValue)}
            />
        </div>
    );
};