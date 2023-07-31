import { Grid } from '@mui/material'
import React from 'react'
import LogoSearch from "../../components/ProfileSide/LogoSearch/LogoSearch"

import FollowersCard from "../../components/ProfileSide/FollowersCard/FollowersCard.jsx"
import InfoCard from '../../components/InfoCard/InfoCard'
import ProfileCardProfile from '../../components/ProfileSide/ProfileCard/ProfileCardProfile'
import PostShare from '../../components/PostSide/PostShare/PostShare'
import Posts from '../../components/PostSide/Posts/Posts'
import TrendSide from '../../components/TrendSide/TrendSide'
const Profile = () => {
    return (
        <Grid container spacing={2} p={2} bgcolor={"transparent"}>
            <Grid item xs={3} display={'flex'} flexDirection={'column'} gap={3}>
                {/* Content for the first column (1/4 of the width) */}
                <LogoSearch />
                <InfoCard />
                <FollowersCard />

            </Grid>
            <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Content for the second column (2/4 of the width) */}
                {/* You can place any content here */}
                {/* Example: <div>Column 2</div> */}
                <ProfileCardProfile route={"profile"} />
                <PostShare />
                <Posts />
            </Grid>
            <Grid item xs={3} width={"100%"}>
                {/* Content for the third column (1/4 of the width) */}
                {/* You can place any content here */}
                {/* Example: <div>Column 3</div> */}
                <TrendSide />
            </Grid>
        </Grid>
    )
}

export default Profile