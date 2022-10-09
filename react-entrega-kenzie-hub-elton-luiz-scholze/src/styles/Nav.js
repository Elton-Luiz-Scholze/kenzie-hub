import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  height: 60px;
  margin: 0 auto;

  img {
    height: 20px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 30px;
    background-color: var(--background-form-btn-header);
    color: var(--texts);
    border-radius: 8px;
    transition: 0.5s;

    &:hover {
      background-color: var(--text-info);
    }
  }
`;
