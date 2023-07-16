import { StButton } from './Button.styled';

export interface IButton {
  onClick: () => void,
  background?: 'black' | 'white',
  children?: React.ReactNode
}

export const Button: React.FC<IButton> = ({ children, ...rest}) => {
  return (
    <StButton {...rest}>
      {children}
    </StButton>
  )
}
