import { InfoIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { usePost } from "../PostsContextProvider";

function UpdatesIndicator() {
	const posts = usePost();
	console.log(posts);
	return <IconButton aria-label="updates refresh" icon={<InfoIcon />} />;
}

export default UpdatesIndicator;
