import axios from "./axios";
import { db } from "./db";

const utils = {
	getPosts() {
		return db.posts.toArray();
	},

	async getPostsFromServer(last) {
		return await axios.get(`/client/posts?last=${last}`);
	},
};

export default utils;
