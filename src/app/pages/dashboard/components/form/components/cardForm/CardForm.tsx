import React from 'react';
import {useState} from 'react';
import styled from 'styled-components';
interface ICardProps{
    label: string;
    icon?: any;
};

// Utilizando shouldForwardProp
const ForwardingSCard = React.forwardRef<HTMLDivElement, { isActive: boolean }>(({ isActive, ...props }, ref) => (
    <SCard ref={ref} isActive={isActive} {...props} />
));

export { ForwardingSCard as SCard };

const SCard = styled.div<{ isActive: boolean }>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 15rem;
    height: 7rem;

    border-radius: 1rem;
    background: var(--neutral-100);
    box-shadow: 0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06);
    border: 2px solid ${({ isActive }) => (isActive ? 'var(--primary-color)' : 'transparent')};
    >h3 {
        color: var(--neutral-800);
        font-size: .8rem;
        font-weight: 500;
        line-height: 1.25rem; 
        text-align: center;
    }
`

export const CardForm: React.FC<ICardProps & { onClick: () => void }> = (props) => {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        props.onClick();
    };

    return(
        <SCard onClick={handleClick}  isActive={isActive}>
            <img src={props.icon} alt= {props.label}/>
            <h3>{props.label}</h3>
        </SCard>
    );
};
