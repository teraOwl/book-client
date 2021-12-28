import styled from "styled-components";

type BarProps = {
    progress: number;
};

export const BarWrapper = styled.div<BarProps>`
    box-shadow: inset rgb(39 255 0) 1px -1px 7px 3px, rgb(255 255 255) 0px 0px 5px 4px;
    height: 100%;
    background: black;
    opacity: 1;
    width: ${({ progress }) => progress * 100}%;
`;