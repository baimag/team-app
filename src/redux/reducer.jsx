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
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }
    case "make":
      return {
        ...state,
        // favorite: true,
        todos: state.todos.map((todo) => {
          if(todo.id === todo.payload) {
            return {
              ...todo,
              title: "Favorite"
            }
          }
          return todo
        })
      }
      
    default:
      return state;
  }
};

export default reducer;
