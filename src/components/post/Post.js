import React from 'react'
import "./post.css"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import {Users} from "../../dummyData"

function Post({post}) {
  return (
    <div className='post'>
    <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u) => u.id === post.userId)[0].username}</span>
                <span className='postDate'>{post.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVertOutlinedIcon/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post.desc}</span>
            <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="likeCounter"> {post.like} people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
    </div>
    </div>
  )
}
export default Post