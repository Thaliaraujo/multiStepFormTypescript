import styled from "styled-components";

export const Button = styled.button `
    background-color: var(--primary-color);
    color: var(--neutral-100);
    box-shadow: 0px 3px 12px 0px rgba(74, 58, 255, 0.18);
    border: none;
    border-radius: 4px;
    
    font-size: .8rem;
    font-weight: 600;
    font-family: Poppins;
    line-height: 1.5;

    padding: 6px 15px;
        
    &:hover {
        background-color: var(--neutral-100);
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        box-shadow: none;
        opacity: 0.85;
    }
`