import { Box, Typography } from "@mui/material";
import React from "react";
import coverpic from "../../../img/cover.jpg";
import profilepic from "../../../img/profileImg.jpg";
const ProfileCardProfile = () => {
    return (
        <Box width={"100%"} bgcolor={"#ffffffa3"} borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={'center'}
                justifyContent={"center"}
                position={"relative"}
            >
                <img
                    src={coverpic}
                    style={{
                        width: "100%",
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                    }}
                />
                <img
                    src={profilepic}
                    style={{
                        width: "10rem",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "-5rem",
                        boxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.25)",
                        alignSelf: "center"
                    }}
                />
            </Box>
            <Box
                fullWidth
                textAlign={"center"}
                position={'relative'}
                marginTop={'5.5rem'}
            >

                <Typography fontWeight={"600"} fontSize={"1.6em"}>Sohan Kumar</Typography>
                <Typography fontWeight={"400"} fontSize={"1.2em"}>Senio UI/UX Developer</Typography>
            </Box>

            <Box display={"flex"}
                width={"90%"}
                position={'relative'}
                borderTop={"1px double #afacac"}
                borderBottom={"1px double #afacac"}
                padding={"10px 0px"}
                margin={"2rem auto"}
                marginBottom={"6vh"}

            >
                <Box
                    width={"50%"}
                    margin={'auto'}
                    textAlign={'center'}
                    borderRight={'1px double #afacac'}
                >
                    <Typography fontWeight={'600'}>4000</Typography>
                    <Typography fontWeight={"600"} fontSize={"1.2em"}>Followers</Typography>
                </Box>
                <Box
                    width={"50%"}
                    fullWidth
                    margin={'auto'}
                    textAlign={'center'}
                    borderRight={'1px double #afacac'}
                >
                    <Typography fontWeight={'600'}>400</Typography>

                    <Typography ontWeight={"600"} fontSize={"1.2em"}>Following</Typography>
                </Box>
                <Box
                    width={"50%"}
                    fullWidth
                    margin={'auto'}
                    textAlign={'center'}
                >
                    <Typography fontWeight={'600'}>400</Typography>

                    <Typography ontWeight={"600"} fontSize={"1.2em"}>Posts</Typography>
                </Box>

            </Box>
        </Box >
    );
};

export default ProfileCardProfile;
