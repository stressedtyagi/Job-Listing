import { socket } from "./Socket";
import { db } from "./db";
import EVENTS from "./events";

socket.on(EVENTS.CLIENT_POST_UPDATE, updateLocalDB);

async function updateLocalDB(data) {
    const id = await db.posts.add(data);
    const customEvent = new CustomEvent("DB Update", { detail: id });
    document.dispatchEvent(customEvent);
    console.log(`Post saved in DB | id: ${id}`);
}
