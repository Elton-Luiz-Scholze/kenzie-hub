import styled from "styled-components";

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 600px;
  margin: 16px auto;
  padding: 16px;
  gap: 1rem;
  color: #817977;
  background-color: #1b1d1e;

  h2 {
    text-align: center;
    line-height: 16px;
    font-size: 1.5rem;
  }

  p {
    font-size: 12px;
    line-height: 12px;
    text-align: center;
  }

  label {
    line-height: 12px;
    width: 90%;
    margin: 0 auto;
  }

  input,
  button {
    width: 90%;
    height: 30px;
    margin: 0 auto;
    border-radius: 8px;
    color: #c6c8d2;
    border: 1px solid #514d4c;
    background-color: #1b1d1e;
  }

  input::placeholder {
    color: #514d4c;
  }

  select {
    min-width: 90%;
    height: 30px;
    margin: 0 auto;
    border-radius: 8px;
    background-color: #1b1d1e;
    color: #ffffff;
  }

  a {
    text-decoration: none;
    text-align: center;
    width: 90%;
    height: 30px;
    margin: 0 auto;
    border-radius: 8px;
    color: #c6c8d2;
    border: 1px solid #514d4c;
    background-color: #1b1d1e;
  }
`;
