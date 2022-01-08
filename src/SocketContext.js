import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("ws://localhost:3001", {
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
