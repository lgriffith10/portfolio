import { StButton } from './Button.styled';

export interface ButtonProps {
  onClick: () => void,
  background?: string,
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, ...rest}) => {
  return (
    <StButton {...rest}>
      {children}
    </StButton>
  )
}
