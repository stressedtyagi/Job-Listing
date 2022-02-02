import { db } from "./db";

const utils = {
	getPosts() {
		return db.posts.toArray();
	},
};

export default utils;
