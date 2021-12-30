import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export const useSocket = () => {
    const [newSocket, setSocket] = useState<Socket>();
    const [progress, setProgress] = useState(0);
    const [showDownloaded, setShowDownloaded] = useState(false);
    
    const messageListener = (message: string) => {
        console.log(message);
        const url = window.URL.createObjectURL(new Blob([message]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
        setShowDownloaded(true);
        setTimeout(() => setShowDownloaded(false), 5000);
        setProgress(0);
    };
    
    useEffect(() => {
        if (newSocket) {
            console.log("socket created");
            newSocket.on("message", messageListener);
            newSocket.emit("getMessages");
        }
    }, [newSocket]);
    
    return [newSocket, setSocket, progress, setProgress, showDownloaded, setShowDownloaded] as const; // useSocket:(Socket | Dispatch<Socket> | Dispatch<SetStateAction<number>> | boolean );
};
