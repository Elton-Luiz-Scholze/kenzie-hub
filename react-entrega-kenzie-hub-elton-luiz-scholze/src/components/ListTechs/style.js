import styled from "styled-components";

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  height: 40px;
  background-color: var(--background-page);
  border-radius: 8px;

  h3 {
    font-weight: 700;
    font-size: 14px;
    color: var(--texts);
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;

    p {
      font-weight: 400;
      font-size: 12px;
      color: var(--text-info);
    }

    & > button {
      display: none;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        height: 30px;
        width: 30px;
        border: none;
        background-color: transparent;
        color: var(--texts);
      }
    }
  }
`;
