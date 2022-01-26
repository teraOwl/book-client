import styled from "styled-components";

export const AppWrapper = styled.div`
    background: url("./assets/background/textura-madera.jpg") no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;

    padding: 30px;
    * {
        box-sizing: border-box;
    }

    @media (min-width: 1024px) {
        background: url("./assets/background/background.svg") center center;
        background-size: cover;
        min-height: 93.6vh;
    }
`;
