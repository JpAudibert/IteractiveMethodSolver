import styled from 'styled-components';

export const Container = styled.header`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 16px 32px;

  img {
    height: 72px;
    width: auto;
  }
`;

export const HeaderLinks = styled.div`
  font-size: 18px;
  color: #00458e;
  text-decoration: none;
  flex: 1;
  width: 100%;

  &:hover {
    text-decoration: underline;
  }
`;
