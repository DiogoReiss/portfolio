const reducer = (state = {}, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        state,
        loading: true,
      };
    case "LOADED":
      return {
        state,
        loading: false,
        repos: action.json
      };
    default:
      return {
        state,
        loading: true
      };
  }
};

export default reducer;