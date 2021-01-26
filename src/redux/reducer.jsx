const initialState = {
  todos: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "load/todo/start":
      return {
        ...state,
        loading: true,
      };
    case "load/todo/success":
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
