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
	// console.log(notificationCounter);
	useEffect(
		function showInitialToast() {
			//new updates with toast never rendered
			// console.log(count, toastStatus);
			if (count > 0 && !toastStatus) {
				standaloneToast({
					title: "New Updates",
					position: "top",
					isClosable: true,
					duration: 3000,
					onCloseComplete: function rejectToast() {
						setToastStatus(true);
					},
				});
			}
		},
		[count, toastStatus, standaloneToast]
	);

	return (
		<>
			{count > 0 && (
				<Tooltip label="Updates">
					{/* <Button
                        leftIcon={<BellIcon />}
                        colorScheme="teal"
                        fontSize="2xl"
                        p={1}
                        iconSpacing="-0.5"
                        onClick={() => setDialog(!dialog)}
                    >
                        <Text fontSize="sm" m={0}>
                            {count}
                        </Text>
                    </Button> */}
					<Menu>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<BellIcon />}
							variant="outline"
						/>
						<MenuList>
							{notificationCounter.map((postData) => (
								<Post postData={postData} key={postData.id} />
							))}
						</MenuList>
					</Menu>
				</Tooltip>
			)}
		</>
	);
}

export default UpdatesIndicator;
