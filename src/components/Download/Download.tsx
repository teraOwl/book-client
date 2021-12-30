import { createSocket } from "../../helpers/createSocket";
import { useCallback, useContext } from "react";
import { SocketContext } from "../../context/socket";
import { Form } from "./Download.styled";
import { useForm } from "../../hooks/useForm/useForm/useForm";
import Swal from "sweetalert2";
export const Download = () => {
    const [urlValue, handleUrlInputChange] = useForm({
        urlBook: "https://booksvooks.com/fullbook/timekeeper-pdf-tara-sim.html",
    });

    const { urlBook } = urlValue;

    const { setSocket, setProgress, progress } = useContext(SocketContext);

    const submitForm = useCallback(
        (e) => {
            e.preventDefault();
            const newSocket = createSocket();
            setSocket(newSocket);
            newSocket.on("exceed", (message) => {
                Swal.fire("Book couldn't be downloaded", message, "info");
            });
            newSocket.on("error", (message) => {
                Swal.fire({
                    title: message,
                    html: `check <a target="_blank" href="http://booksvooks.com">booksvooks</a> to read it online`,                    
                    icon: "error",
                });
            });
            setProgress(0);
            newSocket.emit("message", urlBook);
        },
        [setProgress, setSocket, urlBook]
    );

    return (
        <Form onSubmit={submitForm}>
            <input
                autoFocus
                name="urlBook"
                value={urlBook}
                placeholder="Paste book url"
                onChange={handleUrlInputChange}
            />
            <button disabled={progress > 0}>Download</button>
        </Form>
    );
};
