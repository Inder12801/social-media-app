import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { Backdrop, Box, Button, Fade, Modal, TextField, Tooltip } from "@mui/material";
import { btnStyle } from "../TrendSide/TrendSide";
import { signupBtnStyle } from "../../pages/Signup/Signup";

const typoStyle = {
    bgcolor: " #ebba771a",
    m: "20px 0",
    p: "10px",
    borderRadius: "30px",
    width: "100%",
};

const InfoCard = () => {
    const [open, setOpen] = useState(false); // State to manage the modal's open/close state

    const { username, name, email, location } = {
        username: "inder12801",
        name: "ij singh",
        email: "inder12801@gmail.com",
        location: "Delhi",
    };

    const handleEditClick = () => {
        setOpen(true); // Open the modal when the "Edit" button is clicked
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    const [editedUserDetails, setEditedUserDetails] = useState({
        name: name,
        email: email,
        location: location,
        phone: "",
    });

    const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setEditedUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log("Updated User Details:", editedUserDetails);
        handleModalClose();
    };

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                boxShadow: "none",
                borderRadius: "30px",
                p: "20px",
                position: "relative",
                gap: "",
            }}
        >
            <Tooltip title="Edit">
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        color: "primary.main",
                    }}
                    aria-label="Edit"
                    onClick={handleEditClick}
                >
                    <EditIcon />
                </IconButton>
            </Tooltip>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
                My Profile
            </Typography>
            <CardContent sx={{ p: "0", w: "100%" }}>
                <Typography variant="h6" fontSize={"1.4rem"} sx={typoStyle}>
                    {name}
                </Typography>
                <Typography variant="subtitle" fontSize={"1rem"} sx={typoStyle}>
                    @{username}
                </Typography>
            </CardContent>
            <CardContent sx={{ p: "0" }}>
                <Typography fontSize={"1.2rem"} color="HighlightText" sx={typoStyle}>
                    Email: {email}
                </Typography>
                <Typography fontSize={"1.2rem"} color="HighlightText" sx={typoStyle}>
                    Contact: {"9999xxxxxx"}
                </Typography>
                <Typography fontSize={"1.2rem"} color="HighlightText" sx={typoStyle}>
                    Location: {location}
                </Typography>
            </CardContent>
            <Button
                variant="conatined"
                sx={{
                    position: "relative",
                    bottom: "10px",
                    right: "-69%",
                    width: "30%",
                    background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
                    fontSize: "1.0rem",
                    fontWeight: "600",
                    borderRadius: "30px",
                    color: "white",
                    ":hover": {
                        backgroundColor: "primary.main",
                    },
                }}
            >
                Logout
            </Button>

            <Modal
                open={open}
                onClose={handleModalClose}
                sx={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                }}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Box
                    style={{
                        transform: "translate(-50%, -50%)",
                        background: "#ffffff",
                        padding: "20px",
                        borderRadius: "30px",
                        display: "flex",
                        width: "50%",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <Typography variant="h6">Edit Profile</Typography>
                    <form onSubmit={handleFormSubmit}>
                        {/* Form fields for editing user details */}
                        <TextField
                            label="Name"
                            name="name"
                            value={editedUserDetails.name}
                            onChange={handleFieldChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={editedUserDetails.email}
                            onChange={handleFieldChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Location"
                            name="location"
                            value={editedUserDetails.location}
                            onChange={handleFieldChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            label="Phone Number"
                            name="phone"
                            value={editedUserDetails.phone}
                            onChange={handleFieldChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ ...signupBtnStyle, marginTop: "1.5rem", fontSize: "1rem" }}
                        >
                            Save Changes
                        </Button>
                    </form>
                </Box>
            </Modal>
        </Card>
    );
};

export default InfoCard;
