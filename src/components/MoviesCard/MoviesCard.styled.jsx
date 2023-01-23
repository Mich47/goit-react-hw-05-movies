import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  // justifyContent: 'center',
  // alignItems: 'center',
  gap: 16px;
`;

export const ImageWrapper = styled.div`
  width: ${p => p.theme.space[10]}px;
`;
export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justifyContent: 'center',
  // alignItems: 'center',
  gap: 16px;
`;
