import styled from "styled-components";

export const DownloadBtn = styled.button`
    box-shadow: inset rgb(95 59 31) 0px 0px 9px 0px, rgb(175 247 109) 0px 0px 5px 4px;
    background: #35291a;
    color: lightyellow;
    width: 100%;
    &:hover {
        box-shadow: inset rgb(43 241 67) 0px 0px 9px 0px, rgb(255 255 255) 0px 0px 5px 4px;
        background: #79aa46;
    }
    &:disabled {
        color: red;
    }
`;
