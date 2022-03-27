import { Container, Spinner } from "@chakra-ui/react";
import { useEffect, useState, useMemo } from "react";
import utils from "../utils";
import PostsTable from "../Components/PostsTable";
import { useJobAlert } from "../PostsContextProvider";

function Home() {
	const [data, setData] = useState([]);
	const [_, highlightedJob] = useJobAlert();

	async function loadTableDataAsync() {
		const posts = await utils.getPosts();
		setData(posts);
	}

	useEffect(
		function loadTableData() {
			loadTableDataAsync();
		},
		[highlightedJob]
	);

	useEffect(function loadInitialData() {
		document.addEventListener("bulk-post", loadTableDataAsync);

		return function cleanUpdateHandler() {
			document.removeEventListener("bulk-post", loadTableDataAsync);
		};
	}, []);

	/**
	 * @todo: make data[0] object structure chnage as dependency of column's memo
	 */
	const columns = useMemo(
		function getColumnData() {
			const row = data[0];
			if (!row) {
				return [];
			}
			const cols = Object.keys(row);
			const reactTableCols = cols.map((attr) => ({
				Header: attr,
				accessor: attr,
			}));
			return reactTableCols;
		},
		[data]
	);

	return (
		<Container centerContent minW="100%" mt={6}>
			{data.length > 0 ? (
				<PostsTable
					data={data}
					columns={columns}
					highlightedJob={highlightedJob}
				/>
			) : (
				<Spinner size="xl" />
			)}
		</Container>
	);
}

export default Home;
