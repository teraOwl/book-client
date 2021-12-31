import styled from "styled-components";

export const SearchForm = styled.form`
    input {
        width: 100%;
        padding: 0.5rem;
        text-align: center;
        background: hsl(19deg 31% 18% / 76%);
    }
    input::placeholder {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
    input:focus-visible {
        outline: none;
        box-shadow: rgb(0 0 0) 0px 0px 5px 4px;
        background: #02466000;
    }
    button {
        background: hsl(19deg 31% 18% / 76%);
        font-weight: bold;
        color: white;
        width: 100%;
        cursor: pointer;
        font-size: 16px;
    }
    button:hover,
    button:active {
        box-shadow: rgb(0 0 0) 0px 0px 5px 4px;
        background: #02466000;
    }
    button:disabled {
        color: red;
    }
`;
