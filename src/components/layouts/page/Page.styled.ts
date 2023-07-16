import { styled } from 'styled-components';
import type { IPage } from './Page';
import tokens from '@/tokens';

export const StPage = styled('div')<IPage>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ background }) => background === 'black' ? 
    tokens.colors.black.DEFAULT : tokens.colors.white.DEFAULT
  };
`;
