import { Box } from '@mui/material'
import React from 'react'
import PostShare from './PostShare/PostShare'

const PostSide = () => {
    return (
        <Box width={"42%"}
            display={"flex"}
            flexDirection={"column"}
            // bgcolor={"lightgreen"}
            height={"100vh"}
            overflow={"auto"}
        >
            <Box>
                <PostShare />
            </Box>
            <Box>
                Posts
            </Box>
        </Box>
    )
}

export default PostSide