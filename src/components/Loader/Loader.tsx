import { useContext, useEffect } from "react";
import { SocketContext } from "../../context/socket";
import Container from "../ProgressBarContainer/Container";
import Bar from "../progressBar/Bar";

const Loader: React.FC = () => {
    const { socket, setProgress, progress } = useContext(SocketContext);

    useEffect(() => {
        if (socket) {
            socket.on("maxPage", (message) => {
                maxPage = message;
            });
            let maxPage = 0;
            socket.on("progress", (message) => {
                if (maxPage) {
                    setProgress(message / maxPage);
                }
            });
        }
    }, [socket, progress, setProgress]);

    return (
        <Container isSubmitting={progress > 0}>
            <Bar progress={progress} />
        </Container>
    );
};

export default Loader;
