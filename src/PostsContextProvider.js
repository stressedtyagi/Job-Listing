import { useLiveQuery } from "dexie-react-hooks";
import { createContext, useContext, useState } from "react";
import { db } from "./db";

const PostsContext = createContext();

function PostsContextProvider({ children }) {
    const posts = useLiveQuery(function loadPosts() {
        return db.posts.toArray();
    });

    /**
     * [State]: To manage content to newly job notification
     */
    const [jobAlert, setJobAlert] = useState(null);

    /**
     * [Listener]: Listening to changes happening in IndexDB
     * @todo Check why callback function is called 4 with +2 increment each time
     * we update the job or DOM.
     */
    db.on("changes", function (changes, partial) {
        changes.forEach((change) => {
            switch (change.type) {
                // Created
                case 1:
                    console.log(change.obj);
                    setJobAlert(change.obj);
                    break;

                default:
                    break;
            }
        });
    });

    return (
        <PostsContext.Provider value={(posts, jobAlert)}>
            {children}
        </PostsContext.Provider>
    );
}

function usePost() {
    const posts = useContext(PostsContext);
    if (!posts) {
        return false;
    }

    return posts;
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

export { usePost, useJobAlert, PostsContextProvider };
