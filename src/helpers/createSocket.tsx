import {io} from "socket.io-client";

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL ?? "http://localhost:3006";

export const createSocket = () => io(SOCKET_URL, {
    // WARNING: in that case, there is no fallback to long-polling
    transports: ["websocket"], // or [ "websocket", "polling" ] (the order matters)
    withCredentials: true,
});