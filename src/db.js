import Dexie from "dexie";

const db = new Dexie("postsDB");

db.version(1).stores({
	posts: "&id, createdAt",
});

export { db };
