import {
    Button,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    IconButton,
    Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { IPost } from "../../types";

export function PostItem({ post }: { post: IPost }) {
    return (
        <Card sx={{ maxWidth: 345 }} key={post.postId}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.title}
                subheader={post.created_at}
            />
            <CardMedia
                component="img"
                height="194"
                image={post.postAvatar}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.postDes}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined">Read more</Button>
            </CardActions>
        </Card>
    );
}
