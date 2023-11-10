import { ReactNode, useState } from 'react';


interface ICardProps{
    label: string;
    icon?: ReactNode;
};

export const CardForm: React.FC<ICardProps> = (props) => {

    const [card, setCard] = useState([false, false, false, false]);

    const toggleCardActive = (index: any) => {
        const newCard = [...card];
        newCard[index] = !newCard[index];
        setCard(newCard);
    };

    return(
        <>
            <div onClick={() => toggleCardActive(0)}>
                {props.icon}
                <h3> {props.label} </h3>
            </div>
        </>
    );
};