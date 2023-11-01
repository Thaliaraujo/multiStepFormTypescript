
interface IInputRegisterProps{
    label: string;
    value: string;
    onChange: (newvalue: string) => void;
}

export const InputRegister: React.FC<IInputRegisterProps> = (props) => {
    return(
        <label>
            <span>{props.label}</span>
            <input 
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
        </label>
    );
};