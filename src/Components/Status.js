import { Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EVENTS from "../events";
import { useSocket } from "../SocketContext";

//TODO:: Error boundary for useSocket

function Status() {
	const socket = useSocket();
	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(function initConnectionListener() {
		socket.on(EVENTS.ON_DISCONNECT, disconnectionHandler);

		return function removeConnectionListener() {
			socket.off(EVENTS.ON_DISCONNECT, disconnectionHandler);
		};

		function disconnectionHandler() {
			setIsConnected(socket.connected);
		}
	});

	const color = isConnected ? "green.500" : "red.500";
	return <CircleIcon color={color} boxSize="4" />;
}

function CircleIcon(props) {
	return (
		<Icon viewBox="0 0 200 200" {...props}>
			<path
				fill="currentColor"
				d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
			/>
		</Icon>
	);
}

export default Status;
