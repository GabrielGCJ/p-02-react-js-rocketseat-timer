import { ButtonContainer } from "./ButtonStyles"

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
}

export const Button = ({variant = "primary"} : ButtonProps) => {



    return (

        <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    )
}