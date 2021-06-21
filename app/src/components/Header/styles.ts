import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 16px 40px;

  header {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 72px;
      width: auto;
    }

    nav {
      a {
        color: #00458e;
        font-weight: 700;
        text-decoration: none;
        font-size: 18px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
