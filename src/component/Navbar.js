import React from "react";
import { Link,NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar=()=>
{
    // const navigate=useNavigate();
    // setTimeout(()=>
    // {
    //     navigate('/about')

    // },2000)
    return(
    <nav className="ui raised very padded segment">
        <a className="ui teal inverted segment">
            Gloria

        </a>
        <div className="ui right floated header">
            <button className="ui button"><Link to="/">Home</Link></button>
            <button className="ui button"><Link to="about">About</Link></button>
            <button className="ui button"><NavLink to="/Contact">Contact</NavLink></button>
            {/* NavLink create a class .by this we can use style in the active link */}
        </div>

    </nav>
    )
}
export default Navbar;