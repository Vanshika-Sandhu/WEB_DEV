import React, { Component } from 'react';
import "./Templates.css";

class Templates extends Component {
    state = { 
        skins: [
            {id:"skin1" , path:"./images/skin1.png"},
            {id:"skin2" , path:"./images/skin2.jpg"},
            {id:"skin3" , path:"./images/skin3.jpg"},
            {id:"skin4" , path:"./images/skin4.png"},
            {id:"skin5" , path:"./images/skin5.png"},
            {id:"skin6" , path:"./images/skin6.jpg"},
            {id:"skin7" , path:"./images/skin7.jpg"},
            {id:"skin8" , path:"./images/skin8.png"},
            {id:"skin9" , path:"./images/skin9.jpg"},
            {id:"skin10" , path:"./images/skin10.jpg"},
        ]
     }
    render() { 
        return ( 
            <div className="templates">
                {
                    this.state.skins.map( skin =>{
                        return <div key={skin.id} className="template">
                            {/* <h2>{skin.id}</h2> */}
                            <div className="template-image">
                                <img src={skin.path} alt=""/>
                            </div>
                            <div className="choose-template">Choose template</div>
                        </div>
                    })
                }
            </div>
         );
    }
}
 
export default Templates;