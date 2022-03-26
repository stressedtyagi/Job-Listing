import Dexie from "dexie";
import utils from "./utils";

const db = new Dexie("postsDB");

db.version(1).stores({
	posts: "&id, createdAt",
});

(async function updateLocalDB() {
	const latestTimestamp = await getLatestTimestamp();
	const newPosts = await utils.getPostsFromServer(latestTimestamp);
	await db.posts.bulkAdd(newPosts.data.posts);
})();

async function getLatestTimestamp() {
	const posts = await db.posts.toArray();
	const lastPost = posts.length > 0 ? posts[posts.length - 1] : {};
	return lastPost.createdAt || "new";
}

export { db };
