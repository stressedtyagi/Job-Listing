import { socket } from "./Socket";
import EVENTS from "./events";

socket.on(EVENTS.CLIENT_POST_UPDATE, updateLocalDB);

function updateLocalDB(data) {}
