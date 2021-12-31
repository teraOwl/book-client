import Loader from "../DownloadLoader/Loader";
import { Download } from "../DownloadBtn/Download";
import { useSocket } from "../../hooks/useSocket/useSocket";
import { SocketContext } from "../../context/socket";
import { DownloadNotifications } from "../DownloadedNotification/DownloadedNotification";
import Cover from "../Cover/Cover";
import { CardWrapper } from "./Card.styled";

type ObjectStrings = {
    [key: string]: string;
};
const Card = ({ bookCover, bookName, bookUrl }: ObjectStrings) => {
    const [socket, setSocket, progress, setProgress] =
        useSocket();
    return (
        <CardWrapper className="ld ld-fade-in">
            <SocketContext.Provider
                value={{
                    progress,
                    setSocket,
                    setProgress,
                    socket,
                }}
            >
                <Cover url={bookCover} />
                <h2>{bookName}</h2>
                <Download urlBook={bookUrl} />
                <Loader />
                <DownloadNotifications />
            </SocketContext.Provider>
        </CardWrapper>
    );
};

export default Card;
