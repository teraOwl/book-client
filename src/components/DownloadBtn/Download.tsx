import { createSocket } from "../../helpers/createSocket";
import { DownloadBtn } from "./Download.styled";
import { Socket } from "socket.io-client";

type TypeDownload = {
    bookUrl: string;
    progress: number;
    setSocket: React.Dispatch<React.SetStateAction<Socket | undefined>>

}

export const Download = ({ bookUrl = "", progress = 0, setSocket }:TypeDownload) => {
    const downloadBook =() => {
        setSocket((socket) => {
            socket = createSocket();
            socket.emit("message", bookUrl);
            return socket;
        });
    };

    return (
        <DownloadBtn disabled={progress > 0} onClick={downloadBook}>
            Download!
        </DownloadBtn>
    );
};
