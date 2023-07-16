import { HTMLAttributes } from 'react';
import { StHeading, variants } from './Heading.styled';

export interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  children?: React.ReactNode
  variant: variants,
  as?: string
}

export const Heading: React.FC<IHeading> = (props) => {
  const {children, ...rest} = props;

  return (
    <StHeading {...rest}>
      {children}
    </StHeading>
  )
}
