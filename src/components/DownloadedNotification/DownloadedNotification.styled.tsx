import styled from "styled-components";

type NotificationProps = {
    notification: string
};

export const Notification = styled.p<NotificationProps>`
    opacity: ${({ notification }) => notification ? 1 : 0};
    color: ${({ notification }) => notification==="Downloaded!" ? "#a7ff47" : "#ffd747"};
    padding-top: ${({ notification }) => notification ? '0px' : '29px'};
    font-size:24px;
    margin: 0px;
    transition: 1s opacity;
`;
