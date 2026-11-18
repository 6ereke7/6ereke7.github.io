import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogBySlug, getReadingTimeMinutes } from "@/lib/blog";
import "./BlogPostPage.css";

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return (
      <section className="section blog-post-page container" aria-labelledby="post-not-found-title">
        <p>
          <Link to="/" className="back-link">
            ← Back to home
          </Link>
        </p>
        <h1 id="post-not-found-title">Post not found</h1>
        <p>
          Sorry, the blog post you’re looking for doesn’t exist or may have been
          moved.
        </p>
        <p>
          <Link to="/">Return to the homepage</Link>
        </p>
      </section>
    );
  }

  const readingTime = getReadingTimeMinutes(post);

  return (
    <article className="section blog-post-page container">
      <p>
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
      </p>
      <header className="blog-post-header">
        <h1>{post.title}</h1>
        <p className="blog-post-meta">
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
        <p className="blog-post-author">By {post.author}</p>
      </header>
      <div className="blog-post-content">
        {post.content.map((section, index) =>
          typeof section === "string" ? (
            <p key={index}>{section}</p>
          ) : (
            <Fragment key={index}>{section}</Fragment>
          ),
        )}
      </div>
    </article>
  );
}
