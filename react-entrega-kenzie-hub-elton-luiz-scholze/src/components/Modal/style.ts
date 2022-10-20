import styled from "styled-components";

export const ModalStyle = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    z-index: 20;
    background-color: rgb(0 0 0 / 50%);

    & > :nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 40px;
        margin: 0;
        max-width: 600px;
        background-color: var(--grey-2);

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 85%;
            height: 40px;
            background-color: var(--grey-2);

            h3 {
                font-weight: 700;
                font-size: 15px;
                color: var(--texts);
            }

            button {
                font-size: 18px;
                border: none;
                background-color: transparent;
                color: var(--text-info);
                cursor: pointer;
            }
        }
  }
`