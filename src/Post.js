import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "./client";
import "./index.css";
export default function Post() {
  const [postData, setPost] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  return (
    <main className="posts">
      <section>
        <h1>Blog Posts</h1>
        <h2>Welcome to my page of blog Posts</h2>
        <div>
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link
                  to={"./client.js/post" + post.slug.current}
                  key={post.slug.current}
                >
                  <span key={index}>
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="images-post"
                    />
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
