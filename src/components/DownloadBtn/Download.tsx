import { createSocket } from "../../helpers/createSocket";
import { useCallback, useContext } from "react";
import { SocketContext } from "../../context/socket";
import { DownloadBtn } from "./Download.styled";
import { showSwalError, showSwalExceed } from "../Swal/Swal";
export const Download = ({ urlBook = "" }) => {
    const { setSocket, setProgress, progress } = useContext(SocketContext);
    
    const downloadBook = useCallback(() => {
        const newSocket = createSocket();
        setSocket(newSocket);
        newSocket.on("exceed", showSwalExceed);
        newSocket.on("error", showSwalError);
        
        setProgress(0);
        newSocket.emit("message", urlBook);
    }, [setProgress, setSocket, urlBook]);

    return (
        <DownloadBtn disabled={progress > 0} onClick={downloadBook}>
            Download!
        </DownloadBtn>
    );
};
