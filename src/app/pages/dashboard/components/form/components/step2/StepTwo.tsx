import { Input } from "../../../input/Input";

export const StepTwo = (props: {
    teste: string,
    onTesteChange: (value: string) => void,
}) => {
    return(
        <div>
            <Input 
                label= "test"
                placeholder="tets"
                value={props.teste}
                onChange={props.onTesteChange}
            />
        </div>
    );
};