import { Box, Typography } from "@mui/material";
import React from "react";
import coverpic from "../../../img/cover.jpg";
import profilepic from "../../../img/profileImg.jpg";
const ProfileCard = () => {
    return (
        <Box width={"100%"} height={"45vh"} bgcolor={"#ffffffa3"} borderRadius={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={2}
        >
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={'center'}
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
                        width: "30%",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "60%",
                        boxShadow: "0px 4px 17px 2px rgba(0, 0, 0, 0.25)"
                    }}
                />
            </Box>
            <Box
                fullWidth
                textAlign={"center"}
                position={'relative'}
                top={'3.5rem'}
            >

                <Typography fontWeight={"400"} fontSize={"1.2rem"}>Sohan Kumar</Typography>
                <Typography fontWeight={"400"} fontSize={"1rem"}>Senio UI/UX Developer</Typography>
            </Box>

            <Box display={"flex"}
                width={"90%"}
                position={'relative'}
                top={'1rem'}
                borderTop={"1px double #afacac"}
                borderBottom={"1px double #afacac"}
                padding={"10px 0px"}
                margin={"auto"}
            >
                <Box
                    width={"50%"}
                    margin={'auto'}
                    textAlign={'center'}
                    borderRight={'1px double #afacac'}
                >
                    <Typography fontWeight={'600'}>4000</Typography>
                    <Typography>Followers</Typography>
                </Box>
                <Box
                    width={"50%"}
                    fullWidth
                    margin={'auto'}
                    textAlign={'center'}
                >
                    <Typography fontWeight={'600'}>400</Typography>

                    <Typography>Following</Typography>
                </Box>

            </Box>
            <Box width={'100%'} textAlign={'center'} position={'relative'} top={'0'}
                margin={"10px 0"}
            >
                <Typography
                    fontSize={'1.3rem'}
                    fontWeight={'700'}
                    color={"primary.main"}
                    style={{
                        cursor: "pointer"
                    }}
                >My Profile</Typography>
            </Box>
        </Box >
    );
};

export default ProfileCard;
