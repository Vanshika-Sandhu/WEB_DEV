import React, { Component } from 'react';
import "./Templates.css";
import firebaseApp from "../../firebase/firebaseConfig";
import initialState from "../../util/initialState";
import firebase from "firebase";


class Templates extends Component {
    state = { 

        skins: [
            {id:"skin1" , path:"./images/skin1.png"},
            {id:"skin2" , path:"./images/skin2.png"},
            {id:"skin3" , path:"./images/skin3.jpg"},
            {id:"skin4" , path:"./images/skin4.png"},
            {id:"skin5" , path:"./images/skin5.png"},
            {id:"skin6" , path:"./images/skin6.jpg"},
            {id:"skin7" , path:"./images/skin7.jpg"},
            {id:"skin8" , path:"./images/skin8.png"},
            {id:"skin9" , path:"./images/skin9.jpg"},
            {id:"skin10" , path:"./images/skin10.jpg"},
        ]
     };


     handleChooseTemplate = async (e) =>{
         if(!this.props.isAuth){
            this.props.history.push("/signin");
         }
         else{

             let skinId = e.target.id;
             console.log(skinId);
             let resumeId;
             // get skinId
             if(this.props.resumeId){
                 let addObj = await firebaseApp.firestore().collection("Resumes").add({skinId:skinId , ...initialState });
                 // console.log(addObj);
                 resumeId = addObj.id;
                 await firebaseApp.firestore().collection("Users").doc(this.props.uid).update({
                     Resumes: firebase.firestore.FieldValue.arrayUnion(resumeId)
                    }); //returns nothing, just updates the document
                    this.props.history.push("/contact");
                    this.props.setResumeId(resumeId);
                }
                else{
                    this.props.history.push("/contact");
                }
            }
        //window.location = "/contact";  => this will force the page to reload
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
                            <div className="choose-template" id={skin.id} onClick={(e)=>this.handleChooseTemplate(e)}>Choose template</div>
                        </div>
                    })
                }
            </div>
         );
    }
}
 
export default Templates;