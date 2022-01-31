import { Icon, Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import EVENTS from "../events";
import { socket } from "../Socket";

function Status() {
	const [isConnected, setIsConnected] = useState(socket.connected);

	useEffect(function initSocketEvents() {
		socket.on(EVENTS.ON_CONNECTION, updateConnectionStatus);
		socket.on(EVENTS.ON_DISCONNECT, updateConnectionStatus);

		return function clearSocketHandlers() {
			socket.off(EVENTS.ON_CONNECTION, updateConnectionStatus);
			socket.off(EVENTS.ON_DISCONNECT, updateConnectionStatus);
		};

		/******************************************************/

		function updateConnectionStatus() {
			setIsConnected(socket.connected);
		}
	});

	const status = {
		color: isConnected ? "green.500" : "red.500",
		message: isConnected ? "Active" : "Connection error",
	};
	return (
		<CircleIcon color={status.color} message={status.message} boxSize="4" />
	);
}

function CircleIcon({ color, message }) {
	return (
		<Tooltip label={message}>
			<Icon viewBox="0 0 200 200" color={color}>
				<path
					fill="currentColor"
					d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
				/>
			</Icon>
		</Tooltip>
	);
}

export default Status;
