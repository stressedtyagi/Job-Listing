import { io } from "socket.io-client";

let socket = io("ws://radiant-dusktg.herokuapp.com/", {
	transports: ["websocket"],
	query: {
		id: 1,
	},
});

export { socket };
