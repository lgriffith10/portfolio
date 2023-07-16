import { ButtonHTMLAttributes } from 'react';
import { StButton } from './Button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
