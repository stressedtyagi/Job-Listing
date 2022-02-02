import { BellIcon } from "@chakra-ui/icons";
import { createStandaloneToast, Button, Text, Tooltip } from "@chakra-ui/react";
import { useJobAlert } from "../PostsContextProvider";

import { useEffect, useState } from "react";

function UpdatesIndicator() {
	/**
	 * Toast to be shown once on any new update
	 * for subsequent updates only counter will increase, and can be clicked to update
	 * table
	 */
	const standaloneToast = createStandaloneToast();
	const [toastStatus, setToastStatus] = useState(false);

	const [notificationCounter] = useJobAlert();
	const count = notificationCounter.length;

	useEffect(
		function showInitialToast() {
			//new updates with toast never rendered
			console.log(count, toastStatus);
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
					<Button
						leftIcon={<BellIcon />}
						colorScheme="teal"
						fontSize="2xl"
						p={1}
						iconSpacing="-0.5">
						<Text fontSize="sm" m={0}>
							{count}
						</Text>
					</Button>
				</Tooltip>
			)}
		</>
	);
}

export default UpdatesIndicator;
