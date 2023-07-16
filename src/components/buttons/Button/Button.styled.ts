import { styled } from 'styled-components';
import tokens from '@/tokens';

export const StButton = styled('a')(
  {
    fontFamily: tokens.fonts.hind,
    border: 'solid 2px',
    borderColor: tokens.colors.black.DEFAULT,
    fontSize: '2rem',
    padding: '0.5rem 1rem'
  }
);

export type variants = 'primary' | 'secondary'
