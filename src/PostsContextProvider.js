import { useLiveQuery } from "dexie-react-hooks";
import { createContext, useContext } from "react";
import { db } from "./db";

const PostsContext = createContext();

function PostsContextProvider({ children }) {
	const posts = useLiveQuery(function loadPosts() {
		return db.posts.toArray();
	});

	console.log(posts);

	return (
		<PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
	);
}

function usePost() {
	const posts = useContext(PostsContext);
	if (!posts) {
		return false;
	}

	return posts;
}

export { usePost, PostsContextProvider };
