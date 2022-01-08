import { useEffect, useContext } from "react";
import { SocketContext } from "../SocketContext";
import EVENTS from "../events";

function Home() {
    const socket = useContext(SocketContext);

    useEffect(() => {
        socket.on(EVENTS.CLIENT_POST_UPDATE, (data) => {
            console.log("Hello");
            console.log(data);
        });
    });

    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello tailwind!</h1>
            <div>Home route</div>
        </>
    );
}

export default Home;
