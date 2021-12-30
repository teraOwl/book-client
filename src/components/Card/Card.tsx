import Loader from "../Loader/Loader";
// import Tabs from "./Tabs";
import { Download } from "../DownloadBtn/Download";
import { useSocket } from "../../hooks/useSocket/useSocket";
import { SocketContext } from "../../context/socket";
import { DownloadedNotification } from "../DownloadedNotification/DownloadedNotification";
import Cover from "../Cover/Cover";
import { CardWrapper } from "./Card.styled";

type ObjectStrings = {
    [key:string]:string
}
const Card = ({bookCover,bookName,bookUrl}:ObjectStrings) => {
    //https://booksvooks.com/scrolablehtml/merles-door-lessons-from-a-freethinking-dog-pdf.html testing client
    //https://booksvooks.com/fullbook/timekeeper-pdf-tara-sim.html valid book
    const [socket, setSocket, progress, setProgress, showDownloaded, setShowDownloaded] =
        useSocket();
    console.log(showDownloaded);
    return (
        <CardWrapper>
            <SocketContext.Provider
                value={{
                    progress,
                    setSocket,
                    setProgress,
                    showDownloaded,
                    setShowDownloaded,
                    socket
                }}
            >
                 <DownloadedNotification showDownloaded={showDownloaded}/>
                <Cover url={bookCover}/>
                <h2>{bookName}</h2>
                <Download urlBook={bookUrl}/>
                <Loader />

            </SocketContext.Provider>
        </CardWrapper>
    );
};

export default Card;
