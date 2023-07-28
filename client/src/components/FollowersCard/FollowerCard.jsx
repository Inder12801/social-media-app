import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const FollowerCard = ({ follower }) => {
    // Destructure the user object
    const { name, username, img } = follower;

    return (
        <Card sx={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: "transparent" }}>
            <Avatar src={img} alt={`${username}'s Profile`} sx={{ width: 60, height: 60, marginRight: '10px' }} />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="h2" variant="h5" fontSize={'1.0rem'}>
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" fontSize={'0.9rem'}>
                    @{username}
                </Typography>
            </CardContent>
            <Button variant="contained" color="primary" size={'small'}
                sx={{
                    backgroundColor: "primary",
                    ":hover": {
                        backgroundColor: "primary.light"
                    }
                }}>
                Follow
            </Button>
        </Card>
    );
};

export default FollowerCard;
