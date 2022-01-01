import styled from "styled-components";

export const PageLoaderWrapper = styled.div`
    margin: auto;
    background: rgba(241, 242, 243, 0);
    display: block;

    .backgroundHolder-1 {
        background: url("./assets/loader/loader.svg") no-repeat;
        background-size: 28%;
        background-position: center;
        min-height: 16vh;
    }
    .backgroundHolder-2 {
        background: url("./assets/loader/loader2.svg") no-repeat;
        background-size: contain;
        background-position: center;
        height: 35vh;
    }
`;
