import { ReactNode } from 'react';
import styled from "styled-components";

const Paragraph = styled.p `
    color: var(--neutral-600);
    font-size: .8rem;
    line-height: 1.8rem;
`

export const Paragraphs = ({children}: { children: ReactNode }) => {
    return (
        <div>
            <Paragraph>{children}</Paragraph>
        </div>
    );
};