import Dexie from "dexie";
import "dexie-observable";

const db = new Dexie("postsDB");

db.version(1).stores({
    posts: "&id, createdAt",
});

/**
 * Adding another version to enable dexie obervable plugin
 * @description No Need to add to remove tables, this is just to allow addon to intall
 * its tables.
 */
db.version(2).stores({});

export { db };
