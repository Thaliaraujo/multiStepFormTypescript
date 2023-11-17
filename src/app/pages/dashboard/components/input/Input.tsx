import { ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornmentEnd from '@mui/material/InputAdornment';
import styled from 'styled-components';

interface IInputRegisterProps{
    type?: any;
    label?: string;
    value: string;
    placeholder?: string;
    icon?: ReactNode;
    onChange: (newvalue: string) => void;
};

const SLabel = styled.span `
    color: var(--neutral-800);
    font-size: .8rem;
    font-weight: 500;
    line-height: 1.25rem; 
`

export const Input: React.FC<IInputRegisterProps> = (props) => {
    return(
        <FormControl variant="outlined">
            <SLabel>{props.label}</SLabel>
            <OutlinedInput 
                required
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={e => props.onChange(e.target.value)}
                sx={[
                    {
                    fontSize: '.7rem',
                    padding: '0 1rem'
                    }
                ]}
                size= 'small'
                endAdornment={
                    <InputAdornmentEnd position="end">
                        {props.icon}
                    </InputAdornmentEnd>
                }
            />
        </FormControl>
    );
};
