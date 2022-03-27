import Dexie from "dexie";
import utils from "./utils";

const db = new Dexie("postsDB");

db.version(1).stores({
    posts: "&id, createdAt",
});

(async function updateLocalDB() {
    const latestTimestamp = await getLatestTimestamp();
    // console.log(latestTimestamp);
    const newPosts = await utils.getPostsFromServer(latestTimestamp);
    // console.log(newPosts);
    await db.posts.bulkAdd(newPosts.data.posts);
})();

async function getLatestTimestamp() {
    let posts = await db.posts.toArray();
    posts = posts.sort((a, b) => {
        const d1 = new Date(a.createdAt);
        const d2 = new Date(b.createdAt);
        return d1 > d2 ? 1 : -1;
    });
    const lastPost = posts.length > 0 ? posts[posts.length - 1] : {};
    return lastPost.createdAt || "new";
}

export { db };
