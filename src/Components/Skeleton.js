import { Container } from "@chakra-ui/react";
import { PostsContextProvider } from "../PostsContextProvider";
import Footer from "./Footer";
import Header from "./Header";

function Skeleton({ children }) {
	return (
		<Container maxW="100%" p={0} m={0}>
			<PostsContextProvider>
				<Header />
				{children}
				<Footer />
			</PostsContextProvider>
		</Container>
	);
}

export default Skeleton;
