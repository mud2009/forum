import React from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function Post(props) {
  return (
    <Card>
      <h3>
        {props.title} - {props.author}
      </h3>
      <p>
        <em>{props.post}</em>
      </p>
      <p>
        {props.upVote} {props.downVote}
      </p>
      <button
        className="btn btn-primary"
        onClick={() =>
          props.onHandleUpVote({
            author: props.author,
            title: props.title,
            post: props.post,
            upVote: props.upVote,
            downVote: props.downVote,
            id: props.id,
          })
        }
      >
        ⬆️
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          props.onHandleDownVote({
            author: props.author,
            title: props.title,
            post: props.post,
            upVote: props.upVote,
            downVote: props.downVote,
            id: props.id,
          })
        }
      >
        ⬇️
      </button>
    </Card>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.string,
  upVote: PropTypes.number,
  downVote: PropTypes.number,
  id: PropTypes.string,
  onHandleDownVote: PropTypes.func,
  onHandleUpVote: PropTypes.func,
  wholePost: PropTypes.object,
};

export default Post;
