import React from "react";
import NewPostForm from "./NewPostForm";
import PostList from "./PostList";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class ForumControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
    };
  }

  handleAddingPost = (newPost) => {
    const { dispatch } = this.props;
    const { author, title, post, votes, id } = newPost;
    const action = {
      type: "ADD_POST",
      author: author,
      title: title,
      post: post,
      votes: votes,
      id: id,
    };
    dispatch(action);
    this.setState({ formVisible: false });
  };

  handleClick = () => {
    this.setState((prevState) => ({
      formVisible: !prevState.formVisible,
    }));
  };
  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.formVisible) {
      currentlyVisibleState = <NewPostForm onNewPost={this.handleAddingPost} />;
      buttonText = "Return to Forum";
    } else {
      currentlyVisibleState = <PostList postList={this.props.mainPostList} />;
      buttonText = "Create Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ForumControl.propTypes = {
  mainPostList: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    mainPostList: state,
  };
};

ForumControl = connect(mapStateToProps)(ForumControl);

export default ForumControl;
