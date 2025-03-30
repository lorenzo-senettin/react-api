import { useEffect, useState } from "react";
import PostTable from "./components/PostTable";

const api_endpoint = "http://localhost:3000/posts";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    fetch(api_endpoint)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }

  return (
    <div>
      <h1>Posts Blog</h1>
      <PostTable posts={posts} />
    </div>
  );
}
