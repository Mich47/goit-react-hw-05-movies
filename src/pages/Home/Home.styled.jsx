import styled from 'styled-components';

export const TitleStyled = styled.h1`
  font-size: ${p => p.theme.fontSizes.m};
  /* text-transform: capitalize; */
  /* text-align: center; */
  margin: ${p => p.theme.space[0]}px;
  /* margin-bottom: ${p => p.theme.space[4]}px; */
`;

export const TextStyled = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  margin: 0;
`;
