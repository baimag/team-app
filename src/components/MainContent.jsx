function MainContent(props) {
    return(
        <ul className="mainContent">
            <li>
              <input type="checkbox"/>  {props.todo.title} <span>❌</span>
            </li>
        </ul>
    )
}
export default MainContent