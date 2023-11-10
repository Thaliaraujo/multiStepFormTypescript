import { useState } from 'react';
import styled from 'styled-components';

interface ICardProps{
    label: string;
    icon?: any;
    onChange: (newvalue: string) => void; 
};

// interface SCardProps {
//     active: boolean;
// }

const SCard = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 15rem;
    height: 7rem;

    border-radius: 1rem;
    background: var(--neutral-100);
    box-shadow: 0px 4px 10px 0px rgba(31, 37, 89, 0.07), 0px 2px 11px 0px rgba(69, 65, 164, 0.06);

    >h3 {
        color: var(--neutral-800);
        font-size: .8rem;
        font-weight: 500;
        line-height: 1.25rem; 
        text-align: center;
    }

    &:active {
        border: 2px solid var(--primary-color);
    }
`

export const CardForm: React.FC<ICardProps> = (props) => {

    const [card, setCard] = useState([false, false, false, false]);

    const toggleCardActive = (index: any) => {
        const newCard = [...card];

        newCard[index] = !newCard[index];
        setCard(newCard)
    };

    return(
        <SCard onClick={() => toggleCardActive(0)}>
            <img src={props.icon} alt= {props.label}/>
            <h3> {props.label} </h3>
        </SCard>
    );
};