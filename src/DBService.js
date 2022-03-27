import { socket } from "./Socket";
import { db } from "./db";
import EVENTS from "./events";

socket.on(EVENTS.CLIENT_POST_UPDATE, updateLocalDB);

async function updateLocalDB(data) {
	const id = await db.posts.add(data);
	const socketUpdateEvent = new CustomEvent("socket_update", {
		detail: data,
	});
	document.dispatchEvent(socketUpdateEvent);
}
