import Router from "./Routes";
import Skeleton from "./Components/Skeleton";
import { SocketContextProvider } from "./SocketContext";

function App() {
    return (
        <Skeleton>
            <SocketContextProvider>
                <Router />
            </SocketContextProvider>
        </Skeleton>
    );
}

export default App;
