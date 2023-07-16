import { ReactNode, HTMLAttributes } from 'react';
import { StPage } from './Page.styled';

export interface IPage extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Page: React.FC<IPage> = ({ children }) => {
  return (
    <StPage>
      {children}
    </StPage>
  )
}