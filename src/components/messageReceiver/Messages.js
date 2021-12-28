import React, { useEffect, useState } from "react";
import "./Messages.css";

function Messages({ socket }) {
    const [progress, setProgress] = useState(0);
    let maxPage = 0;
    useEffect(() => {
        const messageListener = (message) => {
            console.log(message);
            const url = window.URL.createObjectURL(new Blob([message]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "file.pdf"); //or any other extension
            document.body.appendChild(link);
            link.click();
        };

        socket.on("message", messageListener);
        socket.emit("getMessages");
        return () => {
            socket.off("message", messageListener);
        };
    }, [socket]);

    socket.on("maxPage", (message) =>{
        maxPage = message;
    });
    
    socket.on("progress", (message) =>{
        console.log(message/maxPage);
    });

    return (
        <div className="message-list">
            <div className="message-container"></div>
        </div>
    );
}

export default Messages;
