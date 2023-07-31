import React from 'react'
import { postsData } from '../../../Data/PostsData'
import { Stack } from '@mui/material'
import Post from './Post/Post'

const Posts = () => {
    return (
        <Stack direction={'column'} gap={2} >
            {postsData.map((post, id) => (
                <Post
                    key={id}
                    name={post.name}
                    imageSrc={post.img}
                    likes={post.likes}
                    liked={post.liked}
                    comments={post.comments}
                    caption={post.caption}
                />
            ))}


        </Stack>
    )
}

export default Posts