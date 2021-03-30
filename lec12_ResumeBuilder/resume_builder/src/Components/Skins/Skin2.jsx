import React, { Component } from 'react';
import "./Skin2.css";

class Skin2 extends Component {
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
            <div className="resume1">


                <div className="left-div">
                    <div className="name-info">
                        <div className="line l1"></div>
                        <div className="user-name">{fname.toUpperCase()}</div>
                        <div className="user-name">{lname.toUpperCase()}</div>
                        <div className="profession">{profession.toUpperCase()}</div>
                        <div className="line l2"></div>
                        <div className="quote-icon"><i class="fas fa-quote-left"></i></div>
                    </div>
                    <div className="skills-div">
                        <div className="div-heading">SKILLS</div>
                        <div className="body">
                          <div className="sub-div">
                            <div className="div-subheading">LANGUAGE</div>
                            <ul className="list">
                              {
                                languages.map((language)=>{
                                  return <li>{language}</li>
                                })
                              }
                            </ul>
                          </div>
                          <div className="sub-div">
                            <div className="div-subheading">FRAMEWORKS</div>
                            <ul className="list">
                              {
                                frameworks.map((framework)=>{
                                  return <li>{framework}</li>
                                })
                              }
                            </ul>
                          </div>
                          <div className="sub-div">
                            <div className="div-subheading">SOFTWARES</div>
                            <ul className="list">
                              {
                                softwares.map((software)=>{
                                  return <li>{software}</li>
                                })
                              }
                            </ul>
                          </div>
                          <div className="sub-div">
                            <div className="div-subheading">IDES</div>
                            <ul className="list">
                              {
                                ides.map((ide)=>{
                                  return <li>{ide}</li>
                                })
                              }
                            </ul>
                          </div>
                        </div>
                    </div>
                    <div className="achievement-div">
                      <div className="div-heading">ACHIEVEMENTS</div>
                      <div className="body">
                        < ul className="list">
                          {
                            achievements.map((achievement)=>{
                              return <p className="achievement-li">{achievement}</p>
                            })
                          }
                        </ul>
                      </div>

                    </div>
                    <div className="l5"></div>
                </div>

                <div className="right-div">
                    <div className="resume-top">
                        <div className="line l3"></div>
                        <div className="contact-info">
                            <div className="links">
                                <div className="contact">
                                    <div className="phone">{phone}</div>
                                    <i class="fas fa-phone-square-alt"></i>
                                    <div className="email">{email}</div>
                                    <i class="fas fa-envelope-square"></i>                                </div>
                                <div className="profile-links">
                                    <div className="linkedIn">{linkedIn}</div>
                                    <i class="fab fa-linkedin"></i>
                                    <div className="gitHub">{github}</div>
                                    <i class="fab fa-github-square"></i>
                                </div>
                            </div>
                            <div className="line l4"></div>
                            <div className="address">{userAddress}</div>
                            <i class="fas fa-home"></i>
                        </div>
                        <div className="summary">{summary}</div>

                    </div>
                    <div className="experience-div">
                      <div className="div-right-heading">EXPERIENCE</div>
                      <div className="right-body">
                          {
                            experienceDetails.map((experienceDetail)=>{
                              return <div className="right-sub-div">
                                        <div className="right-head">{experienceDetail.companyName} | {experienceDetail.position} | {experienceDetail.duration}</div>
                                        <p className="right-p">{experienceDetail.role}</p>
                                     </div>
                            })
                          }
                      </div>
                    </div>
                    <div className="projects-div">
                    <div className="div-right-heading">PROJECTS</div>
                      <div className="right-body">
                          {
                            projects.map((project)=>{
                              return <div className="right-sub-div">
                                        <div className="right-head">{project.projectName} | {project.techStack} | <a className="p-link" href="">{project.projectLink}</a></div>
                                        <p className="right-p">{project.summary}</p>
                                     </div>
                            })
                          }
                      </div>
                    </div>
                    <div className="education-div">
                    <div className="div-right-heading">EDUCATION</div>
                      <div className="right-body"> 
                        <div className="right-sub-div">
                          <div className="right-head">{collegeName} | </div>
                          <div className="right-sub-head">{degree}</div>
                          <div className="right-sub-head">CGPA {cgpa} | {duration}</div>
                        </div>
                        <p className="right-p p1">{collegeState}</p>
                      </div>
                      <div className="right-body"> 
                        <div className="right-sub-div">
                          <div className="right-head">{schoolName} | </div>
                          <div className="right-sub-head">CLASS 12 | {class12PassingYear} | {class12marks}</div>
                          <div className="right-sub-head">CLASS 10 | {class10PassingYear} | {class10marks}</div>
                        </div>
                        <p className="right-p p2">{schoolState}</p>
                      </div>

                    </div>
                    <div className="hobbies-div">
                      <div className="div-right-heading">INTERESTS</div>   
                      <div className="right-body">
                        {
                          hobbies.map((hobby)=>{
                            return <div className="right-p">{hobby}</div>
                          })
                        }
                      </div>   
                    </div>
                    <div className="l6"></div>
                </div>

            </div>
        </div>
        );
    }
}
 
export default Skin2;