import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({ username, caption, imageUrl }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt={username}
          src='/static/images/avatar/1.jpg'
        />
        <h3>{username}</h3>
      </div>
      <img className='post__image' src={imageUrl} alt='' />
      <div className='post__text'>
        <strong>{username}:</strong> {caption}
      </div>
    </div>
  )
}

export default Post
