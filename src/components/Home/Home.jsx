import { useSelector } from "react-redux";
import { selectAllPosts } from "../Redux/slice";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { PostAuthor } from "../PostAuthor/PostAuthor";

export const Home = () => {
  const posts = useSelector(selectAllPosts);

  const renderPost = posts.map((post) => (
    <article
      key={post.id}
      style={{
        border: "1px solid black",
        margin: "1.5% 30% ",
        borderRadius: "1rem",
        padding: "1rem",
      }}
    >
      <h3 style={{ fontWeight: "850", fontSize: "1.5rem" }}>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>

      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));

  return (
    <>
      <AddPostForm />
      <section style={{ padding: "1rem" }}>
        <h2 style={{ fontSize: "3.5rem", fontWeight: "800" }}>
          <a href="/form" style={{ textDecoration: "none", color: "black" }}>
            Posts
          </a>
        </h2>
        <hr />

        {renderPost}
      </section>
    </>
  );
};
