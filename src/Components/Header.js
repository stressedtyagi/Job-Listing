import { Box, Stack, Text } from "@chakra-ui/react";
import Status from "./Status";

function Header() {
	return (
		<Stack
			direction={["column", "column", "row", "row"]}
			minW={"xl"}
			borderWidth={"thin"}
			p={2}>
			<Box
				p={1}
				px={2}
				boxSize={"fit-content"}
				borderWidth={"1px"}
				borderRadius={"md"}>
				<Text fontSize={"xl"}>
					Job Listing {" | "}
					<Status />
				</Text>
			</Box>
		</Stack>
	);
}

export default Header;