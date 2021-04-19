import React from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed () {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
        {/* Needs to be updated For Code */}
            <Post 
                profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                message="test test test"
                timestamp="timestamp"
                username="jplatt"
                image="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg"
            />
            <Post 
            profilePic="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
            message="Am I working"
            timestamp="timestamp"
            username="jplatt"
            />
            <Post />
            <Post />

        </div>
    )
}

export default Feed