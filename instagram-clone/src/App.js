import React, { useState, useEffect } from 'react'
import './App.css'
import Post from './components/Post'
import { db, auth, storage } from './firebase'

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('posts')
      //.orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            username: doc.data().username,
            caption: doc.data().caption,
            imageUrl: doc.data().imageUrl,
          }))
        )
      })
  }, [])
  return (
    <div className='App'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
        />
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default App
