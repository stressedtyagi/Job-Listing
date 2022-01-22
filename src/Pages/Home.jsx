import { useEffect, useContext } from "react";
import { SocketContext } from "../SocketContext";
import EVENTS from "../events";

function Home() {
	const socket = useContext(SocketContext);

	useEffect(() => {
		socket.on(EVENTS.CLIENT_POST_UPDATE, (data) => {
			console.log("Hello");
			console.log(data);
		});
	});

	return (
		<>
			<div>Home route</div>
		</>
	);
}

export default Home;