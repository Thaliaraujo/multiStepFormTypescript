import { ReactNode } from 'react';
import styled from "styled-components";

const Title = styled.h2 `
    margin: 0 0 .5rem .5rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2.rem;
`
export const Titles = ({children}: { children: ReactNode }) => {
    return (
        <div>
            <Title>{children}</Title>
        </div>
    );
};