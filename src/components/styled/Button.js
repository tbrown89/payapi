import styled, { css } from "styled-components";

export const Button = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: var(--font-body);
    font-size: .9375rem;
    font-weight: 700;
    height: 3rem; // 48px
    padding: 0 1.5rem;
    outline: none;
    border-radius: 1.5rem; // 24px

    &:hover { cursor: pointer; }

    ${props => props.primary && css`
        border: none;
        color: var(--color-light);
        background-color: var(--color-primary);

        &:hover { background-color: var(--color-primary-active); }
    `}

    ${props => props.secondary && css`
        border: 1px solid var(--color-light);
        color: var(--color-light);
        background-color: transparent;

        &:hover {
            color: var(--color-dark);
            background-color: var(--color-light);
        }
    `}
`;