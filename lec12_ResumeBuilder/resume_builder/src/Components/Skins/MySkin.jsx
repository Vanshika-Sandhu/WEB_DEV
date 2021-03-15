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
          skills : ["C++" , "JavaScript" , "HTML" , "React" , "CSS" , "JQuery"] ,
          profileLinks : {
              linkedIn : "linkedIn profile" ,
              github : "github profile" 
          } ,
          achievements : ["Achievement 1" ,"Achievement 2" ,"Achievement 3" , "Achievement 4" ,"Achievement 5"] ,
          hobbies : ["hobby 1" , "hobby 2" , "hobby 3" , "hobby 4" ]
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
          let skills = this.state.skills;
          let achievements = this.state.achievements;
          let hobbies = this.state.hobbies;
          let address = `House No. ${houseNo}, Street no. ${street}, ${city}, ${state}, ${country}, ${pin}.`;


        return ( 
            <div className="resume-skin">
                <div className="resume-left-strap">
                    {
                        skills.length
                        ?
                        <div className="skills">
                            <div className="heading">SKILLS</div>
                            <ul className="list">
                                {
                                    skills.map(skill=>{
                                        return (<li>{skill}</li>);
                                    })
                                }
                            </ul>
                        </div>
                        :
                        <div></div>
                    }

                    {
                        achievements.length 
                        ?
                            (<div className="achievements">
                            <div className="heading">ACHIEVEMENTS</div>
                            <ul className="list">
                                {
                                achievements.map(achievement=>{
                                    return (
                                    <li>{achievement}</li>
                                    );
                                }
                                )
                            }
                            </ul>
                        </div>)
                        : 
                        <div></div>
                    }
                    {
                        hobbies.length ?
                        (
                            <div className="interests">
                            <div className="heading">INTERESTS</div>
                            <ul className="list">
                                {
                                        hobbies.map(hobby=>{
                                            return (
                                            <li>{hobby}</li>
                                            );
                                        }
                                        )
                                }
    
                            </ul>
                        </div>
                        )
                        :
                        <div></div>
                    }
                   
                    <div className="contact-details">
                        <div className="heading">CONTACT</div>
                        <div className="body">    
                        <div>
                            <i className="fas fa-phone-square-alt itag"></i>
                            <div>{phone}</div>
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
                    {
                        experienceDetails.length
                        ?
                            <div className="experience-details details">
                                <div className="heading">EXPERIENCE</div>
                                <div className="content-body">
                                    {
                                        experienceDetails.map(experience=>{
                                            return (
                                            <div className="experience">
                                                <div className="head">{experience.companyName}</div>
                                                <div>{experience.position}</div>
                                                <div>{experience.duration}</div>
                                            </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        :
                        <div></div>
                    }
                    {
                        projects.length
                        ? 
                        <div className="project-details details">
                            <div className="heading">PROJECTS</div>
                            <div className="content-body">
                                {
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
                                }
                            </div>
                        </div>
                            :
                            <div></div>
                    }

                    {
                        POR.length 
                        ?
                        (
                        <div className="por-details details">
                            <div className="heading">POSITION OF RESPONSIBILITY</div>
                            <div className="content-body">
                            {
                                POR.map(por=>{
                                    return (
                                        <div className="por">
                                        <div className="head">{por.position}</div>
                                        <div className="summary">{por.summary}</div>
                                    </div>
                                    );
                                })
                            }
                            </div>
                        </div>
                        )
                        :
                            <div></div>
                        }
                </div>
            </div>
         );
    }
}
 
export default MySkin;