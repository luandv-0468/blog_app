import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import { Box, Button, Radio, RadioGroup, TextField } from "@mui/material";

export const Signup = () => {
    const { data, setData, post, processing, errors } = useForm({
        firstname: "",
        lastname: "",
        gender: "",
        avatar: "",
        email: "",
        password: "",
        confirmPassword: "",
        remember: false,
    });

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post("/signup");
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
                    label="Firstname"
                    value={data.firstname}
                    onChange={(e) => setData("firstname", e.target.value)}
                />
                {errors.firstname && <div>{errors.firstname}</div>}
                <TextField
                    type="text"
                    label="Lastname"
                    value={data.lastname}
                    onChange={(e) => setData("lastname", e.target.value)}
                />
                {errors.lastname && <div>{errors.lastname}</div>}

                <TextField
                    type="text"
                    label="Avatar"
                    value={data.avatar}
                    onChange={(e) => setData("avatar", e.target.value)}
                />
                {errors.avatar && <div>{errors.avatar}</div>}
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
                <TextField
                    type="password"
                    label="Confirm password"
                    value={data.confirmPassword}
                    onChange={(e) => setData("confirmPassword", e.target.value)}
                />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}

                <div>
                    <span>Gender</span>
                </div>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="first"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <span>Female</span>
                    <Radio
                        checked={data.gender === "female"}
                        onChange={(e) => setData("gender", e.target.value)}
                        value="female"
                        name="radio-buttons"
                        inputProps={{
                            "aria-label": "Female",
                        }}
                    />
                    <span>Male</span>
                    <Radio
                        checked={data.gender === "male"}
                        onChange={(e) => setData("gender", e.target.value)}
                        value="male"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "B" }}
                    />
                    <span>Other</span>
                    <Radio
                        checked={data.gender === "other"}
                        onChange={(e) => setData("gender", e.target.value)}
                        value="other"
                        name="radio-buttons"
                        inputProps={{ "aria-label": "B" }}
                    />
                </RadioGroup>
                {errors.gender && <div>{errors.gender}</div>}
                <Button
                    type="submit"
                    disabled={processing}
                    variant="contained"
                    sx={{ width: "100px" }}
                >
                    Sign up
                </Button>
            </Box>
        </Box>
    );
};
