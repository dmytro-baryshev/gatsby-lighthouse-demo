import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./lol.json";


export default function Home() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
          setPosts(json);
          setLoading(false);
        });
    }, 5000);
  }, []);

  if (loading) {
    return <Loader
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
    />
  }

  return <div style={{ display: 'grid' }}>{posts.map((post) => (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h4>By user №{post.userId}</h4>
      <button onClick={() => console.log(post)}>read more</button>
    </div>
  ))}</div>
}
