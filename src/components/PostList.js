import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.postList)
        .sort((a, b) => b.upVote + b.downVote - (a.upVote + a.downVote))
        .map((post) => (
          <Post
            wholePost={post}
            onHandleDownVote={props.onDownVote}
            onHandleUpVote={props.onUpVote}
            title={post.title}
            author={post.author}
            post={post.post}
            upVote={post.upVote}
            downVote={post.downVote}
            id={post.id}
            key={post.id}
          />
        ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onDownVote: PropTypes.func,
  onUpVote: PropTypes.func,
};

export default PostList;
