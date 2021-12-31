import { createContext } from 'react'

import { Socket } from 'socket.io-client';


interface SocketContextType {
    progress: number;
    setSocket: (React.Dispatch<React.SetStateAction<Socket | undefined>> );
    setProgress: (React.Dispatch<React.SetStateAction<number>>);
    socket: Socket | undefined;
}

let initialSocketContext: SocketContextType = { 
    progress: 0,
    setSocket: () => {},
    setProgress: () => {},
    socket: undefined
};

export const SocketContext = createContext(initialSocketContext);