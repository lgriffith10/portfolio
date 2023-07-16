import { ReactNode, HTMLAttributes } from 'react';
import { StPage } from './Page.styled';

export interface IPage extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  background?: 'black' | 'white'
}

export const Page: React.FC<IPage> = ({ children, ...rest }) => {
  return (
    <StPage {...rest}>
      {children}
    </StPage>
  )
}