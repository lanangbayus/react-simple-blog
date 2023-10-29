import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blogs() {
  const posts = useLoaderData();

  return (
    <>
      <h2>My Blogs Posts</h2>
      {posts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blogs;
