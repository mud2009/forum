export default function mainPostList(state = {}, action) {
  let { author, title, post, upVote, downVote, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          author: author,
          title: title,
          post: post,
          upVote: upVote,
          downVote: downVote,
          id: id,
        },
      });
    default:
      return state;
  }
}
