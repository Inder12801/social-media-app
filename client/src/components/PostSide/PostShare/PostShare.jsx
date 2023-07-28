import React from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhotoIcon from '@mui/icons-material/Photo';
import VideoIcon from '@mui/icons-material/VideoCall';
import LocationIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CameraEnhanceRoundedIcon from '@mui/icons-material/CameraEnhanceRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import { Input } from '@mui/material';

import profilePic from "../../../img/postpic1.jpg"

const PostShare = () => {
    return (
        <Box className="post-share" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: "center" }} width={'100%'}
            bgcolor={'#ffffffa3'}
            borderRadius={'30px'}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', padding: "20px 20px", gap: "20px" }}>
                <Avatar src={profilePic} alt="Profile Pic" sx={{ width: 60, height: 60, }} />
                <TextField
                    placeholder="What's on your mind?"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={1}
                    InputProps={
                        {
                            sx: {
                                backgroundColor: "#f5f1eb",
                                fontFamily: "Inter",
                                fontSize: "1.1rem",
                                borderRadius: "20px",
                                outline: "0",
                                border: "0",
                                ":focus": {
                                    border: "0",
                                    outline: "none"
                                }
                            }
                        }
                    }

                />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 2 }}>
                <Button startIcon={<CameraEnhanceRoundedIcon style={{ color: "green", fontSize: '25px' }} />}
                    color="success"
                >
                    Photo
                </Button>
                <Button startIcon={<PlayCircleRoundedIcon style={{ color: "darkblue", fontSize: '25px' }} />}
                    style={{
                        color: "darkblue"
                    }}
                >
                    Video
                </Button>
                <Button startIcon={<LocationOnRoundedIcon style={{ color: "hotpink", fontSize: '25px' }} />} color="primary"
                    style={{
                        color: "hotpink"
                    }}
                >
                    Location
                </Button>
                <Button startIcon={<CalendarTodayRoundedIcon style={{ color: "orangered", fontSize: '25px' }} />} style={{
                    color: "orangered"
                }}>
                    Schedule
                </Button>
                <Box><Button
                    endIcon={<SendRoundedIcon />}
                    sx={{
                        backgroundColor: "primary.main",
                        fontFamily: "Inter",
                        borderRadius: "20px",
                        outline: "none",
                        border: "2px solid transparent",
                        color: "white",
                        padding: "8px 12px"
                        ,
                        '&:hover': {
                            backgroundColor: "transparent",
                            color: "primary.main",
                            border: "2px solid #fca61f"
                        }
                    }}



                >
                    share
                </Button></Box>
            </Box>

        </Box >
    );
};

export default PostShare;
