import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Button, Checkbox, TextField } from "@mui/material";

export const Signin = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/signin");
    }

    return (
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Box
                component="form"
                onSubmit={submit}
                sx={{
                    "& .MuiTextField-root": { m: 1, width: "400px" },
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #c1b4b4",
                    borderRadius: "4px",
                    padding: "20px",
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    type="text"
                    label="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />
                {errors.email && <div>{errors.email}</div>}
                <TextField
                    type="password"
                    label="Password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                />
                {errors.password && <div>{errors.password}</div>}
                <Box>
                    Remember Me
                    <Checkbox
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                    />
                </Box>
                <Button
                    type="submit"
                    disabled={processing}
                    variant="contained"
                    sx={{ width: "100px", marginTop: "10px" }}
                >
                    Sign in
                </Button>
            </Box>
        </Box>
    );
};
