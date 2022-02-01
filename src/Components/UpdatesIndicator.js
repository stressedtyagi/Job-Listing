import { InfoIcon } from "@chakra-ui/icons";
import { createStandaloneToast, IconButton, useToast } from "@chakra-ui/react";
import { useJobAlert, usePost } from "../PostsContextProvider";

import { useEffect } from "react";

function UpdatesIndicator() {
    // const posts = usePost();

    /**
     * Chakra Toast for newJob and on button click info
     */
    const standaloneToast = createStandaloneToast();
    const toast = useToast();

    /**
     * `jobAlert` context to keep track of new updates happening in DB
     */
    const jobAlert = useJobAlert();

    /**
     * [TODO]: Alert showing up on every rerender, Need to update the structure
     * of showing notification. Modification in useEffect dependencies needed.
     * jobAlert never gets false
     */
    useEffect(
        function showNewJobToast() {
            if (jobAlert) {
                console.log("New Job: " + JSON.stringify(jobAlert));
                standaloneToast({
                    title: "New Job Added",
                    description:
                        jobAlert?.title.length === 0
                            ? jobAlert?.text
                            : jobAlert?.title,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top-right",
                });
            }
        },
        [jobAlert]
    );

    return (
        <IconButton
            aria-label="updates refresh"
            icon={<InfoIcon />}
            onClick={() =>
                toast({
                    title: "No New Update",
                    status: "warning",
                    position: "bottom",
                    duration: 2000,
                    isClosable: true,
                })
            }
        />
    );
}

export default UpdatesIndicator;
