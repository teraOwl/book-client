import Loader from "../Loader/Loader";
// import Tabs from "./Tabs";
import { Download } from "../Download/Download";
import { useSocket } from "../../hooks/useSocket/useSocket";
import { SocketContext } from "../../context/socket";
import { DownloadedNotification } from "../DownloadedNotification/DownloadedNotification";

const Card = () => {
    //https://booksvooks.com/scrolablehtml/merles-door-lessons-from-a-freethinking-dog-pdf.html testing client
    //https://booksvooks.com/fullbook/timekeeper-pdf-tara-sim.html valid book
    const [socket, setSocket, progress, setProgress, showDownloaded, setShowDownloaded] =
        useSocket();

    return (
        <>
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
                <Download />
                <Loader />
                {showDownloaded && <DownloadedNotification/>}
            </SocketContext.Provider>
        </>
    );
};

export default Card;
