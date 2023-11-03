import styled from "styled-components";
import logo from "./imageLogo/logoSmall.png";


const Logotipo = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--neutral-800);

    padding-left: 2rem;
    margin-right: .5rem;

    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: left;

    span {
       color: var(--primary-color);
    }
`

export const Logo = () => {
    return(
        <div>
            <Logotipo>Web<span>Tech</span></Logotipo>
        </div>
        
    );
};