import {useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {postPage} from "../api/queries";

export default function PageToolbar() {
    const [pageTitle, setPageTitle] = useState('');
    const queryClient = useQueryClient();
    const postPageMutation = useMutation({
        mutationKey: 'postPage',
        mutationFn: (titleValue) => {
            return postPage(titleValue);
        },
        onSuccess: data => {
            setPageTitle("");
            queryClient.invalidateQueries(['getPages']);
        },
        onError: error => {
            console.error(error);
        }
    })

    return <input
        placeholder={"Page title"}
        value={pageTitle}
        onChange={(event) => {
            setPageTitle(event.target.value);
        }}
        onKeyDown={(event) => {
            if(event.key === 'Enter') {
                postPageMutation.mutate(event.target.value);
            }
        }}
    />
}