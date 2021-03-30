import React, { Component } from 'react'
import "./About.css"

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="about-page">
                <div className="bg-image">
                    <img src="/Images/bgImage.jpg" alt=""/>
                </div>
                <div className="about-info">
                    <div className="about-info-intro">
                        <h1>Make a resume that stands out</h1>
                        <p>Increase your chance of getting a job by creating your resume with our professionally-designed resume templates and complementary colour schemes.</p>
                    </div>
                    <div className="info-question">
                        <h1>Resume Builder is here to help you</h1>
                        <p>We offer you the best online resume builder and free professional advice from career experts. We’ll guide you through the entire recruitment process all the way to your dream job.</p>
                    </div>
                    <div className="info-question">
                        <h1>What are the benefits of Resume Builder’s online resume maker?</h1>
                    </div> 
                    <div className="benefit-info">
                        <div className="benefit">
                            <i class="far fa-clock"></i>
                            <div className="benefit-text">
                                <h3>It's Fast and Easy to Use</h3>
                                <p>Our online resume builder will help you write a perfect resume in minutes</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <i class="fas fa-search"></i>  
                            <div className="benefit-text">
                                <h3>More likely to land a job</h3>
                                <p>With a representative and professional CV, you will stand out amongst all other applicants. You are also up to 65% more likely to be invited to an interview.</p>
                            </div>
                        </div>
                        <div className="benefit">
                            <i class="far fa-file-alt"></i>
                            <div className="benefit-text">
                                <h3>Professional CV Templates</h3>
                                <p>Choose professional, elegant, creative, or modern resume templates. Resume Builder's resume maker offers 10 templates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="info-question">
                        <h1>Our Customers Love Us</h1>
                        <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i> Rated <strong>4.3/5</strong> out of <strong>1,195 reviews</strong></p>
                    </div>
                    <div className="reaction-info">
                        <div className="reaction">
                            <h4>Alex Lafreniere</h4>
                            <p>Hands down the best and most intuitive resume builder I've used. Go for the pro plan - it's the best bang for your buck.</p>
                            <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>
                        <div className="reaction">
                            <h4>Victoria Odonnell</h4>
                            <p>Resume Builder has made modern professional resume writing a breeze! Beautiful templates, that has helped visualize years of work experience into a single page.</p>
                            <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></p>
                        </div>
                        <div className="reaction">
                            <h4>Imran Khan</h4>
                            <p>At any point of the time I would recommend resume Builder as a platform to prepare one’s resume. It offers A lot of sample templates as well. Kudos to the entire team and Thanks again for getting my Dream Job.</p>
                            <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>
                        <div className="reaction">
                            <h4>Anonymous</h4>
                            <p>I really like the ease of usage and the visuals of Resume Builder. It's my to-go resume creator, and it'll probably be for a long while.</p>
                            <p> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>
                        </div>
                    </div>

                </div>
            </div>
         );
    }
}
 
export default About;