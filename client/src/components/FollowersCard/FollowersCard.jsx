import React from 'react'
import { Avatar, Box, Button, Card, CardContent, Typography } from "@mui/material";
import { followers } from '../../Data/followersData';
import FollowerCard from './FollowerCard';
console.log(followers)
const FollowersCard = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} gap={1} borderRadius={"20px"}>
            <Box>
                <Typography fontSize={'1.3rem'} fontWeight={'700'}>
                    Who is following You?
                </Typography>
            </Box>
            <Box>
                {followers.map((follower) => {
                    return <FollowerCard follower={follower} />
                })}
            </Box>
            <Button>See More</Button>
        </Box>
    )
}

export default FollowersCard