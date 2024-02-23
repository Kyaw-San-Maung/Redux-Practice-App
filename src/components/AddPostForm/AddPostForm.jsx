import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { PostAdd } from "../Redux/slice";
import { redirect } from "react-router-dom";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(PostAdd(title, content));
      console.log("called dispatch");
      setTitle("");
      setContent("");
      redirect("/");
    }
  };

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
            >
              Save Post
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
