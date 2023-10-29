import { useState, useEffect } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) => item.title.includes(value));
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length); // pakai length untuk mengetahui total dari datanya
  };

  return (
    <>
      <h1>Blog Sederhana</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} /> {/* lempar postnya */}
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
