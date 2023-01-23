import styled from 'styled-components';

export const ListStyled = styled.ul`
  font-family: ${p => p.theme.fonts.body};
  margin-top: 8px;
  margin-bottom: 0;
  padding-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const ListItemStyled = styled.li`
  padding: 4px 4px 4px 0;
`;
