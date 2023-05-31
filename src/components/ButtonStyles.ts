import styled from "styled-components";
import { Button } from "./Button";

type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
    variant: ButtonVariants
}

export const ButtonContainer = styled.button`
    width: 100px;
    height:40px ;
`