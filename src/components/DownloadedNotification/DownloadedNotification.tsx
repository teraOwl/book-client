import { Notification } from "./DownloadedNotification.styled";

export const DownloadedNotification = ({ showDownloaded }: { showDownloaded: boolean }) => (
    <Notification showDownloaded={showDownloaded}>
        {console.log(showDownloaded ? 1 : 0 )}
        Downloaded!
    </Notification>
);
