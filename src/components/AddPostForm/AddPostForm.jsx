import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAdd } from "../Redux/slice";
import { selectAllUsers } from "../userSlice/userSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(PostAdd(title, content, userId));
      console.log("called dispatch");
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section style={{ padding: "1.5rem" }}>
      <h2>Add a New Post</h2>
      <hr />
      <form
        action=""
        style={{
          border: "1px solid black",
          margin: "5% 10%",
          borderRadius: "2.5rem",
        }}
      >
        <div style={{ padding: "1.5rem" }}>
          <div style={{ margin: "1% 40%" }}>
            <label
              htmlFor="postTitle"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            >
              Post Title
            </label>
            <br />
            <input
              type="text"
              id="postTitle"
              onChange={onTitleChanged}
              value={title}
              name="postTitle"
              style={{ width: "100%" }}
            />
            <br />
          </div>
          <div style={{ margin: "1% 40%" }}>
            <label
              htmlFor="postAuthor"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            >
              Author
            </label>
            <br />
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
              <option value=""></option>
              {userOptions}
            </select>
            <br />
          </div>
          <div style={{ margin: "0.5% 40%" }}>
            <label
              htmlFor="postContent"
              style={{ fontSize: "1.3rem", fontWeight: "600" }}
            >
              Post Content{" "}
            </label>
            <br />
            <input
              type="text"
              id="postContent"
              onChange={onContentChanged}
              value={content}
              name="postContent"
              style={{ width: "100%" }}
            />
          </div>

          <br />
          <div style={{ margin: "0.5% 40%" }}>
            <button
              type="button"
              onClick={onSavePostClicked}
              style={{ padding: "0.4rem 0.8rem", width: "100%" }}
              disabled={!canSave}
            >
              Save Post
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
