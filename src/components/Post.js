import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <h3>
        {props.title} - {props.author}
      </h3>
      <p>
        <em>{props.post}</em>
      </p>
    </React.Fragment>
  );
}

Post.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  post: PropTypes.string,
  votes: PropTypes.number,
  id: PropTypes.string,
};

export default Post;
