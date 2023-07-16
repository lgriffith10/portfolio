import { HTMLAttributes } from "react";
import { StText, variants } from './Text.styled';

export interface IText extends HTMLAttributes<HTMLParagraphElement> {
  children?: React.ReactNode
  variant: variants,
  as?: string,
}

export const Text: React.FC<IText> = (props) => {
  const { children, ...rest } = props; 
  
  return (
    <StText {...rest}>
      {children}
    </StText>
  )
};
