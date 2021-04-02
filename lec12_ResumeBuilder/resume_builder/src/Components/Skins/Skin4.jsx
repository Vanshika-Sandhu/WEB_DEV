import React, { Component } from 'react';
import "./Skin4.css"

class Skin4 extends Component {
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
            <div className="resume4">
                <div className="resume4-top">
                    <div className="resume4-top-line"></div>
                    <div className="resume4-name-info">
                        <div className="resume4-fname">{fname.toUpperCase()}</div>
                        <div className="resume4-lname">{lname.toUpperCase()}</div>
                    </div>
                    <div className="resume4-profession">{profession.toUpperCase()}</div>
                    <div className="resume4-contact-detail-info">    
                          <div>
                              <i class="fas fa-phone-square-alt"></i>
                              <p className="resume4-subhead">{phone}</p>
                          </div>
                          <div>
                              <i class="fas fa-envelope-square"></i>                                
                              <p className="resume4-subhead ">{email}</p>
                          </div>
                          <div>
                              <i class="fab fa-linkedin"></i>
                              <p className="resume4-subhead">{linkedIn}</p>
                          </div>
                          <div>
                              <i class="fab fa-github-square"></i>
                              <p className="resume4-subhead">{github}</p>
                          </div>
                          
                          <div className="" >
                              <i class="fas fa-home"></i>
                              <p className="resume4-subhead">{userAddress}</p>
                          </div>
                    </div>
                </div>
                <div className="resume4-summary">
                    <i class="fas fa-quote-left"></i>
                    <div>{summary}</div>
                    <i class="fas fa-quote-right"></i>
                </div>
                <div className="resume4-skills-detail-info">
                <div className="resume4-heading-div">
                    <div className="r4-line"></div>
                    <div className="resume4-heading">SKILLS</div>
                    </div>
                        <div className="resume4-skill-sub-detail" >
                        <div className="resume4-head">LANGUAGE</div>
                        <div className="resume4-skills-content">
                            {
                            languages.map((language)=>{
                                return <div  >{language}</div>
                            })
                            }
                        </div>
                        </div>
                        <div className="resume4-skill-sub-detail" >
                        <div className="resume4-head">FRAMEWORKS</div>
                        <div className="resume4-skills-content">
                            {
                            frameworks.map((framework)=>{
                                return <div  >{framework}</div>
                            })
                            }
                        </div>
                        </div>
                        <div className="resume4-skill-sub-detail" >
                        <div className="resume4-head">SOFTWARES</div>
                        <div className="resume4-skills-content">
                            {
                            softwares.map((software)=>{
                                return <div  >{software}</div>
                            })
                            }
                        </div>
                        </div>
                        <div className="resume4-skill-sub-detail" >
                        <div className="resume4-head">IDES</div>
                        <div className="resume4-skills-content">
                            {
                            ides.map((ide)=>{
                                return <div  >{ide}</div>
                            })
                            }
                        </div>
                        </div>
                    </div>
                <div className="resume4-experience-detail">
                    <div className="resume4-heading-div">
                        <div className="r4-line"></div>
                        <div className="resume4-heading">TRAINING EXPERIENCE</div>
                    </div>
    
                        <div className="resume4-skills-content">
                            {
                              experienceDetails.map((experienceDetail)=>{
                                return <div className="r4-exp-body">
                                          <div className="resume4-head">
                                              <div>{experienceDetail.companyName}</div>
                                              <div>{experienceDetail.position}</div>
                                              <div>{experienceDetail.duration}</div>
                                          </div>
                                          
                                          <div className="resume4-subhead">{experienceDetail.role}</div>
                                      </div>
                              })
                            }
                    </div>
                </div>
                <div className="resume4-project-detail">
                    <div className="resume4-heading-div">
                            <div className="r4-line"></div>
                            <div className="resume4-heading">PROJECTS</div>
                    </div>
                    <div className="resume4-skills-content">
                        {
                          projects.map((project)=>{
                            return <div className="r4-exp-body">
                                      <div className="resume4-head">
                                          <div>{project.projectName}</div>
                                          <div>{project.projectLink}</div>
                                          <div>{project.techStack}</div>
                                      </div>
                                      <div className="resume4-subhead">{project.summary}</div>
                                  </div>
                          })
                        }
                    </div>
                </div>
                <div className="resume4-por-detail">
                  <div className="resume4-heading-div">
                      <div className="r4-line"></div>
                      <div className="resume4-heading">POSITION OF RESPONSIBILITY</div>
                  </div>
                  <div className="resume4-skills-content">
                        {
                          por.map((POR)=>{
                            return <div className="r4-exp-body">
                                      <div className="resume4-head">
                                          <div>{POR.porPosition}</div>
                                      </div>
                                      <div className="resume4-subhead">{POR.porSummary}</div>
                                  </div>
                          })
                        }
                    </div>
                </div>
                <div className="resume4-education-detail">
                  <div className="resume4-heading-div">
                      <div className="r4-line"></div>
                      <div className="resume4-heading">EDUCATION</div>
                      <div className="r4-exp-body">
                        <div className="resume4-skills-content">
                          <div className="r4-exp-body">
                            <div className="resume4-head">
                                <div>{collegeName} | {duration}</div>
                            </div>
                            <div className="division">
                              <div className="resume4-subhead">
                                <div><strong>{degree}</strong></div>
                                <div>CGPA {cgpa}</div>
                              </div>
                            </div>
                        </div>
                        <div className="r4-exp-body">
                            <div className="resume4-head">
                                <div>{schoolName}</div>                         
                             </div>
                             <div className="division">
                              <div className="resume4-subhead">
                                <div><strong>CLASS 12 | {class12PassingYear}</strong></div>
                                <div>{class12marks}</div>
                              </div>
                              <div className="resume4-subhead">
                                <div><strong>CLASS 10 | {class10PassingYear}</strong></div>
                                <div>{class10marks}</div>
                              </div>
                             </div>
                        </div>
                      </div>   
                    </div>
                  </div>
                </div>
                <div className="resume4-achievements-detail">
                    <div className="resume4-heading-div">
                            <div className="r4-line"></div>
                            <div className="resume4-heading">ACHIEVEMENTS</div>
                    </div>
                    <div className="resume4-skills-content">
                        {
                          achievements.map((achievement)=>{
                            return <div className="r4-exp-body">
                                      <div className="resume4-subhead">{achievement}</div>
                                  </div>
                          })
                        }
                    </div>
                </div>
                <div className="resume4-hobbies-detail">
                    <div className="resume4-heading-div">
                            <div className="r4-line"></div>
                            <div className="resume4-heading">INTERESTS</div>
                    </div>
                    <div className="resume4-skills-content">
                        {
                          hobbies.map((hobby)=>{
                            return <div className="r4-exp-body">
                                      <div className="resume4-subhead">{hobby}</div>
                                  </div>
                          })
                        }
                    </div>
                </div>
                <div className="resume4-bottom-line"></div>

            </div>
        </div> );
    }
}
 
export default Skin4;