import { createContext } from 'react'

import { Socket } from 'socket.io-client';


interface SocketContextType {
    progress: number;
    setSocket: (React.Dispatch<React.SetStateAction<Socket | undefined>> );
    setProgress: (React.Dispatch<React.SetStateAction<number>>);
    showDownloaded: boolean;
    setShowDownloaded: (showDownloaded: boolean) => any;
    socket: Socket | undefined;
}

let initialSocketContext: SocketContextType = { 
    progress: 0,
    setSocket: () => {},
    setProgress: () => {},
    showDownloaded: false,
    setShowDownloaded: () => {},
    socket: undefined
};

export const SocketContext = createContext(initialSocketContext);