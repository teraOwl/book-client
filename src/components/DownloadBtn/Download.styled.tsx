import styled from "styled-components";

export const DownloadBtn = styled.button`
    background: #211709c2;
    width: 100%;
    color: white;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.3em;
    &:hover {
        box-shadow: inset rgb(85 248 105) 0px 0px 9px 0px, rgb(0 0 0) 0px 0px 5px 4px;
        background: #2d444654;
    }
    &:disabled {
        color: red;
    }
`;
