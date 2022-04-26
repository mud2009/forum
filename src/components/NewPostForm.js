import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewPostForm(props) {
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPost({
      name: event.target.name.value,
      author: event.target.author.value,
      post: event.target.post.value,
      title: event.target.title.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewPostSubmission}>
        <input
          className="form-input"
          type="text"
          name="author"
          placeholder="Author"
        />
        <input
          className="form-input"
          type="text"
          name="title"
          placeholder="Type here"
        />
        <textarea
          className="form-input"
          type="text"
          name="post"
          placeholder="Type here"
        />
        <button type="submit">Post</button>
      </form>
      <br />
    </React.Fragment>
  );
}

NewPostForm.propTypes = {
  onNewPost: PropTypes.func,
};

export default NewPostForm;
