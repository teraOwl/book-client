import Loader from "../DownloadLoader/Loader";
import { Download } from "../DownloadBtn/Download";
import { DownloadNotifications } from "../DownloadedNotification/DownloadedNotification";
import Cover from "../Cover/Cover";
import { CardWrapper } from "./Card.styled";
import { useSocket } from "../../hooks/useSocket/useSocket";
import { memo } from "react";

type ObjectStrings = {
    [key: string]: string;
};
const Card = memo(({ bookCover, bookName, bookUrl }: ObjectStrings) => {
    const [progress,setSocket,notification] =  useSocket(bookName);

    return (
        <CardWrapper className="ld ld-fade-in">
            <Cover url={bookCover} />
            <h2>{bookName}</h2>
            <Download bookUrl={bookUrl} progress={progress} setSocket={setSocket} />
            <Loader progress={progress} />
            <DownloadNotifications notification={notification} />
        </CardWrapper>
    );
});

export default Card;
