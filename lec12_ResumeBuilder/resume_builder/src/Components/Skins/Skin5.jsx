import React, { Component } from 'react';
import "./Skin5.css";

class Skin5 extends Component {
  state = {
    contactDetails: {
      fname: "Vanshika",
      lname: "Sandhu",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magni, perspiciatis,placeat quidem ipsum officiis, nemo mollitia optio labore hic maiores repudiandae est debitis inventore vel pariatur deleniti? Obcaecati, odit!",
      email: "sandhuvanshika01@gmail.com",
      phone: "+91 1234567899",
      profession: "Software Engineer",
      address:"RZG 595 A, Raj Nagar 2, Palam Colony",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      pin: "110077",
    },
    educationDetails: {
      collegeName: "Netaji Subhas University of Technology",
      degree: "Bachelor of Technology in Electronics and Communications Engineering",
      cgpa: "8.5",
      collegeState: "Delhi",
      duration: "2019 - 2023",
      schoolName : "Shanti Gyan Niketan Sr. Sec. Public School",
      class10marks : "10 CGPA",
      class10PassingYear: "2017",
      class12marks : "95%",
      class12PassingYear: "2019",
      schoolState: "Delhi",
    },
    experienceDetails: [
      {
        companyName: "Google",
        duration: "June 2019 - July 2019",
        position: "Software Engineer Intern",
        role:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
      },
      {
        companyName: "Microsoft",
        duration: "June 2020 - July 2020",
        position: "Software Engineer Intern",
        role:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
      },
      {
        companyName: "Deutsche Bank",
        duration: "June 2021 - July 2021",
        position: "Software Engineer Intern",
        role:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia.",
      },
    ],
    projects: [
      {
        projectName: "Project 1",
        techStack: ["ahjfex", "fdghuij", "vsfajgkhj"],
        summary:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nisi, repellat similique enim ipsum laudantium reiciendis voluptates, deleniti pariatur, excepturi aspernatur nihil minima repellendus a ad.",
        projectLink: "www.gxdefyb.com",
      },
      {
        projectName: "Project 2",
        techStack: ["rehjk", "wetyfug", "dsfghvjbn"],
        summary:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, id. Minus quia libero nesciunt. Quas, sed neque cum molestiae consectetur magnam omnis dolore corrupti nam laboriosam nostrum vero, assumenda minus!",
        projectLink: "www.tewghio.com",
      },
      {
        projectName: "Project 3",
        techStack: ["qewrfyguh", "rdftygu", "dfg"],
        summary:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quis vero commodi beatae, temporibus itaque alias? Rerum repudiandae nesciunt quos quae, quasi sequi repellat commodi eligendi.",
        projectLink: "www.fegyuh.com",
      },
    ],
    skills: {
      languages: ["C/C++", "Java", "Javascript"],
      frameworks: ["ceay", "xqehgrt", "zrtqyu"],
      softwares: ["ev3y2qj", "e23vg", "3v2hz1"],
      ides: ["wyixl", "q2zdfgh", "zwscj"],
    },
    profileLinks: {
      linkedIn: "www.linkedin.com/vanshikasandhu",
      github: "www.github.com/vanshikasandhu",
    },
    achievements: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio voluptates minus eaque numquam.",
    ],
    por:[
      {
        porPosition:"frfvngrihvtr",
        porSummary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia."
      },
      {
        porPosition:"frfvngrihvtr",
        porSummary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia."
      },
      {
        porPosition:"frfvngrihvtr",
        porSummary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iusto minima distinctio odit, iste animi amet provident, alias iure qui ut excepturi nihil, placeat ea dolore maxime quas dicta quia."
      }
    ], 
    hobbies: [
      "xquvyut",
      "yavjuwtbhzqd",
      "zqfiuykewiql",
      "hdbfergjth"
    ],
  };

render() { 

    let {
        fname,
        lname,
        summary,
        email,
        phone,
        profession,
        address,
        city,
        state,
        country,
        pin,
      } = this.props.contactDetails ? this.props.contactDetails : this.state.contactDetails;
      
      let {
        collegeName,
        degree,
        cgpa,
        collegeState,
        duration,
        schoolName,
        class10marks,
        class10PassingYear,
        class12marks,
        class12PassingYear,
        schoolState,
      } = this.props.educationDetails ? this.props.educationDetails : this.state.educationDetails;
  
      
      let experienceDetails = this.state.experienceDetails;
      let projects = this.state.projects;
      let por = this.state.por;
      let {languages, frameworks,softwares, ides} = this.state.skills;
      let {linkedIn, github} = this.state.profileLinks;
      let achievements = this.state.achievements;
      let hobbies = this.state.hobbies;

      let userAddress = `${address}, ${city}, ${state}, ${country}, ${pin}.`


        return ( 
            <div className="page">
                <div className="resume5">
                  <div className="r5-d1">
                    <div className="r5-d1-l">
                      <div className="r5-name-info">
                        <div className="r5-fname">{fname.toUpperCase()}</div>
                        <div className="r5-lname">{lname.toUpperCase()}</div>
                      </div>
                      <div className="r5-profession">{profession.toUpperCase()}</div>
                      <div className="r5-summary">{summary}</div>
                    </div>
                    <div className="r5-d1-r">
                      <div className="r5-contact">
                        <div className="r5-r-content">
                          <div className="phone">{phone}</div>
                          <i class="fas fa-phone-square-alt"></i>
                        </div>
                        <div className="r5-r-content">
                          <div>{email}</div>
                          <i class="fas fa-envelope-square"></i>  
                        </div>   
                        <div className="r5-r-content">
                          <div>{linkedIn}</div>
                          <i class="fab fa-linkedin"></i>
                        </div>
                        <div className="r5-r-content">
                          <div>{github}</div>
                          <i class="fab fa-github-square"></i>
                        </div>
                        <div className="r5-r-content">
                          <div>{userAddress}</div>
                          <i class="fas fa-home"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="r5-d2"> 
                    <div className="r5-d2-r">
                      <div className="resume5-experience">
                      <div className="resume5-r-heading">TRAINING AND EXPERIENCE</div>
                          <div>
                            {
                              experienceDetails.map((experienceDetail)=>{
                                return <div>
                                          <div className="resume5-head">{experienceDetail.companyName} | {experienceDetail.position} | {experienceDetail.duration}</div>
                                          <div className="resume5-experience-content">{experienceDetail.role}</div>
                                      </div>
                              })
                            }
                          </div>
                      </div>
                    </div>
                    <div className="r5-d2-l">
                      <div className="resume5-skills">
                      <div className="resume5-l-heading">SKILLS</div>
                          <div className="resume5-skill-sub-detail" >
                            <div className="resume5-head">LANGUAGE</div>
                            <div className="resume5-skills-content">
                              {
                                languages.map((language)=>{
                                  return <div  >{language}</div>
                                })
                              }
                            </div>
                          </div>
                          <div className="resume5-skill-sub-detail" >
                            <div className="resume5-head">FRAMEWORKS</div>
                            <div className="resume5-skills-content">
                              {
                                frameworks.map((framework)=>{
                                  return <div  >{framework}</div>
                                })
                              }
                            </div>
                          </div>
                          <div className="resume5-skill-sub-detail" >
                            <div className="resume5-head">SOFTWARES</div>
                            <div className="resume5-skills-content">
                              {
                                softwares.map((software)=>{
                                  return <div  >{software}</div>
                                })
                              }
                            </div>
                          </div>
                          <div className="resume5-skill-sub-detail" >
                            <div className="resume5-head">IDES</div>
                            <div className="resume5-skills-content">
                              {
                                ides.map((ide)=>{
                                  return <div  >{ide}</div>
                                })
                              }
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="r5-d3">
                    <div className="r5-body">
                      <div className="r5-d3-l">
                      <div className="resume5-project">
                      <div className="resume5-r-heading">PROJECT</div>
                            {
                              projects.map((project)=>{
                                return <div>
                                          <div className="resume5-head">{project.projectName} | {project.techStack} | {project.projectLink}</div>
                                          <div className="resume5-experience-content">{project.summary}</div>
                                      </div>
                              })
                            }
                      </div>
                      </div>
                      <div className="r5-d3-l">
                        <div className="resume5-education">
                          <div className="resume5-r-heading">EDUCATION</div>
                          <div>
                              <div className="resume5-head">{collegeName}, {collegeState}</div>
                              <div className="resume5-education-content"><strong>{degree}</strong></div>
                              <div className="resume5-education-content">CGPA{cgpa} | {duration}</div>
                          </div>
                          <div>
                              <div className="resume5-head">{schoolName}, {schoolState}</div>
                              <div className="r5-division">
                                <div>
                                  <div className="resume5-education-content"><strong>Class 12</strong></div>
                                  <div className="resume5-education-content">{class12marks} | {class12PassingYear}</div>
                                </div>
                                <div>
                                  <div className="resume5-education-content"><strong>Class 10</strong></div>
                                  <div className="resume5-education-content">{class10marks} | {class10PassingYear}</div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="r5-d3-r">
                    <div className="resume5-achievement">
                      <div className="resume5-l-heading">ACHIEVEMENTS</div>
                            <div className="resume5-skills-content">
                              {
                                achievements.map((achievement)=>{
                                  return <div  >{achievement}</div>
                                })
                              }
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="r5-d4">
                    <div className="r5-d4-l">
                    <div className="resume5-experience">
                      <div className="resume5-r-heading">POSITION OF RESPONSIBILITY</div>
                          <div>
                            {
                              por.map((POR)=>{
                                return <div className="r5-div">
                                          <div className="resume5-head">{POR.porPosition}</div>
                                          <div className="resume5-experience-content">{POR.porSummary}</div>
                                      </div>
                              })
                            }
                          </div>
                      </div>
                    </div>
                    <div className="r5-d4-r">
                      <div className="resume5-hobbies">
                      <div className="resume5-l-heading">INTERESTS</div>
                        <div className="resume5-hobby-sub-detail" >
                          {
                            hobbies.map((hobby)=>{
                              return <div  >{hobby}</div>
                            })
                          }
                       </div> 
                      </div>
                    </div>
                  </div>
                </div>
            </div>
         );
    }
}
 
export default Skin5;