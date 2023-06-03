import styled, { css } from "styled-components";
// import { Button } from "./Button";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariants
}

const buttonVariants = {
    primary: "purple",
    secondary: "orange",
    danger: "red",
    success: "green"
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height:40px ;

    border-radius: 8px;
    border: 0;
    margin: 8px;

    background-color: ${ props => props.theme.primary };
    color: ${ props => props.theme.white };

    /* ${props => {
        return css
        `background-color: ${buttonVariants[props.variant]}` 
    }} */
`

