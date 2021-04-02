import React, { Component } from 'react';
import "./Skin3.css";

class Skin3 extends Component {
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

        let userAddress = `${address}, ${city}, ${state}, ${country}, ${pin}.`;

        return ( 
        <div className="page">
            <div className="resume3">
                <div className="resume3-top">
                    <div className="resume3-name">{fname.toUpperCase()} {lname.toUpperCase()}</div>
                    <div className="resume3-profession">{profession.toUpperCase()}</div>
                    <div className="resume3-summary">{summary}</div>
                </div>
                <div className="resume3-body">
                    <div className="resume3-body-left">
                        <div className="resume3-education-details">
                            <div className="resume3-left-heading">EDUCATION</div>
                            <div className="resume3-left-details">
                                <div className="resume3-head">{collegeName}</div>
                                <div className="resume3-subhead">{degree}</div>
                                <div className="resume3-content">Current CGPA {cgpa} | {duration}</div>
                            </div>
                            <div className="resume3-left-details">
                                <div className="resume3-head">{schoolName}</div>
                                <div className="resume3-school-details">
                                    <div>
                                        <div className="resume3-subhead">CLASS 12</div>
                                        <div className="resume3-content">{class12marks} | {class12PassingYear}</div>
                                    </div>
                                    <div>
                                        <div className="resume3-subhead">CLASS 10</div>
                                        <div className="resume3-content">{class10marks} | {class10PassingYear}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="resume3-achievements-details">
                            <div className="resume3-left-heading">ACHIEVEMENTS</div>
                            <div className="resume3-left-details">
                                {
                                    achievements.map((achievement)=>{
                                    return <p className="resume3-subhead">{achievement}</p>
                                    })
                                }
                            </div>
                        </div>      
                        <div className="resume3-hobbies-details">
                            <div className="resume3-left-heading">HOBBIES</div>
                                <div className="resume3-left-details">
                                    {
                                        hobbies.map((hobby)=>{
                                        return <p className="resume3-subhead">{hobby}</p>
                                        })
                                    }
                                </div>
                            </div>
                        <div className="resume3-contact-details">
                          <div>
                              <div>
                                  <i class="fas fa-phone-square-alt icon"></i>
                                  <p className="resume3-subhead">{phone}</p>
                              </div>
                              <div>
                                  <i class="fas fa-envelope-square icon"></i>                                
                                  <p className="resume3-subhead ">{email}</p>
                              </div>
                              <div>
                                  <i class="fab fa-linkedin icon"></i>
                                  <p className="resume3-subhead">{linkedIn}</p>
                              </div>
                              <div>
                                  <i class="fab fa-github-square icon"></i>
                                  <p className="resume3-subhead">{github}</p>
                              </div>
                          </div>
                          <div className="userAddress" >
                              <i class="fas fa-home icon"></i>
                              <p className="resume3-subhead">{userAddress}</p>
                          </div>
                        </div>
                      </div>
                    <div className="resume3-body-right">
                        <div className="resume3-skills-detail">
                          <div className="resume3-left-heading">SKILLS</div>
                          <div className="resume3-skill-sub-detail" >
                            <div className="resume3-head">LANGUAGE</div>
                            <div className="resume3-skills-content">
                              {
                                languages.map((language)=>{
                                  return <div  >{language}</div>
                                })
                              }
                            </div>
                          </div>
                          <div className="resume3-skill-sub-detail" >
                            <div className="resume3-head">FRAMEWORKS</div>
                            <div className="resume3-skills-content">
                              {
                                frameworks.map((framework)=>{
                                  return <div  >{framework}</div>
                                })
                              }
                            </div>
                          </div>
                          <div className="resume3-skill-sub-detail" >
                            <div className="resume3-head">SOFTWARES</div>
                            <div className="resume3-skills-content">
                              {
                                softwares.map((software)=>{
                                  return <div  >{software}</div>
                                })
                              }
                            </div>
                          </div>
                          <div className="resume3-skill-sub-detail" >
                            <div className="resume3-head">IDES</div>
                            <div className="resume3-skills-content">
                              {
                                ides.map((ide)=>{
                                  return <div  >{ide}</div>
                                })
                              }
                            </div>
                          </div>

                        </div>
                        <div className="resume3-experience-details">
                          <div className="resume3-left-heading">TRAINING EXPERIENCE</div>
                          <div>
                            {
                              experienceDetails.map((experienceDetail)=>{
                                return <div>
                                          <div className="resume3-head">{experienceDetail.companyName} | {experienceDetail.position} | {experienceDetail.duration}</div>
                                          <div className="resume3-subhead">{experienceDetail.role}</div>
                                      </div>
                              })
                            }
                          </div>
                        </div>
                        <div className="resume3-project-details">
                          <div className="resume3-left-heading">PROJECTS</div>
                          <div>
                            {
                              projects.map((project)=>{
                                return <div>
                                          <div className="resume3-head">{project.projectName} | {project.techStack} | <a  href="">{project.projectLink}</a></div>
                                          <div className="resume3-subhead">{project.summary}</div>
                                      </div>
                              })
                            }
                          </div>
                        </div>
                        <div className="resume3-POR-details">
                        <div className="resume3-left-heading">POSITION OF RESPONSIBILITY</div>
                          <div>
                            {
                              por.map((POR)=>{
                                return <div>
                                          <div className="resume3-head">{POR.porPosition}</div>
                                          <div className="resume3-subhead">{POR.porSummary}</div>
                                      </div>
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
 
export default Skin3;