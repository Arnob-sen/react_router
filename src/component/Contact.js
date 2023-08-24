import React from "react";
import { Link, useNavigate,NavLink } from "react-router-dom";
import Modal from "./Modal";



const Contact =()=>
{
    // const navigate=useNavigate();
    

   
    // setTimeout(()=>{
    //     navigate('/about')

    //   //  props.history.push("/about")
    // },2000)
    return(
        <div>
            <Modal />
        <div className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}>
            <Link to='/alex' className="ui header">
                Contact alex
            </Link>

        </div>
        <div className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}>
            <Link to='/arnob' className="ui header">
                Contact arnob
            </Link >

        </div>
        </div>
    )
}
export default Contact;