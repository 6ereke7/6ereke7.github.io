import "./Blog.css";
import { Link } from "react-router-dom";
import { getAllBlogs, getReadingTimeMinutes } from "@/lib/blog";

export function Blog() {
  const posts = getAllBlogs();

  return (
    <section id="blog" className="section" aria-labelledby="blog-title">
      <div className="section-heading">
        <h2 id="blog-title">Blog</h2>
        <p>Notes on building, shipping, and improving web applications.</p>
      </div>
      <div className="blog-list">
        {posts.map((post) => {
          const readingTime = getReadingTimeMinutes(post);
          return (
            <article className="card blog-card" key={post.id}>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="blog-meta">
                <time dateTime={post.createdAt.toISOString()}>
                  {post.createdAt.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span aria-hidden="true"> · </span>
                <span>{readingTime} min read</span>
              </p>
              <p className="blog-excerpt">
                {typeof post.content[0] === "string"
                  ? post.content[0]
                  : "Read the full post for details."}
              </p>
              <p>
                <Link to={`/blog/${post.slug}`}>Read post</Link>
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
