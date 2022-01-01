import styled from "styled-components";

export const SearchForm = styled.form`
    input {
        width: 100%;
        padding: 0.5rem;
        text-align: center;
        background: hsl(19deg 31% 18% / 76%);
    }
    input:focus {
        outline: none;
        box-shadow: rgb(0 0 0) 0px 0px 5px 4px;
        background: #02466000;
    }
    input::-webkit-input-placeholder {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
    input::placeholder,
    input {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }

    button {
        background: hsl(19deg 31% 18% / 76%);
        font-weight: bold;
        color: white;
        width: 100%;
        cursor: pointer;
        font-size: 16px;
    }
    button,
    input {
        border: 3px inset #b67e4f;
        margin: 2px;
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
