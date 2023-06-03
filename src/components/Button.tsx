import { ButtonContainer, ButtonVariants } from './ButtonStyles'

interface ButtonProps {
  variant?: ButtonVariants
}

export const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
