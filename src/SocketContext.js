import { createContext, useContext } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

const socket = io("ws://radiant-dusktg.herokuapp.com/", {
	transports: ["websocket", "polling", "flashsocket"],
	query: {
		id: 1,
	},
});

function SocketContextProvider({ children }) {
	return (
		<SocketContext.Provider value={socket}>
			{children}
		</SocketContext.Provider>
	);
}

function useSocket() {
	const socket = useContext(SocketContext);
	if (!socket) {
		throw new Error(
			"useSocket should be used inside SocketContextProvider"
		);
	}
	return socket;
}

export { SocketContextProvider, useSocket };
