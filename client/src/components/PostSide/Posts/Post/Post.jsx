import React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import ShareIcon from '@mui/icons-material/Share';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';


const typoStyle = { fontWeight: "500", fontSize: "1rem" }


const Post = (props) => {
    const { name, imageSrc, likes, comments, caption, liked } = props;

    return (
        <Card sx={{
            borderRadius: "30px",
            boxShadow: "none",
            width: "100%",
        }}>
            <CardHeader
                avatar={<Avatar src={imageSrc} alt={`${name} Profile`} />}
                title={name}
                sx={{
                    fontWeight: "700"
                }}
            />
            <CardMedia
                component="img"
                height="400"
                image={imageSrc}
                alt="Post Image"
                style={{ margin: "0 auto", borderRadius: "30px", maxWidth: "96%", objectFit: "cover" }}
            />
            <CardActions>
                <IconButton aria-label="Like" onClick={() => !liked} style={{
                    fontSize: "2rem"
                }} >
                    {
                        !liked ? <FavoriteBorderRoundedIcon sx={{
                            color: 'primary.main',
                            fontSize: "2rem"

                        }} /> : <FavoriteRoundedIcon sx={{
                            color: '#f95f35',
                            fontSize: "2rem"
                        }} />

                    }
                </IconButton>
                <Typography variant="body2" sx={typoStyle}>{likes} Likes</Typography>
                <IconButton aria-label="Comment">
                    <CommentRoundedIcon sx={{
                        color: 'red',
                        fontSize: "1.8rem"

                    }} />
                </IconButton>
                <Typography variant="body2" sx={typoStyle}>{comments} Comments</Typography>
                <IconButton aria-label="Share" >
                    <ShareIcon sx={{
                        color: 'red',
                        fontSize: "1.8rem"

                    }} />
                </IconButton>
            </CardActions>
            <CardContent>
                <Typography variant="body1" sx={typoStyle}>{caption}</Typography>
            </CardContent>
        </Card >
    );
};

export default Post;
