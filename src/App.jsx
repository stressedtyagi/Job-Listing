import Router from "./Routes";
import Skeleton from "./Components/Skeleton";
import { SocketContextProvider } from "./SocketContext";

function App() {
	return (
		<SocketContextProvider>
			<Skeleton>
				<Router />
			</Skeleton>
		</SocketContextProvider>
	);
}

export default App;
