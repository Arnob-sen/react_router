import React from "react";
import { useParams } from "react-router-dom";
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class Card extends React.Component
{
   
    componentDidMount()
    {
        let {user}=this.props.params
        console.log(this.props)
    }
    render()
    {
        return(
            <div className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}>
                <h3 className="ui header">
                    
                    Card

                </h3>
    
            </div>
        )
    }
}

export default withParams(Card);