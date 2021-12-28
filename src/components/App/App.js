import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Messages from '../messageReceiver/Messages.js';
import MessageInput from '../messageInput/MessageInput.js';
import './App.css';

function App() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_API_URL, {
      // WARNING: in that case, there is no fallback to long-polling
      transports: [ "websocket" ], // or [ "websocket", "polling" ] (the order matters)
      withCredentials: true
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);


  return (
    <div className="App">
      { socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default App;
