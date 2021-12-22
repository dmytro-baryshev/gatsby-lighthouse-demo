import React, { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
          setContent(json);
          setLoading(false);
        })
    }, 3000);
  }, []);

  if (loading) {
    return <div>Loading!</div>
  }

  return <div>{JSON.stringify(content)}</div>
}
