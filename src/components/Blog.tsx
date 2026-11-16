import { Fragment } from "react";
import { getAllBlogs } from "@/lib/blog";

export function Blog() {
  return (
    <section className="blog-section">
      {getAllBlogs().map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>
            By {post.author} on {post.createdAt.toLocaleDateString()}
          </p>
          {post.content.map((section, index) =>
            typeof section === "string" ? (
              <p key={index}>{section}</p>
            ) : (
              <Fragment key={index}>{section}</Fragment>
            ),
          )}
        </article>
      ))}
    </section>
  );
}
