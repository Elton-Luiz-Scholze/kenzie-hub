import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;

  & > :nth-child(1) {
    display: flex;
    height: 20px;
    margin: 20px auto;
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  gap: 0.8rem;
  color: var(--texts);
  background-color: var(--background-form-btn-header);


  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
  }

  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: var(--text-info);
  }

  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    width: 90%;
    margin: 0 auto;
  }

  input,
  button {
    box-sizing: border-box;
    width: 90%;
    height: 40px;
    margin: 0 auto;
    border-radius: 8px;
    border: none;
    padding-left: 12px;
    color: var(--texts);
    background-color: var(--grey-2);

    &::placeholder {
      color: var(--text-info);
    }

    &:focus::placeholder {
      color: var(--texts);
    }
  }

  select {
    min-width: 90%;
    height: 30px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: var(--grey-2);
    color: var(--text-info);
    cursor: pointer;

    &:focus {
      color: var(--texts);
    }
  }

  p {
    font-weight: 400;
    font-size: 10px;
    line-height: 10px;
    width: 90%;
    margin: 0 auto 10px auto;
    color: var(--negative);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 40px;
    margin: 0 auto;
    border-radius: 8px;
    color: var(--texts);
    border: none;
    background-color: var(--text-info);
    transition: 0.5s;

    &:hover {
      background-color: var(--grey-2);
    }
  }

  button {
    font-weight: 700;
    margin-bottom: 10px;
    background-color: var(--background-btn-form);
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: var(--background-btn-form-focus);
    }

    &:disabled {
      opacity: 0.5;
    }
  }
`;
