import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

function Skeleton({ children }) {
	return (
		<Container maxW="100%" p={0} m={0}>
			<Header />
			{children}
			<Footer />
		</Container>
	);
}

export default Skeleton;
