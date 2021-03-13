import React, { Component } from 'react';
import "./MySkin.css";

class MySkin extends Component {

    state = { 
        contactDetails: {
            fname: "STEVE",
            lname: "",
            summary: "",
            email: "",
            phone: "",
            profession: "",
            street: "",
            city: "",
            state: "",
            country: "",
            pin: "",
          },
          educationDetails: {
            collegeName: "",
            degree: "",
            cgpa: "",
            collegeCity: "",
            collegeState: "",
            graduationMonth: "",
            graduationYear: "",
          },
          experienceDetails: [
            { companyName: "", duration: "", position: "" },
            { companyName: "", duration: "", position: "" },
            { companyName: "", duration: "", position: "" },
          ],
          projects: [
            { projectName: "", techStack: ["", "", ""], summary: "" , projectLink:"" },
            { projectName: "", techStack: ["", "", ""], summary: "" , projectLink:""},
            { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""},
            { projectName: "", techStack: ["", "", ""], summary: ""  , projectLink:""}
          ],
          skills : {
              language : ["" , "" , ""] ,
              frameworks : ["" , "" , ""] ,
              software : ["" , "" , ""] ,
              ide : ["" , "" , ""]
          } ,
          profileLinks : {
              linkedIn : "" ,
              github : "" 
          } ,
          achievements : ["" ,"" ,"" , "" ,""] ,
          hobbies : ["" , "" , "" , "" , ""]
     };



    render() { 

        let {
            fname,
            lname,
            summary,
            email,
            phone,
            profession,
            street,
            city,
            state,
            country,
            pin,
          } = this.state.contactDetails;
          let {
            collegeName,
            degree,
            cgpa,
            collegeCity,
            collegeState,
            graduationMonth,
            graduationYear,
          } = this.state.educationDetails;


        return ( 
            <div className="resume-skin">
                <div className="resume-left-strap">
                    <div className="skills">
                        <div className="heading">SKILLS</div>
                        <ul>
                            <li>C++</li>
                            <li>Data Structures and Algorithms</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div className="achievements">
                        <div className="heading">ACHIEVEMENTS</div>
                        <ul>
                            <li>Achievement 1</li>
                            <li>Achievement 2</li>
                            <li>Achievement 3</li>
                            <li>Achievement 4</li>
                            <li>Achievement 5</li>
                        </ul>
                    </div>
                    <div className="interests">
                        <div className="heading">INTERESTS</div>
                        <ul>
                            <li>Interest 1</li>
                            <li>Interest 2</li>
                            <li>Interest 3</li>
                        </ul>
                    </div>
                    <div className="contact-details">
                        <div className="heading">CONTACT</div>
                        <ul>  
                            <li><div className="phone-no">12345678</div></li>
                            <li><div className="email">abcd@gmail.com</div></li>
                            <li><div className="linkedIn-profile">linkedIn profile</div></li>
                            <li><div className="github-profile">github profile</div></li>
                            <li><div className="address">House no 123, XYZ Colony, ABC road, near PQR, New Delhi, Delhi, 110001, India</div></li>
                        </ul>
                    </div>
                </div>
                <div className="resume-header">
                    <div className="basic-user-details">
                        <div className="user-info">
                        <div className="name">{fname}</div>
                        <div className="div-line"></div>
                        <div className="profession">Engineering Student</div>
                        </div>   
                        <div className="user-summary">this is my summary</div>
                    </div>
                </div>
                <div className="resume-body">
                    <div className="edutation-details details">
                        <div className="heading">EDUCATION DETAILS</div>
                        <div className="content-body">
                            <div className="college-details">
                                <div className="college-name head">NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY</div>
                                <div className="degree subhead"> Bachelors of Technology ( ECE )</div>
                                <div className="cgpa">10 CGPA</div>
                                <div className="grad-year-details body">
                                    <div className="grad-month">August</div>
                                    <div className="grad-year">2023</div>
                                </div>
                                <div className="college-city-details body">
                                    <div className="city ">New Delhi,</div>
                                    <div className="state ">Delhi</div>
                                </div>
                            </div>
                            <div className="school-details">
                            <div className="school-name head">SHANTI GYAN NIKETAN SR. SEC. SCHOOL</div>
                                <div className="class">
                                    <div className="class-head subhead">Class 12  |</div>
                                        <div className="passing-year subhead">2019  |</div>
                                        <div className="cgpa subhead">95%</div>
                                </div>
                                <div className="class">
                                    <div className="class-head subhead">Class 10  |</div>
                                        <div className="passing-year subhead" >2017 |</div>
                                        <div className="cgpa subhead">10 CGPA</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-details details">
                        <div className="heading">EXPERIENCE</div>
                        <div className="content-body">
                        <div className="experience">
                            <div className="company-name head">ABCD COMPANY</div>
                            <div className="duration summary">3 months</div>
                            <div className="position summary">Intern</div>
                        </div>
                        <div className="experience">
                            <div className="company-name head">ABCD COMPANY</div>
                            <div className="duration summary">3 months</div>
                            <div className="position summary">Intern</div>
                        </div>
                        </div>
                    </div>
                    <div className="project-details details">
                        <div className="heading">PROJECTS</div>
                        <div className="content-body">
                        <div className="project">
                            <div className="body">
                                <div className="project-name head">Project name</div>
                                <div className="project-link"><a href="">project link</a></div>
                            </div>
                            <div className="project-techstack subhead">techstack</div>
                            <div className="project-summary summary">this is my project summary</div>
                        </div>
                        <div className="project">
                            <div className="body">
                                <div className="project-name head">Project name</div>
                                <div className="project-link"><a href="">project link</a></div>
                            </div>
                            <div className="project-techstack subhead">techstack</div>
                            <div className="project-summary summary">this is my project summary</div>
                        </div>
                        <div className="project">
                            <div className="body">
                                <div className="project-name head">Project name</div>
                                <div className="project-link"><a href="">project link</a></div>
                            </div>
                            <div className="project-techstack subhead">techstack</div>
                            <div className="project-summary summary">this is my project summary</div>
                        </div>
                        <div className="project">
                            <div className="body">
                                <div className="project-name head">Project name</div>
                                <div className="project-link"><a href="">project link</a></div>
                            </div>
                            <div className="project-techstack subhead">techstack</div>
                            <div className="project-summary summary">this is my project summary</div>
                        </div>
                        </div>
                    </div>
                    <div className="POR-details details">
                        <div className="heading">POSITION OF RESPONSIBILITY</div>
                        <div className="content-body">
                        <div className="por">
                            <div className="postion-name head">POR</div>
                            <div className="por-summary summary">this is my POR summary</div>
                        </div>
                        <div className="por">
                            <div className="postion-name head">POR</div>
                            <div className="por-summary summary">this is my POR summary</div>
                        </div>
                        <div className="por">
                            <div className="postion-name head">POR</div>
                            <div className="por-summary summary">this is my POR summary</div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default MySkin;