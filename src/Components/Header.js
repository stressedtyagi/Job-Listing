import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import Status from "./Status";
import UpdatesIndicator from "./UpdatesIndicator";

/**
 *
 * @todo make header move down with scroll
 */
function Header() {
    return (
        <Flex wrap="wrap" borderWidth={"thin"} p={2}>
            <Box
                p={1}
                px={2}
                boxSize={"fit-content"}
                borderWidth={"1px"}
                borderRadius={"md"}
            >
                <Text fontSize={"xl"}>
                    Job Listing {" | "}
                    <Status />
                </Text>
            </Box>
            <Spacer />

            <UpdatesIndicator />
        </Flex>
    );
}

export default Header;
