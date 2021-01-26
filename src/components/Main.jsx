import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadTodos } from "../redux/actions";
import MainContent from "./MainContent";

function Main() {
  const todos = useSelector(state => state.todos);
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  console.log(todos);
  return (
      <div>
          {loading ? <h1>идет загрузка</h1> : (todos.map(todo => {
              return (
                  <div className="wrapper">
                      <MainContent todo={todo}/>
                  </div>
              )
          }))}
      </div>
  );
}
export default Main;
