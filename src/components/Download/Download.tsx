import { createSocket } from "../../helpers/createSocket";
import { useCallback, useContext } from "react";
import { SocketContext } from "../../context/socket";
import { Form } from "./Download.styled";
import { useForm } from "../../hooks/useForm/useForm/useForm";

export const Download = () => {

    const [urlValue, handleUrlInputChange] = useForm({
        urlBook: "https://booksvooks.com/fullbook/timekeeper-pdf-tara-sim.html"
    });

    const { urlBook } = urlValue;

    const { setSocket, setProgress, progress } = useContext(SocketContext);
    
    const submitForm = useCallback((e)  => {
        const newSocket = createSocket();
        setSocket(newSocket);
        setProgress(0);
        e.preventDefault();
        newSocket.emit("message", urlBook);
    }, [setProgress, setSocket, urlBook]);

    return (
        <Form onSubmit={submitForm}>
            <input
                autoFocus
                name="urlBook"
                value={urlBook} 
                placeholder="Paste book url"
                onChange={ handleUrlInputChange}
            />
            <button disabled={progress > 0}>Download</button>
        </Form>
    );
};
