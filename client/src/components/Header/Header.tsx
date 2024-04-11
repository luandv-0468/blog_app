import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                padding: "10px 60px",
            }}
        >
            <Box>
                <Link to="/">Home</Link>
                <Link
                    to="/post"
                    style={{
                        marginLeft: "10px",
                    }}
                >
                    Post
                </Link>
            </Box>
            <Box>
                <Link
                    to="/signin"
                    style={{
                        marginRight: "10px",
                    }}
                >
                    Sign In
                </Link>
                <Link to="/signup">Sign out</Link>
            </Box>
        </Box>
    );
};
