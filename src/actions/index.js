import nyx from "../apis/nyx";

export const fetchPosts = currentPage => async dispatch => {
  const response = await nyx.post("/books", {
    page: currentPage
  });

  dispatch({
    type: "FETCH_POSTS",
    payload: response.data
  });
};
