import React from "react";
import { useNavigate } from "react-router-dom";



const Contact =()=>
{
    const navigate=useNavigate();
    

   
    setTimeout(()=>{
        navigate('/about')

      //  props.history.push("/about")
    },2000)
    return(
        <div className="ui raised very padded text container segment"
        style={{marginTop:'80px'}}>
            <h3 className="ui header">
                Contact
            </h3>

        </div>
    )
}
export default Contact;