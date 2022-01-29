import { Container } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

function Skeleton({ children }) {
	return (
		<Container maxW="container.xl" p={0}>
			<Header />
			{children}
			<Footer />
		</Container>
	);
}

export default Skeleton;
