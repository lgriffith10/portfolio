import styled from 'styled-components';
import { variant } from 'styled-system';
import type { IHeading } from './Heading';
import tokens from '@/tokens';

export const StHeading = styled('div')<IHeading>(
  variant({
    variants: {
      primary: {
        color: tokens.colors.black.DEFAULT,
        fontSize: '6rem',
        fontFamily: tokens.fonts.bebas
      }
    }
  })
);

export type variants = 'primary'
