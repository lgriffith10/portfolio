import { styled, css } from 'styled-components';
import tokens from '@/tokens';
import type { IButton } from '@/components/buttons/Button/Button';

export const StButton = styled('a')<IButton>`
  position: relative;
  z-index: 10;
  font-size: 2rem;
  position: relative;
  padding: 0.5rem 1rem;
  font-family: ${() => tokens.fonts.hind};
  text-transform: uppercase;
  ${({ background }) => background === 'black' ?
    css`
      background-color: ${() => tokens.colors.black.DEFAULT};
      color: ${() => tokens.colors.white.DEFAULT};
    ` : css`
      background-color: ${() => tokens.colors.white.DEFAULT};
      color: ${() => tokens.colors.black.DEFAULT};
      border: solid 0.2rem ${() => tokens.colors.black.DEFAULT};
    `
  };


  &::before, &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
  }

  &::after {
    z-index: -1;
    width: 0%;
    height: 100%;
    transition: all ease 0.3s;
  }

  &::before {
    height: 110%;
    width: 103%;
    border: solid 0.2rem ${({ background }) => background === 'black' ? 
      tokens.colors.white.DEFAULT : tokens.colors.black.DEFAULT
    };
    transform: translateX(-0.5rem) translateY(-0.2rem);
  }

  &:hover {
    color: ${({ background }) => background === 'black' ?
      tokens.colors.black.DEFAULT : tokens.colors.white.DEFAULT
    };

    &::after {
      width: 100%;
      background-color: ${({ background }) => background === 'black' ?
        tokens.colors.white.DEFAULT : tokens.colors.black.DEFAULT
      }
    }
  }
`;
