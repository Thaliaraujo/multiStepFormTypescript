import styled from "styled-components"


const Logotipo = styled.h1`
    padding-left: .5rem;
    font-size: 1.2rem;
    font-weight: 600;
    &::before {
        content: url(/imageLogo/logo.png);
        margin-right: .5rem;
    }  
    span {
       color: green;
    }
`

export const Logo = () => {
    return(
      <Logotipo>Web<span>Tech</span></Logotipo>
    );
};