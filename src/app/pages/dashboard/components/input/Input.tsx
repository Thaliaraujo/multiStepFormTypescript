
interface IInputRegisterProps{
    label: string;
    value: string;
    placeholder?: string;
    onChange: (newvalue: string) => void;
}

export const Input: React.FC<IInputRegisterProps> = (props) => {
    return(
        <label>
            <span>{props.label}</span>
            <input 
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
            />
        </label>
    );
};