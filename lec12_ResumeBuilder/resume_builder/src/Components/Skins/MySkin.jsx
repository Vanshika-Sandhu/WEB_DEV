import React, { Component } from 'react';
import "./MySkin.css";

class MySkin extends Component {

    state = { 
         contactDetails: {
            fname: "VANSHIKA",
            lname: "SANDHU",
            summary: "this is my summary",
            email: "vanshika@gmail.com",
            phone: "+91-12345678",
            profession: "Engineering Student",
            houseNo:"123",
            street: "xyz",
            city: "New Delhi",
            state: "Delhi",
            country: "India",
            pin: "110001",
          },
          educationDetails: {
            collegeName: "NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY",
            degree: "Bachelors of Technology ( ECE )",
            cgpa: "10",
            collegeCity: "New Delhi",
            collegeState: "Delhi",
            graduationMonth: "August",
            graduationYear: "2023",
            schoolName: "SHANTI GYAN NIKETAN SR. SEC. SCHOOL",
            class12: { percentage: "95%" , year:"2019"},
            class10: { cgpa : "10" , year:"2017"}
          },
          experienceDetails: [
            { companyName: "ABC company", duration: "3 months", position: "intern" },
            { companyName: "PQR company", duration: "2.5 month", position: "intern" },
            { companyName: "XYZ company", duration: "2 months", position: "intern" },
          ],
          projects: [
            { projectName: "project1", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"project link" },
            { projectName: "project2", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"project link" },            
            { projectName: "project3", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"project link" },            
            { projectName: "project4", techStack: ["a", "b", "c"], summary: "this is the summary of my project" , projectLink:"project link" }
          ],
          POR : [
              {position: "POR 1" , summary:"POR summary"},
              {position: "POR 2" , summary:"POR summary"},
              {position: "POR 3" , summary:"POR summary"}
          ],
          skills : {
              language : ["" , "" , ""] ,
              frameworks : ["" , "" , ""] ,
              software : ["" , "" , ""] ,
              ide : ["" , "" , ""]
          } ,
          profileLinks : {
              linkedIn : "linkedIn profile" ,
              github : "github profile" 
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
            houseNo,
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
            schoolName,
            class10,
            class12
          } = this.state.educationDetails;
          let experienceDetails = this.state.experienceDetails;
          let projects = this.state.projects;
          let POR = this.state.POR;
          let {linkedIn, github} = this.state.profileLinks;
          let address = `House No. ${houseNo}, Street no. ${street}, ${city}, ${state}, ${country}, ${pin}.`;


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
                        <div className="body">    
                        <div>
                            <i className="fas fa-phone-square-alt itag"></i>
                            <div>{email}</div>
                        </div>
                        <div>
                            <i className="fas fa-envelope itag"></i>
                            <div>{email}</div>
                        </div>
                        <div>
                            <i className="fab fa-linkedin itag"></i>
                            <div><a href="">{linkedIn}</a></div>
                        </div>
                        <div>
                            <i className="fab fa-github itag"></i>
                            <div><a href="">{github}</a></div>
                        </div>
                        <div>
                            <i className="fas fa-home itag"></i>
                            <div>{address}</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="resume-header">
                    <div className="basic-user-details">
                        <div className="user-info">
                        <div className="name">{fname} {lname}</div>
                        <div className="div-line"></div>
                        <div className="profession">{profession}</div>
                        </div>   
                        <div className="user-summary">{summary}</div>
                    </div>
                </div>
                <div className="resume-body">
                    <div className="edutation-details details">
                        <div className="heading">EDUCATION DETAILS</div>
                        <div className="content-body">
                            <div className="college-details">
                                <div className="head">{collegeName}</div>
                                <div className="subhead"> {degree}</div>
                                <div>{cgpa} CGPA</div>
                                <div>{`${graduationMonth} ${graduationYear}`}</div>
                                <div>{`${collegeCity}, ${collegeState}`}</div>
                            </div>
                            <div className="school-details">
                            <div className="head">{schoolName}</div>
                                <div className="body"><div className="subhead">Class 12{" "}</div>{` | ${class12.year} | ${class12.percentage} `} </div>
                                <div className="body"><div className="subhead">Class 10{" "}</div>{` | ${class10.year} | ${class10.cgpa} CGPA `} </div>
                            </div>
                        </div>
                    </div>
                    <div className="experience-details details">
                        <div className="heading">EXPERIENCE</div>
                        <div className="content-body">
                            {
                                experienceDetails.length
                                ? 
                                experienceDetails.map(experience=>{
                                    return (
                                    <div className="experience">
                                        <div className="head">{experience.companyName}</div>
                                        <div>{experience.position}</div>
                                        <div>{experience.duration}</div>
                                    </div>
                                     );
                                })
                                :
                                <div className="experience">No past experience</div>
                            }
                        </div>
                    </div>
                    <div className="project-details details">
                        <div className="heading">PROJECTS</div>
                        <div className="content-body">
                        {
                                projects.length
                                ? 
                                projects.map(project=>{
                                    return (
                                    <div className="project">
                                        <div className="body">
                                            <div className="head">{project.projectName}</div>
                                            <div className="project-link"><a href="">{project.projectLink}</a></div>
                                        </div>
                                        <div className="subhead">{project.techStack}</div>
                                        <div className="summary">{project.summary}</div>
                                    </div>
                                     );
                                })
                                :
                                <div className="experience">No projects</div>
                            }
                       </div>
                    </div>
                    <div className="por-details details">
                        <div className="heading">POSITION OF RESPONSIBILITY</div>
                        <div className="content-body">
                            {
                                POR.length 
                                ?
                                (
                                    POR.map(por=>{
                                    return (
                                    <div className="por">
                                        <div className="head">{por.position}</div>
                                        <div className="summary">{por.summary}</div>
                                    </div>
                                    );
                                    })
                                )
                                :
                                    <div className="por">No PORs</div>
                            }
                        </div>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default MySkin;