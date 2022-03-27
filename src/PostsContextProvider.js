import { createContext, useContext, useEffect, useState } from "react";
import { db } from "./db";

const PostsContext = createContext();

function PostsContextProvider({ children }) {
	/**
	 * [State]: To manage job notification
	 */
	const [notificationCounter, setNotificationCounter] = useState([]);
	const [highlightedJob, setHighlightedJob] = useState({});

	useEffect(function initChangeListener() {
		// db.posts.hook("creating", increaseCounter);
		document.addEventListener("socket_update", increaseCounter);

		return function cleanUpdateHandler() {
			document.removeEventListener("socket_update", increaseCounter);
		};

		/**
		 * @param event object with detial containing data
		 */

		function increaseCounter({ detail: newObject }) {
			setNotificationCounter((prevObjects) => [
				...prevObjects,
				newObject,
			]);
		}
	});

	function updateHighlightedJob(id) {
		setNotificationCounter([]);
		setHighlightedJob(id);
	}

	return (
		<PostsContext.Provider
			value={{
				notificationCounter: [
					notificationCounter,
					highlightedJob,
					updateHighlightedJob,
					setNotificationCounter,
				],
			}}>
			{children}
		</PostsContext.Provider>
	);
}

/**
 *
 * @returns JobAlert Context
 */
function useJobAlert() {
	const { notificationCounter } = useContext(PostsContext);
	if (!notificationCounter) {
		return false;
	}
	return notificationCounter;
}

export { useJobAlert, PostsContextProvider };
