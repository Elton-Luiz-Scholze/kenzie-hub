import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90px;
  border-top: 1px solid var(--grey-2);
  border-bottom: 1px solid var(--grey-2);

  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    max-width: 1000px;
    margin: 0 auto;

    h2 {
      font-weight: 700;
      font-size: 18px;
    }

    p {
      font-weight: 400;
      font-size: 12px;
      color: var(--text-info);
    }
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;

  div {
    display: none;

    h2 {
      font-weight: 700;
      font-size: 18px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
    }

    @media (min-width: 768px) {
      & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 90%;
        max-width: 1000px;
        height: 100%;
        margin-top: 20px;
        gap: 20px;
      }
    }
  }
`;
