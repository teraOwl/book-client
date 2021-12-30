import styled from "styled-components";

type NotificationProps = {
    showDownloaded: boolean;
};

export const Notification = styled.p<NotificationProps>`
    opacity: ${({ showDownloaded }) => (showDownloaded ? 1 : 0)};
    color: green;
    transition: all 1s;
    margin: 0;
    text-align: center;
`;
