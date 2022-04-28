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
    const { author, title, post, id } = newPost;
    let { upVote, downVote } = newPost;
    const action = {
      type: "ADD_POST",
      author: author,
      title: title,
      post: post,
      upVote: upVote,
      downVote: downVote,
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

  handleDownVote = (votePost) => {
    const { dispatch } = this.props;
    const { author, title, post, id } = votePost;
    let { upVote, downVote } = votePost;
    const action = {
      type: "ADD_POST",
      author: author,
      title: title,
      post: post,
      upVote: upVote,
      downVote: (downVote -= 1),
      id: id,
    };
    dispatch(action);
    this.setState({ formVisible: false });
  };

  handleUpVote = (votePost) => {
    const { dispatch } = this.props;
    let { author, title, post, upVote, downVote, id } = votePost;
    const action = {
      type: "ADD_POST",
      author: author,
      title: title,
      post: post,
      upVote: (upVote += 1),
      downVote: downVote,
      id: id,
    };
    dispatch(action);
    this.setState({ formVisible: false });
    console.log(votePost.upVote);
  };

  render() {
    let buttonText = null;
    let currentlyVisibleState = null;

    if (this.state.formVisible) {
      currentlyVisibleState = <NewPostForm onNewPost={this.handleAddingPost} />;
      buttonText = "Return to Forum";
    } else {
      currentlyVisibleState = (
        <PostList
          postList={this.props.mainPostList}
          onDownVote={this.handleDownVote}
          onUpVote={this.handleUpVote}
        />
      );
      buttonText = "Create Post";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-secondary" onClick={this.handleClick}>
          {buttonText}
        </button>
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

// handleEditingTicketInList = (ticketToEdit) => {
//   const { dispatch } = this.props;
//   const action = a.addTicket(ticketToEdit);
//   dispatch(action);
//   this.setState({
//     editing: false,
//     selectedTicket: null
//   });
// }
