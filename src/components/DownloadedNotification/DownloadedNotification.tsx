import { useContext, useState } from "react";
import { SocketContext } from "../../context/socket";
import { Notification } from "./DownloadedNotification.styled";

export const DownloadNotifications = () => {
    const { socket } = useContext(SocketContext);
    const [notification, setNotification] = useState("");
    if (socket?.connected) {
        socket.on("fetchingImages", (message:string) => {
            setNotification(message);
        });

        socket.on("message", () => {
            setNotification("Downloaded!");
        });
        socket.on("disconnect",() =>{
            setTimeout(() => setNotification(""), 5000);
        })
    }

    return <Notification notification={notification}>{notification}</Notification>;
};
