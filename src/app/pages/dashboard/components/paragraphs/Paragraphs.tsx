import { ReactNode } from 'react';
import styled from "styled-components";

const Paragraph = styled.p `
    color: var(--neutral-600);
    font-size: .7rem;
    line-height: 1.2rem;
`

export const Paragraphs = ({children}: { children: ReactNode }) => {
    return (
        <div>
            <Paragraph>{children}</Paragraph>
        </div>
    );
};