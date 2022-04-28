import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import { TextField, Grid } from "@mui/material";
import Card from "./shared/Card";

function NewPostForm(props) {
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPost({
      name: event.target.name.value,
      author: event.target.author.value,
      post: event.target.post.value,
      title: event.target.title.value,
      upVote: 0,
      downVote: 0,
      id: v4(),
    });
  }

  return (
    <Card>
      <Grid container spacing={2} columnSpacing={4}>
        <form onSubmit={handleNewPostSubmission}>
          <Grid item>
            <TextField
              label="Author"
              className="form-input"
              type="text"
              name="author"
              placeholder="Author"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Title"
              className="form-input"
              type="text"
              name="title"
              placeholder="Type here"
            />
          </Grid>
          <Grid item>
            <TextField
              label="Multiline"
              rows={2}
              maxRows={4}
              multiline
              className="form-input"
              type="text"
              name="post"
              placeholder="Type here"
            />
          </Grid>
          <Grid>
            <button className="btn btn-secondary" type="submit">
              Post
            </button>
          </Grid>
        </form>
        <br />
      </Grid>
    </Card>
  );
}

NewPostForm.propTypes = {
  onNewPost: PropTypes.func,
};

export default NewPostForm;
