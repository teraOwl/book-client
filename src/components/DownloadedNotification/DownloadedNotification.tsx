import { memo } from "react";
import { Notification } from "./DownloadedNotification.styled";

export const DownloadNotifications = memo(({notification = ""}:{notification:string}) => {
    return <Notification notification={notification}>{notification}</Notification>;
});
