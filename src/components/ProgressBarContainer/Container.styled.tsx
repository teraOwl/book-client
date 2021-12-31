import styled from "styled-components";

type ContainerProps = {
    isSubmitting: boolean;
};

export const ContainerWrapper = styled.div<ContainerProps>`
    opacity: ${({ isSubmitting }) => (isSubmitting ? 1 : 0)};
    box-shadow: inset rgb(39 255 0 / 49%) 1px -1px 7px 3px, rgb(255 255 255) 0px 0px 5px 4px;
    background: #ffffff00;
    height: 24px;
    overflow: hidden;
    margin-top: 10px;
`;
