import { createSocket } from "../../helpers/createSocket";
import { DownloadBtn } from "./Download.styled";
import { Socket } from "socket.io-client";
import { useCallback } from "react";

type TypeDownload = {
    downloading: boolean;
    setSocket: React.Dispatch<React.SetStateAction<Socket | undefined>>;
};

export const Download = ({ downloading, setSocket }: TypeDownload) => {
    const downloadBook = useCallback(() => {
        setSocket(createSocket());
    },[setSocket]);

    return (
        <DownloadBtn disabled={downloading} onClick={downloadBook}>
            Download!
        </DownloadBtn>
    );
};
