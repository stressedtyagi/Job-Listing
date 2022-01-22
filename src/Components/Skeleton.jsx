import Footer from "./Footer";
import Header from "./Header";

function Skeleton({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Skeleton;
