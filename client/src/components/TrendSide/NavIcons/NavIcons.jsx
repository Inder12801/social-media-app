import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';


const iconStyles = {
    fontSize: "2.2rem",
    color: "#242d49"
}


const NavIcons = () => {
    return (
        <Stack direction={"row"}
            sx={{ width: "100%" }}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            mt={2}
        >
            <Tooltip title="Home">
                <IconButton aria-label="Home">
                    <HomeRoundedIcon sx={iconStyles} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Comments">
                <IconButton aria-label="Comments">
                    <CommentRoundedIcon sx={iconStyles} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
                <IconButton aria-label="Notifications">
                    <NotificationsRoundedIcon sx={iconStyles} />
                </IconButton>
            </Tooltip>
            <Tooltip title="Settings">
                <IconButton aria-label="Settings">
                    <SettingsRoundedIcon sx={iconStyles} />
                </IconButton>
            </Tooltip>
        </Stack>
    );
};

export default NavIcons;
