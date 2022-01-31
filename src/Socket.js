import { io } from "socket.io-client";

let socket = io("ws://radiant-dusktg.herokuapp.com/", {
	transports: ["websocket", "polling", "flashsocket"],
	query: {
		id: 1,
	},
});

export { socket };
