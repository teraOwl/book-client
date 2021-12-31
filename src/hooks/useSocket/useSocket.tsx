import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export const useSocket = () => {
    const [newSocket, setSocket] = useState<Socket>();
    const [progress, setProgress] = useState(0);

    
    const messageListener = function (this: any, message: string)  {
        const url = window.URL.createObjectURL(new Blob([message]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf"); //or any other extension
        document.body.appendChild(link);
        link.click();
        setProgress(0);
        console.log(this);
        
    };
    
    useEffect(() => {
        if (newSocket) {
            newSocket.on("message", messageListener);
            newSocket.emit("getMessages");
        }
    }, [newSocket]);
    
    return [newSocket, setSocket, progress, setProgress] as const; // useSocket:(Socket | Dispatch<Socket> | Dispatch<SetStateAction<number>> | boolean );
};
