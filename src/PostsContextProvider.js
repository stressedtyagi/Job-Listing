import { createContext, useContext, useEffect, useState } from "react";
import { db } from "./db";

const PostsContext = createContext();

function PostsContextProvider({ children }) {
	/**
	 * [State]: To manage job notification
	 */
	const [notificationCounter, setNotificationCounter] = useState([]);

	useEffect(function initChangeListener() {
		db.posts.hook("creating", increaseCounter);

		return function cleanUpdateHandler() {
			db.posts.hook("creating").unsubscribe(increaseCounter);
		};

		/**
		 *
		 * @param {primary key of to be added row} primKey
		 * @summary updates jobAlert from null -> primKey
		 */
		function increaseCounter(primKey) {
			setNotificationCounter((prvsKeys) => [...prvsKeys, primKey]);
		}
	});

	return (
		<PostsContext.Provider
			value={[notificationCounter, setNotificationCounter]}>
			{children}
		</PostsContext.Provider>
	);
}

/**
 *
 * @returns JobAlert Context
 */
function useJobAlert() {
	const jobAlert = useContext(PostsContext);
	if (!jobAlert) {
		return false;
	}
	return jobAlert;
}

export { useJobAlert, PostsContextProvider };
