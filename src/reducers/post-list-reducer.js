export default function mainPostList(state = {}, action) {
  const { author, title, post, votes, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          author: author,
          title: title,
          post: post,
          votes: votes,
          id: id,
        },
      });
    default:
      return state;
  }
}
