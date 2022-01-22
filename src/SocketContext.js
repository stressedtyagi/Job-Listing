import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("ws://radiant-dusktg.herokuapp.com/", {
    transports: ['websocket', 'polling', 'flashsocket'],
    query: {
        id: 1,
    },
});

export const SocketContext = createContext();

export function SocketContextProvider({ children }) {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
