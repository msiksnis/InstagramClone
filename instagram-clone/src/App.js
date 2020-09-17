import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./components/post/Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([
    // {
    //   username: "marty",
    //   caption: "wowowowowow",
    //   imageUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4s-DCY5UsCMv1XWEBLPUaL8LDyM9PF8YYog&usqp=CAU",
    // },
    // {
    //   username: "Raimis",
    //   caption: "Nebloga",
    //   imageUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3xgNQ7ubHVpJe-XUH8hzY0UzA6PWUBu9_ng&usqp=CAU",
    // },
  ]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {posts.map(({ id, post }) => (
        <Post
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
