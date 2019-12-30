import React, { useState } from "react";

const PostForm = ({ postPost }) => {
  const [postData, setPostData] = useState({});

  const handleChange = e => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    postPost(postData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>new post</h2>
        <input
          type="text"
          name="title"
          placeholder="Post title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Content of post"
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default PostForm;
