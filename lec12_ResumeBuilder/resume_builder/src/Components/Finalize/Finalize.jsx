import React, { Component } from 'react';
import "./Finalize.css";
import Skin2 from '../Skins/Skin1';
import firebaseApp from '../../firebase/firebaseConfig';
import ReactToPDF from "react-to-pdf";

class Finalize extends Component {
    state = { 
        skinId:null,
        educationDetails: {
            collegeName:"",
            degree:"",
            cgpa:"",
            collegeCity:"",
            collegeState:"",
            collegeCountry:"",
            duration:"",
            schoolName:"",
            class10marks:"",
            class10PassingYear:"",
            class12marks:"",
            class12PassingYear:"",
            schoolCity:"",
            schoolState:"",
            schoolCountry:""
          },
          contactDetails: {
            fname: "",
            lname: "",
            summary: "",
            email: "",
            phone: "",
            profession: "",
            houseNo:"",
            street: "",
            city: "",
            state: "",
            country: "",
            pin: "",
          },
          skins: [
            {id:"skin1" , path:"./images/skin1.png"},
            {id:"skin2" , path:"./images/skin2.png"},
            {id:"skin3" , path:"./images/skin3.png"},
            {id:"skin4" , path:"./images/skin4.png"},
            {id:"skin5" , path:"./images/skin5.png"},
            {id:"skin6" , path:"./images/skin6.png"},
            {id:"skin7" , path:"./images/skin7.png"},
            {id:"skin8" , path:"./images/skin8.png"},
            {id:"skin9" , path:"./images/skin9.png"},
            {id:"skin10" , path:"./images/skin10.png"},
        ]
     };

    componentDidMount(){
        // get all information
        firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).get().then(doc=>{
            let {skinId, educationDetails, contactDetails} = doc.data();
            this.setState({
                skinId,
                educationDetails,
                contactDetails
            })
        })
    };

    BackButtonHandler =()=>{
        // console.log("inside back button handler");
        this.props.history.goBack();
    };

    templateClickHandler = async(e) =>{
        console.log("inside template click handler");
        let newSkinId = e.target.id;
        console.log(newSkinId);
        // await firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).update({
        //     skinId:newSkinId
        // });
    };

    resume = React.createRef();

    render() { 
        let {skinId, contactDetails, educationDetails} = this.state;
        return ( 
            <div className="finalize-page">
                <div className="bg-image">
                    <img src="/Images/bgImage.jpg" alt=""/>
                </div>
                <div className="finalize">
                    <div className="finalize-viewer">
                        <Skin2 refProp={this.resume} contactDetails={contactDetails} educationDetails={educationDetails} ></Skin2>
                    </div>
                    <ReactToPDF targetRef = {this.resume} filename="resume.pdf" >
                        { ({toPdf}) =>{
                            return <button className="btn download-btn" onClick={toPdf} >Download</button>
                            }}
                    </ReactToPDF>
                    <button className="btn back" onClick={this.BackButtonHandler} >Back</button>
                </div> 
                <div className="other-templates">
                    <h5>See how your resume looks with other templates</h5>
                    <div className="other-templates-display">
                    {
                        this.state.skins.map( skin =>{
                            return <div key={skin.id} onClick={(e)=>this.templateClickHandler(e)} className="template">
                                <div className="template-image">
                                    <img id={skin.id} src={skin.path} alt=""/>
                                </div>
                                {/* <div className="choose-template" id={skin.id} onClick={(e)=>this.handleChooseTemplate(e)}>Choose template</div> */}
                            </div>
                        })
                    }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Finalize;