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
        db.posts.hook("creating", increaseCounter);

        return function cleanUpdateHandler() {
            db.posts.hook("creating").unsubscribe(increaseCounter);
        };

        /**
         * @param {primary key of to be added row} primKey
         * @summary updates jobAlert from null -> primKey
         */
        function increaseCounter(primKey, newObject) {
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
                highlightedJob: [highlightedJob, setHighlightedJob],
            }}
        >
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
