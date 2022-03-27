import { BellIcon } from "@chakra-ui/icons";
import {
	createStandaloneToast,
	Tooltip,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	IconButton,
} from "@chakra-ui/react";

import { useJobAlert } from "../PostsContextProvider";
import { useEffect, useState } from "react";

const Post = ({ postData }) => {
	const [_, __, updateHighlightedJob] = useJobAlert();
	return (
		<MenuItem onClick={() => updateHighlightedJob(postData)}>
			{postData.title || postData.text}
		</MenuItem>
	);
};

function UpdatesIndicator() {
	/**
	 * Toast to be shown once on any new update
	 * for subsequent updates only counter will increase, and can be clicked to update
	 * table
	 */

	/**
	 * @todo Single toast for update containing single or array of new posts
	 * @description Right now for each single post saved on indexDB a toast is shown
	 *              which is only good if each update contains single new post
	 */

	const standaloneToast = createStandaloneToast();
	const [toastStatus, setToastStatus] = useState(false);

	const [notificationCounter] = useJobAlert();
	const count = notificationCounter.length;
	useEffect(
		function showInitialToast() {
			//new updates with toast never rendered
			// console.log(count, toastStatus);
			if (count > 0 && !toastStatus) {
				// standaloneToast({
				//     title: "New Updates",
				//     position: "top",
				//     isClosable: true,
				//     duration: 3000,
				//     onCloseComplete: function rejectToast() {
				//         setToastStatus(true);
				//     },
				// });
			}
		},
		[count, toastStatus, standaloneToast]
	);

	return (
		<>
			{count > 0 && (
				<Menu>
					<MenuButton
						as={IconButton}
						aria-label="Options"
						rightIcon={<BellIcon />}
						variant="outline">
						{notificationCounter.length}
					</MenuButton>

					<MenuList>
						{notificationCounter.slice(0, 10).map((postData) => (
							<Post postData={postData} key={postData.id} />
						))}
					</MenuList>
				</Menu>
			)}
		</>
	);
}

export default UpdatesIndicator;
