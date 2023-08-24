import React from "react";
import { ReactDOM } from "react";
import { createPortal,render } from "react-dom"; 
const Modal=(props)=>
{
    return createPortal(
        <div className="ui dimmer show modals visible active">
            <div className="ui raised very padded text container segment">
                <h1>
        I am a modal
                </h1>

            </div>
        </div>,
        document.getElementById("modal")

   
       
    );

}
export default Modal;