import styled from "styled-components";

export const AppWrapper = styled.div`

    background: url("./assets/background/background.svg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    &:after {
        content: "";
        position: fixed; /* stretch a fixed position to the whole screen */
        top: 0;
        height: 100vh; /* fix for mobile browser address bar appearing disappearing */
        left: 0;
        right: 0;
        z-index: -1; /* needed to keep in the background */
        background: url("./assets/background/background.svg")  center center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    min-height: 100%;
    
    padding: 30px;
    * {
        box-sizing: border-box;
    }
`;
