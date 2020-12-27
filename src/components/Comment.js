import {NavLink, useParams} from "react-router-dom";
import React from "react";
import GetImage from "./GetImage";
import Comments from "./Comments";
import {useSelector} from "react-redux";


function Comment(props) {
    const params = parseInt(useParams().id);
    const loading = useSelector(state => state.comments.loadItems)

    return(
        loading ? "идет загрузка" :
              <div className={`comment ${params === props.image.id ? "active" : ""}`}>
                  <div className="content">
                      <NavLink  exact activeClassName="" className="exit" to="/">
                          <i className="fa fa-times" aria-hidden="true"></i>
                      </NavLink>
                <GetImage image={props.image}/>
                <Comments image={props.image} params={params}/>
                  </div>
              </div>
    )
}
export default Comment