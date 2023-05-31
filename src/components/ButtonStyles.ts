import styled, {css} from "styled-components";
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

    background-color: ;

    ${props => {
        return css
        `background-color: ${buttonVariants[props.variant]}` 
    }}
`

