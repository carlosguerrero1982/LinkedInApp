import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import './Posts.css';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Posts({name,description,message,photoUrl}) {
    return (
        <div className="posts">
            <div className="post_header">

                <Avatar src={photoUrl}>
                {name[0]}
                </Avatar> 

                <div className="posts_info">

                    <h2>{name}</h2>
                    <p>{description}</p>

                </div>
            </div>

            <div className="posts_body">

                <p>{message}</p>
            </div>

            <div className="posts_buttons">

                <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Posts
