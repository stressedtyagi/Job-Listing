import axios from "./axios";
import { db } from "./db";

const utils = {
	async getPosts() {
		const arr = await db.posts.toArray();
		arr.sort((p1, p2) => (p1.createdAt > p2.createdAt ? -1 : 1));
		return arr;
	},

	async getPostsFromServer(last) {
		return await axios.get(`/client/posts?last=${last}`);
	},
};

export default utils;
