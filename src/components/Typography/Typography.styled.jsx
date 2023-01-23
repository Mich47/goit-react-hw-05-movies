import styled from 'styled-components';
import { typography } from 'styled-system';

export const MainTitleStyled = styled.h1`
  font-size: ${p => p.theme.fontSizes.m};
  text-transform: uppercase;
  color: ${p => p.theme.colors.primary};
  margin: ${p => p.theme.space[0]}px;
  ${typography}
`;

export const TitleStyled = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  margin: ${p => p.theme.space[0]}px;

  ${typography}
`;

export const SubTitleStyled = styled.h3`
  font-size: ${p => p.theme.fontSizes.m};
  margin: ${p => p.theme.space[0]}px;
  ${typography}
`;

export const TextStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  margin: 0;
  ${typography}
`;
