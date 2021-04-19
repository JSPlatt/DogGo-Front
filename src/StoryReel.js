import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story 
                image='image'
                profileSrc="code here"
                title="code here"
            />
            <Story 
                image="image"
                profileSrc="code here"
                title="code here"
            />
            <Story 
                image="image"
                profileSrc="code here"
                title="code here"
            />
            <Story 
                image="image"
                profileSrc="code here"
                title="code here"
            />
            <Story 
                image="image"
                profileSrc="code here"
                title="code here"
            />
        </div>
    )
}

export default StoryReel