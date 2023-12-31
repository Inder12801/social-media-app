import React, { useRef, useState } from "react";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CameraEnhanceRoundedIcon from "@mui/icons-material/CameraEnhanceRounded";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Box from "@mui/material/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Modal, Typography } from "@mui/material";
import profilePic from "../../../img/postpic1.jpg";
import { signupBtnStyle } from "../../../pages/Signup/Signup";

const PostShare = () => {
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const handlePhotoClick = (e) => {
    console.log("Photo button clicked");
    imageRef.current?.click();
    setModalOpen(true);
  };

  const onImageClick = (event) => {
    const selectedImage = event.target.files[0];
    setImage({ image: URL.createObjectURL(selectedImage) });
    console.log(selectedImage);
    setModalOpen(true); // Open the modal when the image is clicked
  };
  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal when the close icon is clicked
  };
  return (
    <Box
      className="post-share"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        position: "relative",
      }}
      width={"100%"}
      bgcolor={"#ffffffa1"}
      // bgcolor={'#ff5656'}
      borderRadius={"30px"}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "20px 20px",
          gap: "20px",
        }}
      >
        <Avatar
          src={profilePic}
          alt="Profile Pic"
          sx={{ width: 60, height: 60 }}
        />
        <TextField
          placeholder="What's on your mind?"
          variant="outlined"
          fullWidth
          multiline
          rows={1}
          InputProps={{
            sx: {
              backgroundColor: "#f5f1eb",
              fontFamily: "Inter",
              fontSize: "1.1rem",
              borderRadius: "20px",
              outline: "0",
              border: "0",
              ":focus": {
                border: "0",
                outline: "none",
              },
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
        <Button
          startIcon={
            <CameraEnhanceRoundedIcon
              style={{ color: "green", fontSize: "25px" }}
            />
          }
          color="success"
          onClick={handlePhotoClick}
        >
          Photo
        </Button>
        <Button
          startIcon={
            <PlayCircleRoundedIcon
              style={{ color: "darkblue", fontSize: "25px" }}
            />
          }
          style={{
            color: "darkblue",
          }}
        >
          Video
        </Button>
        <Button
          startIcon={
            <LocationOnRoundedIcon
              style={{ color: "hotpink", fontSize: "25px" }}
            />
          }
          color="primary"
          style={{
            color: "hotpink",
          }}
        >
          Location
        </Button>
        <Button
          startIcon={
            <CalendarTodayRoundedIcon
              style={{ color: "orangered", fontSize: "25px" }}
            />
          }
          style={{
            color: "orangered",
          }}
        >
          Schedule
        </Button>
      </Box>
      <input
        style={{ display: "none" }}
        ref={imageRef}
        type="file"
        onChange={onImageClick}
      />
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            width: "52vw",
            height: "66vh",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "30px",
            background: "#e3e0e0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            gap: "10px",
          }}
        >
          <Typography fontSize={"1.4rem"} fontWeight={"500"}>
            Image Preview...
          </Typography>
          <Box
            sx={{
              width: "48vw",
              height: "50vh",
              borderRadius: "30px",
            }}
          >
            {image && (
              <>
                <img
                  src={image.image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "30px",
                    objectFit: "cover",
                  }}
                />
                <CloseRoundedIcon
                  sx={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    cursor: "pointer",
                    color: "primary.main",
                  }}
                  onClick={handleCloseModal}
                />
              </>
            )}
          </Box>
          <Box sx={{ position: "relative", bottom: "0px", right: "-40%" }}>
            <Button
              endIcon={<SendRoundedIcon />}
              sx={{
                width: "150px",
                fontSize: "1.2rem",
                backgroundColor: "primary.main",
                fontFamily: "Inter",
                borderRadius: "20px",
                outline: "none",
                border: "2px solid transparent",
                color: "white",
                padding: "8px 12px",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "primary.main",
                  border: "2px solid #fca61f",
                },
              }}
            >
              share
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PostShare;
