import { styled } from 'styled-components';
import { variant } from 'styled-system';
import tokens from '@/tokens';

export const StText = styled('p')(
  {
    fontFamily: tokens.fonts.hind,
  },
  variant({
    variants: {
      primary: {
        fontSize: '2rem',
        color: tokens.colors.black.DEFAULT,
      },
      description: {
        fontSize: '9rem',
        color: tokens.colors.blue.lightest
      }
    }
  })
);

export type variants = 'primary' | 'description'
