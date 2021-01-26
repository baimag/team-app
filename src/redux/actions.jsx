export const loadTodos = () => {
  return function (dispatch) {
    dispatch({ type: "load/todo/start" });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load/todo/success",
          payload: json,
        });
      });
  };
};
export const removePhoto = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "delete",
          payload: id,
        });
      });
  };
};
export const makeFavorite = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/todos//${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        title: "Favorite",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        dispatch({
          type: "make",
          payload: id,
        });
      });
  };
};
