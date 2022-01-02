import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { showSwalError, showSwalExceed } from "../../components/Swal/Swal";

export const useSocket = (bookName:string, bookUrl:string) => {
    
    const [socket, setSocket] = useState<Socket>();

    const [progress, setProgress] = useState(0);
    const [notification, setNotification] = useState("");
    const [downloading, setDownloading] = useState(false);

    useEffect(() => {
        if (socket) {
            setDownloading(true);
            socket.emit("message", bookUrl);

            socket.on("exceed", (message) => {
            showSwalExceed (message);
            setDownloading(false);
        });
            
            socket.on("error", (message) => {
                showSwalError(message);
                setProgress(0);
                setDownloading(false);
            });

            let maxPage = 0;
            socket.on("maxPage", (message) => {
                maxPage = message;
            });
            
            socket.on("progress", (message) => {
                if (maxPage) {
                    setProgress(message / maxPage);
                }
            });

            socket.on("message", function (this:Socket,message:string) {
                sendBookToClient(message);
                setProgress(0);
                setNotification("Downloaded!");
                setDownloading(false);
            });

            socket.on("processing", (message: string) => {
                setNotification(message);
            });

            socket.on("disconnect", () => {
                setTimeout(() => setNotification(""), 5000);
            });
            
            const sendBookToClient = function (this:void, message:string) {
                const url = window.URL.createObjectURL(new Blob([message]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `${bookName}.pdf`);
                document.body.appendChild(link);
                link.click();
            };

        }

    }, [socket,bookName,bookUrl]);


    return  [progress,setSocket,notification, downloading] as const; 
};
