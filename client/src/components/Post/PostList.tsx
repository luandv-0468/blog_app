import { PostItem } from "./PostItem";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { IPost } from "../../types/Post.type";
import { postService } from "../../services/PostService.service";

const postInit = {
    postId: 0,
    title: "",
    postDes: "",
    content: "",
    postAvatar: "",
    isPublic: false,
    isActive: false,
    created_at: "",
};

export function PostList() {
    const [posts, setPosts] = useState<IPost[]>([postInit]);

    const handleGetPosts = async () => {
        const res = await postService.getPostLists(1, 10);

        if (res?.data?.length > 0) setPosts(res?.data);
    };

    useEffect(() => {
        handleGetPosts();
    }, []);

    return (
        <>
            <Grid container spacing={2} p={10}>
                {posts.length > 0 &&
                    posts.map((post: IPost) => (
                        <Grid item xs={4}>
                            <PostItem post={post} />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
}
