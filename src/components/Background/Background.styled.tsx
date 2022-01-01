import styled from "styled-components";

export const BackgroundWrapper = styled.div`
    content: "";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    background: url("./assets/background/background.svg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    min-height: 100%;
    position: fixed;
    width: 100%;
`;
