import React, { Component } from 'react';

import Navbar from './Navbar';

export default class Tutorial extends React.Component {
    constructor(props) {
        let today = new Date().getFullYear();
        super(props);
        //Initialize the state in the constructor
        this.state = {
            currentDate: today
        }
        this.moreLess = this.moreLess.bind(this);
    }
    
    moreLess = (section, which, e) => {
        e.preventDefault();

        if(which == 'paragraph'){
            let hasHide = $('#'+section+' .moreLessContainer').hasClass('hide');

            if(hasHide == true){
                $('#'+section+' .moreLessContainer').removeClass('hide').addClass('show');
                $('#'+section+' .moreLess').text('See Less');
            } else if(hasHide == false){
                $('#'+section+' .moreLessContainer').removeClass('show').addClass('hide');
                $('#'+section+' .moreLess').text('See More');
            }
        } else if(which == 'list') {
            let hasHide = $('#'+section+' .contentToggle').hasClass('hide');
            
            if(hasHide == true){
                $('#'+section+' .contentToggle').removeClass('hide').addClass('show');
                $('#'+section+' .moreLess').html('<div class="collapsible-header centr">See Less</div>');
            } else if(hasHide == false){
                $('#'+section+' .contentToggle').removeClass('show').addClass('hide');
                $('#'+section+' .moreLess').html('<div class="collapsible-header centr">27 More</div>');
            }
        }
    }

    render() {
        return (
            <div id="tut">
                <Navbar page="tut"/>
                <div className="row" id="banner">
                    <div className="container">
                        <h1>Mac Davies &amp; g'OZieCHUKWU Technology Degree.</h1>
                        <h2>Get Equiped with In-Demand Tech. Skills, an OND or PDip &amp; be <b>AIDED</b> to either Continue your Education (B.Sc in Computer Sci. or related field) or get a Developer Job (Locally or Internationally).</h2>
                        <p><b>Training Director: </b> Chigozie Chukwu <span className="right"><b>Location: </b> Legion House, Basilica of the Most Holy Trinity Compound, Onitsha.</span></p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col l8">
                            <div className="row" id="uWillLearn">
                                <h2>What you will learn.</h2>
                                <div className="row">
                                    <div className="col l6">
                                        <p>
                                            <i className="material-icons">check</i> Go from Zero skills to building Powerful Web, Mobile &amp; Desktop Applications on a highly professional level using the latest Web Technologies.
                                        </p>
                                    </div>
                                    <div className="col l6">
                                        <p>
                                            <i className="material-icons">check</i> Use a Portfolio of over 15 highly professional Web, Mobile &amp; Desktop apps you would have developed during the course to promote your career.
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col l6">
                                        <p>
                                            <i className="material-icons">check</i> Create real life mobile apps and upload them to the IOS App Store and Google Play.
                                        </p>
                                    </div>
                                    <div className="col l6">
                                        <p>
                                            <i className="material-icons">check</i> Use HTML5 and CSS3 to build website content and add stunning styling and decoration.
                                        </p>
                                    </div>
                                </div>
                                <div className="hide moreLessContainer">
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Use Javascript, jQuery & jQuery User Interface to create Interactive Websites and Games.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Use Twitter Bootstrap to produce Responsive Websites that will adapt to any device size.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Use Back End Technologies like NodeJS, PHP, AJAX, JSON to build dynamic database-driven websites.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Use advanced skills to connect your websites to APIs like Google Maps, Facebook, Google plus and Twitter.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Mathematics Tutorial Website using HTML5 & CSS3.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Maths Game using HTML5, CSS3 & JavaScript.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Fruits Slice Game using HTML5, CSS3 & JQuery.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional App Landing Page using HTML5, CSS3 & Bootstrap.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Company Website using HTML5, CSS3 & Bootstrap
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional website with video background using HTML5, CSS3, jQuery & Bootstrap.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Stopwatch App using HTML5, CSS3, jQuery & Bootstrap.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Drawing App using HTML5, CSS3, jQuery UI, Canvas, Local Storage.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Online File Explorer App using ES6, NodeJS , HTML5, CSS3 & Bootstrap.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Online Notes App using HTML5, CSS3, Bootstrap, PHP, MySQL & AJAX.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Real Estate Property Finder App for IOS and Android.
                                            </p>
                                        </div>
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Distance Between Cities App using HTML5, CSS3, jQuery, & Google Maps APIs.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                            <p>
                                                <i className="material-icons">check</i> Create a Professional Website with Social Widgets (Facebook, Google+ & Twitter).
                                            </p>
                                        </div>
                                        <div className="col l6">
                                                <p>
                                                        <i className="material-icons">check</i> Create a Fully Functional Car Sharing App which users around the world can use to share car trips. (using HTML5, CSS3, Javascript, PHP, MySQL, AJAX & JSON).
                                                    </p>
                                            
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col l6">
                                                <p>
                                                        <i className="material-icons">check</i> Create a Professional Desktop Application with Java.
                                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" onClick={(e) => this.moreLess('uWillLearn', 'paragraph', e)} className="moreLess">See More</a>
                            </div>

                            <div className="row" id="cert">
                                <h2>Certificates Issued.</h2>
                                <div className="row">
                                    <div className="col l6">
                                        <p>
                                            <b>OND <small><i>(Ordinary National Diploma)</i></small>:</b> you will be issued this Certificates if you complete this course and sat for Use of English, Physics, Mathematics &amp; Chemistry in the last JAMB UTM Exam.
                                        </p>
                                    </div>
                                    <div className="col l6">
                                        <p>
                                            <b>PDip <small><i>(Professional Diploma)</i></small></b> you will be issued this Certificates if you complete this course and have a B.Sc/HND/M.Sc or its equivalent in Computer Science/Mathematics/Engineering.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="desc">
                                <h2>Course Descriptions.</h2>
                                <div className="row">
                                    <div  className="col l12">
                                        <p>
                                            <b>This Program was designed to help you master over 10 Modern Technologies, issue you an OND or PDip, aid you to go for a B.Sc through Direct Entry or aid you to get a job within the country or abroad.</b>
                                        </p>
                                        <p>
                                            These technologies include: HTML5/CSS3, JAVASCRIPT (ES5), Modern JavaScript (ES6), JQUERY &amp; JQUERY UI, TWITTER BOOTSTRAP, Node.js, GIT &amp; GITHUB, HEROKU, PHP &amp; MYSQL, LARAVEL(PHP FRAMEWORK), AJAX, JSON, REACT NATIVE, GOOGLE MAPS APIS, FACEBOOK WIDGETS, GOOGLE PLUS WIDGETS, TWITTER WIDGETS, JAVA
                                        </p>
                                        <p>
                                            This is  a <b>truly 100% Comprehensive Software Development Course</b>, that will take you from learning the basics to mastering the most advanced software development techniques.
                                        </p>
                                        <p>
                                            In order to guarantee the success of your learning experience, this course was divided into perfectly structured sections consisting of hands-on engaging lectures.
                                        </p>
                                        <p>
                                            Each Section covers one of the major technologies and will take you from the basics to advanced skills. This is how:
                                        </p>
                                        <p>
                                            You will first learn the basic concepts, and straight after that apply them in easy practical examples. Then you will easily navigate to more advanced concepts and use them to build more complex applications. Once you have finished the chapter, you will then move to a bigger challenge where you will confidently build a “<b>REAL LIFE FULL PROFESSIONAL PROJECT</b>” using the skills you acquired in that chapter combined with previous ones.
                                        </p>
                                        <div className="hide moreLessContainer">
                                            <p>
                                                Here are a few examples of in-chapter activities:
                                            </p>
                                            <ul className="browser-default">
                                                <li><b>Embed a relaxing YouTube Video to your website (</b>HTML<b>)</b></li>
                                                <li><b>Create an online checkout form (</b>HTML<b>)</b></li>
                                                <li><b>Highway Speed Control (</b>HTML &amp; JavaScript<b>)</b></li>
                                                <li><b>Outbound and Return Flight date pickers just like the Expedia Website (</b>HTML, CSS, jQuery &amp; jQuery UI<b>)</b></li>
                                                <li><b>Car Mileage range using a beautiful slider (</b>HTML, CSS, jQuery &amp; jQuery UI<b>)</b></li>
                                                <li><b>Interactive carousel slider (</b>HTML, CSS, jQuery &amp; Bootstrap<b>)</b></li>
                                                <li><b>Create a responsive Contact Form (</b>HTML, CSS, PHP &amp; Bootstrap<b>)</b></li>
                                                <li><b>What day of the week were you born? (</b>HTML &amp; PHP<b>)</b></li>
                                                <li><b>Guess the date in 1000 days from now! (</b>HTML &amp; PHP<b>)</b></li>
                                                <li><b>Calculate the route, distance and time between Abuja and Onitsha. (</b>HTML, Javascript, Google Maps API’s<b>)</b></li>
                                                <li><b>Get the geographic coordinates and postcode of any address. (</b>HTML, jQuery, Google Maps API’s, JSON<b>)</b></li>
                                                <li><b>Several other challenging Desktop app mini projects. (</b>Java<b>)</b></li>
                                                <li>And alot more</li>
                                            </ul>
                                            <p>
                                                Following are some of the “<b>FULL PROFESSIONAL PROJECTS</b>” you will build throughout the course:
                                            </p>   
                                            <ul className="browser-default">
                                                <li><b>Mathematics Tutorials Website (</b>HTML5 &amp; CSS3<b>)</b></li>
                                                <li><b>Maths Game (</b>HTML5, CSS3 &amp; JavaScript<b>)</b></li>
                                                <li><b>Fruits Slice Game (</b>HTML5, CSS3 &amp; jQuery<b>)</b></li>
                                                <li><b>App Landing Page (</b>HTML5, CSS3 &amp; Bootstrap<b>)</b></li>
                                                <li><b>Company Website (</b>HTML5, CSS3 &amp; Bootstrap<b>)</b></li>
                                                <li><b>Stopwatch App (</b>HTML5, CSS3, jQuery &amp; Bootstrap<b>)</b></li>
                                                <li><b>Drawing App (</b>HTML5, CSS3, jQuery &amp; jQuery UI, Canvas, HTML5 Local Storage<b>)</b></li>
                                                <li><b>Online File Explorer App (</b>Node.js, ES6, HTML5, CSS3, Bootstrap<b>)</b></li>
                                                <li><b>Online Notes App (</b>HTML5, CSS3, jQuery, Bootstrap, PHP &amp; MySQL<b>)</b></li>
                                                <li><b>Highly professional Blog (</b>HTML5, CSS3, jQuery, Bootstrap, PHP &amp; MySQL<b>)</b></li>
                                                <li><b>Distance Between Cities Website (</b>HTML5. CSS3, jQuery, Google Maps<b>)</b></li>
                                                <li><b>Freedom Website with Social Widgets (</b>Facebook, Google+ &amp; Twitter<b>)</b></li>
                                                <li><b>Speed Reader App for the Google Play Stores(</b>React Native<b>)</b></li>
                                                <li><b>Fully functional Car Sharing Website (</b>HTML5, CSS3, jQuery, Bootstrap, PHP & MySQL, Ajax, JSON, Google Maps<b>)</b></li>
                                            </ul>
                                            <p>
                                                By the end of the course, you will have built a solid portfolio of “<b>OVER 15 REAL PROFESSIONAL WEBSITES, GAMES, DESKTOP &amp; MOBILE (for Google and IOS stores) APPLICATIONS</b>”. This will give you a competitive edge in the software development market and boost your income as a developer by increasing your employability or chances of being awarded lucrative projects by clients around the world. You will be required to take a <b>Proof of Proficiency Examination</b> with our partner Tertiary Institution; <a href="">Eastern Polytechnic</a>, for your OND or PDip certificate.
                                            </p>
                                            <p>
                                                At this point you will have to choose between continuing your education or going for a job. If you choose to continue your education, our PR office will help you apply and prepare for Direct Entry examination. The office will also present your application to a University for favourable consideration. If you choose to get a job, we will get you interviews with employers or help you emigrate to Western Europe (where demand for developers is high) for a dev job.
                                            </p>
                                            <p className="gutter">
                                                Further details can be obtained during our <b>Open Day/Seminar</b>:<br/>
                                                Date: <b>10<sup>th</sup> of December, 2019</b><br/>
                                                Location: <b><em>Deacon Digital Solutions Hall, 2nd Floor, Legion House, Basilica of the Most Holy Trinity Compound, Onitsha, Anambra State</em></b>.
                                            </p>
                                            <p className="contactTxt">
                                                If you can't attend our seminar leave us an SMS or whatsapp message on <b>0813818403</b> so we can contact you via call or whatsapp to provide any detail you want to inquire about.
                                            </p>
                                            
                                        </div>
                                        <a href="#" onClick={(e) => this.moreLess('desc', 'paragraph', e)} className="moreLess">See More</a>
                                    </div>
                                </div>
                            </div>       

                            <div className="row" id="content">
                                <h2>Course Content.</h2>
                                <div className="row">
                                    <div className="col l12">
                                        <ul className="collapsible">
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Introduction - HTML</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Structure of a website</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Your First website</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Headings</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Paragraph</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Links</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Images</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Inline vs Block Elements</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Iframes - Activity: Embed a nice relaxing YouTube video to your website</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Unordered Lists</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Ordered Lists</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Description Lists</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Tables</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Entities </li>

                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Forms (1) - Activity: Create a simple Login Form </li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Forms (2) - Activity: Create a Marketplace Checkout Form</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Text Decoration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i>  Comments </li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i>  HTML Quiz </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>CSS</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Inline CSS</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Internal CSS</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> External CSS</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Classes and IDs</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Div and Span</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Box Model</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Box Model: Padding</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Box Model: Border</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Box Model: Outline</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Box Model: Margin</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Background </li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Floating </li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Positioning</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Display</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Text Decoration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Text Align</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Text Font</li>

                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Text Effects</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Image Sprites</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Image Opacity</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Styling Lists</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Styling Links</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Gradients</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> 2D Transforms</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> 3D Transforms</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Transitions</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Animations</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i>  CSS3 Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Mathematics Tutorial Website (HTML5 &amp; CSS3)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Header (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Header (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Menu</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction Box</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sidebars (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sidebars (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Footer & Congratulations</li> 
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Mathematics Tutorial Website Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Advanced CSS with Flexbox, Grid &amp; SASS</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox: Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox: Basic Flexbox</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox: Align flex items</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox: Align flex lines</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox: Resize flex items (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox: Resize flex items (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Photo Gallery (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Photo Gallery (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Amazon Checkout (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Amazon Checkout (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Amazon Checkout (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Maths Website (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Maths Website (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Flexbox Application: Maths Website (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid: Introduction & Basic Grid Template</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid: Implicit vs Explicit Grid</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid: Grid areas & Responsive design</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid: Master the "grid-column" property</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid: Grid Coordinates</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid: Align Grid items</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid Application: Photo Gallery</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> CSS Grid Application: Picture Grid</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sass: Introduction - Installation - Nesting Syntax</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sass: .scss vs .sass - Variables</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sass: @import & @extend directives</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sass: Mixins - Operators - Functions</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Javascript</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Buttons</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change HTML Content</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change HTML Style</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Variables and Data Types</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change HTML Using Variables - Activity: Random Color Generator</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Functions: Activity: Swap the content of two divs</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Objects</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create Objects using the "new" keyword</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Object Contructors</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Arrays</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> If and Switch Statements - Activity: Motorway Speed Control</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> For Loops</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> While Loops - Activity: Spend <s>N</s>1000 Randomly in a marketplace</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Regular Expressions</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Errors (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Errors (2) - Activity: Password Validation</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Set Interval & SeTimeout - Activity: Create a simple counter</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Window and Screen</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Alert Boxes</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Cookies</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Javascript Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Maths Game (HTML, CSS, Javascript)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Maths Game (HTML, CSS & JavaScript)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Page Structure & Styling (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Page Structure & Styling (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Page Structure & Styling (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Page Structure & Styling (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Game Logic using an illustrative flowchart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JavaScript Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JavaScript Code (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JavaScript Code (3)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JavaScript Code (4) & Congratulations</li>
                                                            
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Maths Game Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>JQuery</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction and Loading JQuery</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Select HTML Elements (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Select HTML Elements (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Respond to Events</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change HTML Content and Attributes (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change HTML Content and Attributes (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change Styling (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change Styling (2) - Activity: Random Position and Color Generator</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JQuery Effects</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Ajax</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JQuery UI Introduction</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Draggable and Droppable (1) - Activity: Leave me alone! Please drop me!</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Draggable and Droppable (2) - Activity: Drag Items to your basket</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Resizable</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Selectable - Activity: Append selected Car Makes to a Box</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sortable - Activity: Sort and exchange Car Makes between two groups</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Accordion - Activity: Create a resizable accordion with collapsible sections</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Autocomplete - Activity: City Input with prepopulated options</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Button</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Date Picker - Activity: Outbound and return Flight Date Picker just like Expedia</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Dialog - Activity: Are you sure you want to go to the previous page?</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Menu</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Progress Bar - Activity: Animated progress bar filled from 0% to 100%</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Select Menu</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Slider - Activity: Car Mileage Range using a Slider</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> More Widgets: Spinners, Tabs and Tooltip</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> JQuery Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Fruit Slice Game (HTML, CSS, JQuery)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Fruits Slice Game (HTML, CSS & JQuery)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Page Structure and Styling</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Game Logic using an illustrative flowchart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (4)</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Fruit Slice Game Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Twitter Bootstrap</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Grid System</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Typography</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Tables</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Forms (1) - Activity: Inline and Horizontal Responsive Login Forms</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Forms (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Forms (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Buttons</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Images</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Navs - Activity: Website Design using Nav Tabs and Nav Pills</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Navbars - Activity: Website Design using a responsive/collapsible navigation bar</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Pagination - Activity: Pagination and Pager Examples like Google/Ebay</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Jumbotron</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Thumbnails</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Dropdown menus</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Modals (1) - Activity: I have an inquiry about my order</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Modals (2) - Activity: I have an inquiry about my order</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Scrollspy</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Tabs</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Tooltips</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Popovers - Activity: Create a popover just like the one you see on an IPAD</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Alerts - Activity: Create an alert Box to show a warning or success message</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Button plugin - Activity: Loading … Download Complete</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Collapse plugin</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Carousels - Activity: Create an interactive carousel slider</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Affix plugin - Activity: Interactive Website with Content Affixed to a Menu</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Twitter Bootstrap Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: App Landing Page (HTML, CSS, Bootstrap)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: App Landing Page (HTML, CSS, Bootstrap)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Header and Featured Content (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Header and Featured Content (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Header and Featured Content (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Trial Section, Footer & Congratulations</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> App Landing Page Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Company Website (HTML, CSS, Bootstrap)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Company Website (HTML, CSS, Bootstrap)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Structure of our work</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Background</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Navbar</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Header & icons section</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Contact Button & Footer</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Company Website Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Our Lovely Course (HTML, CSS, JQuery & Bootstrap)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Our Lovely Course (HTML, CSS, JQuery & Bootstrap)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Structure of our work</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Add a background video</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Navigation bar with advanced styling</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Home Section</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> About Section</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Carousel Slider (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Carousel Slider (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Adapt for Small Devices</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Add ScrollSpy feature to navbar & Congratulations</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Our Lovely Course Website Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Stopwatch App (HTML, CSS, JQuery & Bootstrap)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Stopwatch App (HTML, CSS, JQuery & Bootstrap)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Logic using an illustrative flowchart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> StopWatch App Website Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Drawing App (HTML, CSS, JQuery, UI, Canvas, Local Storage)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Drawing App (HTML, CSS, JQuery, UI, Canvas, Local Storage)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> HTML5 Canvas</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Logic using an illustrative flowchart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code Structure</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> jQuery Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Drawing App Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>ES6 Modern Javascript</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Variables & Scoping: Review of "var"</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Variables & Scoping: Let Scope and Temporal Dead Zone</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Block Scoping in ES6</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Functions and Block Scoping</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Functions and Block Scoping – use let</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Let Scope vs Closures</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Closures Challenge</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Read only variables - const</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> New Features that make your life easier: Template Literals</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> New Features that make your life easier: Arrow functions – ‘this’ lexical scope</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Destructuring - Arrays</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Destructuring - Objects</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Destructuring - Functions</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Functions – Default Parameter Values</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Functions – Rest Parameters</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Spread Operator</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Objects New Features</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Iteration: For of loop</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Iterators - next() - Generators</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Maps - Iteration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sets - Iteration</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sets – Challenge: Intersection and Difference</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Symbols</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Symbol.iterator</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Array.from: collections, strings, arguments</li>

                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Array.from: optional map, length property, Maps & Sets</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Array.of</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> More Array Methods</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> ES6 Classes: Back to ES5 Constructors</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> ES6 Classes: Syntax</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> ES6 Classes: Static Methods</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> ES6 Classes: Getters & Setters</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Class Inheritance – extends - super</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>"Front-End" vs "Back-End"</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Understand the Back End (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Understand the Back End (2)</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Node.JS - Introduction &amp; Installation</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction to Node.js</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> How to run Unix commands on Windows</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Node.js Installation + REPL (Read-Eval-Print-Loop)</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i> The  "Super"  Command Line Crash Course</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Command Line Crash Course (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Command Line Crash Course (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Command Line Crash Course (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Command Line Crash Course (4)</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Node.Js - Let's Dive in (ES6 &amp; ES7)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Your First Node Application</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> File Exports</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> HTTP Built-in Module (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> HTTP Built-in Module (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> HTTP Built-in Module (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fs Built-in Module - Blocking Mode</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fs Built-in Module - Non Blocking Mode</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fs Built-in Module - Use ES6 Promises</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fs Built-in Module - Use ES7 Async Await</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fs Built-in Module - More Features</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Online File Explorer App (Node.JS &amp; Bootstrap 4)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Online File Explorer App (Node.JS &amp; Bootstrap 4)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Skeleton and Decoration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Logic</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create the Server</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Decode the path name and convert it to a full static path</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Display folder content and print the title</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Show the path inside a "Breadcrumb"</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Loop through folder elements</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Print Icons - Get introduced to the child_process module</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Calculate folders' size using the child_process module</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Convert folders' size to Bytes - Retrieve items' last modified time</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Calculate the size of files</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Get the mime type of files</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Serve files to the Client</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Serve PDF files on the browser - Serve Media content in chunks using a stream</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Re-order folder elements by name</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Re-order folder elements by name (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Add the up and down arrows after sorting elements by name</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sort elements by size and last modified</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fix projects bugs</li>
                                                            
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Git &amp; Github</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction to Version Control using Git</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Your Git Identity</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Git using the Command Line</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Git Branching & Merging</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Github - Introduction</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Github - Cloning, Forking & Pull Requests (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Github - Cloning, Forking & Pull Requests (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Github - Cloning, Forking & Pull Requests (3)</li> 
                                                            
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Online File Explorer App (Node.JS &amp; Bootstrap 4)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Online File Explorer App (Node.JS &amp; Bootstrap 4)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Skeleton and Decoration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Logic</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create the Server</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Decode the path name and convert it to a full static path</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Display folder content and print the title</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Show the path inside a "Breadcrumb"</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Loop through folder elements</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Print Icons - Get introduced to the child_process module</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Calculate folders' size using the child_process module</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Convert folders' size to Bytes - Retrieve items' last modified time</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Calculate the size of files</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Get the mime type of files</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Serve files to the Client</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Serve PDF files on the browser - Serve Media content in chunks using a stream</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Re-order folder elements by name</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Re-order folder elements by name (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Add the up and down arrows after sorting elements by name</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sort elements by size and last modified</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Fix projects bugs</li>
                                                            
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Deploy your App to Heroku</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Deploy your App to Heroku</li>
                                                            
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>PHP</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Embed PHP in HTML</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> PHP Variables</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: Strings</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: Integers and Floats</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: Booleans</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: Arrays</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: Objects</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: NULL</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Data Types: Resources</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> String Functions</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> If and Switch Statements</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> For Loops</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> While Loops</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Functions</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> GET & POST</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Array Functions (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Array Functions (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Send Emails – Activity: Send a styled email in HTML format</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Filter User Inputs (1) – Protect Yourself from Hackers</li>
                                                            
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Filter User Inputs (2) – User Input Validation</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Create a responsive Contact Form using PHP & Bootstrap (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Create a responsive Contact Form using PHP & Bootstrap (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Create a responsive Contact Form using PHP & Bootstrap (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Date and Time (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Date and Time (2) - Activity: Day of the week you were born? Date in 1000 days?</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Include PHP files</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> File Handling (1): Open – Read – Write - Close</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> File Handling (2): Open – Read – Write - Close</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Upload Files Using PHP (1) – Activity: Upload PDF & Text Files Less than 3Mb.</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Upload Files Using PHP (2) – Activity: Upload PDF & Text Files Less than 3Mb.</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Cookies</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Error Handling (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Error Handling (2) – Activity: Log PHP errors in a file / Trigger error emails</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Sessions</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> PHP Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>MySQL</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> MySQL Chapter: Roadmap and Full Source Code</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create a database using PHP MYADMIN</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Remote MySQL (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Remote MySQL (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create a database using PHP & MySQL</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Add a table to a database</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Populate a database table</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Populate Database once the user submits a form</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Populate Database once the user submits a form (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Populate an HTML table using Database Data (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Activity: Populate an HTML table using Database Data (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Database Data</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Delete Database Data</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> MySQL Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Online Notes App (HTML, CSS, Bootstrap, PHP, MySQL, AJAX)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Online Notes App (HTML, CSS, Bootstrap, PHP, MySQL, AJAX)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (1) - Landing Page</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (2) - Landing Page</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (3) - Landing Page</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (4) - Landing Page</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (5) - My Notes Page</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (6) - Profile Page</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Logic - Signup, Login, Remember Me, Forgot Password</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup/Login Code Structure (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup/Login Code Structure (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup Code (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup Code (5)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Login Code</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Remember me" Code (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Remember me" Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Remember me" Code (3) and Logout Code</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Forgot Password" Code (1)</li>                                            
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Forgot Password" Code (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Forgot Password" Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Forgot Password" Code (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Notes Management: Logic</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Notes Management: Code Structure</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Load Notes: Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Load Notes: Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create Notes: Code (1)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create Notes: Code (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Edit Notes: Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Edit Notes: Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Delete Notes: Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Delete Notes: Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Username Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Username Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Password Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Password Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Email Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Update Email Code (2)</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Blog (HTML, CSS, Bootstrap, PHP, MySQL, AJAX)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Blog (HTML, CSS, Bootstrap, PHP, MySQL, AJAX)</li> 
                                                            
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Google Maps APIs</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction & Embed Google Map to your Website</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Markers and InfoWindows</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Show, hide contentToggle or Delete Markers</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Animated drop of Markers</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Direction Service - Activity: Driving distance & time between New York & Toronto</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Geocoding using the Javascript API - Activity: Get Geocoordinates of an address.</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Geocoding using the geocoding API (1) - Activity: format Address & get postcode.</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Geocoding using the geocoding API (2) - Activity: format Address & get postcode.</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Nearby Search</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Autocomplete</li> 
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Google Maps API's Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Distance Between Cities (HTML. CSS, jQuery, Google Maps)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Distance Between Cities (HTML. CSS, jQuery, Google Maps)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Skeleton and decoration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Logic using an illustrative flowchart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Javascript Code</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Distance Between Cities App Source Code</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Distance Between Cities App Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Website with Social Widgets (Facebook, Google+ & Twitter)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Website with Social Widgets (Facebook, Google+ & Twitter)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Skeleton and decoration</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Facebook Widgets</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Google plus Widgets</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Tweet Button</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Twitter Timeline</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Website Source Code</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Social Widgets Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Mobile Application with React Native for IOS and Android</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Getting Started</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Node &amp; Java Development Kit</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> React Native CLI</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Android Development Environment</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Create the Starter App</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> React Native Basics</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Using JSX</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Adding Navigation</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Building out the Search Page</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Styling with Flexbox</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Handling Assets</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Adding Component State</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Initiating a State</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Performing an API request</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Displaying the Results</li>   
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> A Touch of Style</li>       
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> A Touch of Style</li>                                             
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Speed Reader for Android &amp; IOS</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Speed Reader for Android</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> App Skeleton and Decoration (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Logic of the App using an illustrative flowchart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Start Reading (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Start Reading (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Pause, Resume, Restart</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change the font size</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Change the reading speed</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Control Reading Progress: Go backwards and forward</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Publish your app to Google Play</li>
                                                            <li className="collection-item"><i className="material-icons">flash_on</i> Speed Reader App Quiz</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Professional Project: Car Sharing Website (Javascript, PHP, MySQL, AJAX, JSON)</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Project Introduction: Car Sharing Website (Javascript, PHP, MySQL, AJAX, JSON)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup/Login Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup/Login Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Signup/Login Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Search Page Skeleton & Decoration (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Search Page Skeleton & Decoration (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Search Page Skeleton & Decoration (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Search Page Skeleton & Decoration (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Search Page Skeleton & Decoration (5)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Profile Picture Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Profile Picture Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Profile Picture Code (3)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Profile Picture Code (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Trips Page Skeleton & Decoration (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Trips Page Skeleton & Decoration (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Trips Page Skeleton & Decoration (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Website Logic</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Create a Trip" Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Create a Trip" Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Create a Trip" Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Create a Trip" Code (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Load Trips" Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Load Trips" Code (2)</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Edit/Delete Trips" Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Edit/Delete Trips" Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Edit/Delete Trips" Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Edit/Delete Trips" Code (4)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (3)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (5)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (6)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (7)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Search Trips" Code (8)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Spinner" Code (1)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> "Spinner" Code (2)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Finishing Touches & Congratulations</li>
                                                        </ul>
                                                    </div>
                                                </li>    
                                                <li className="hide contentToggle">
                                                    <div className="collapsible-header"><i className="material-icons">chevron_right</i>Software Development with Java</div>
                                                    <div className="collapsible-body">
                                                        <ul className="collection">
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Introduction</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Software Tools Setup</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> First Steps</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Basics: Expressions, Statements, Code Blocks, Methods and more</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Control Flow Statements</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> OOP Part 1 - Classeds, Constructors and Inheritance</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> OOP Part 2 - Composition, Encapsulation and Polymophism</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Arrays, Java Inbuilt List, Autoboxing and Unboxing</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Inner and Abstract classes & Interfaces</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Java Generics</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> naming Convention and Packages (static and final keywords)</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Java Collections</li> 
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> JavaFx</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Basic Input and Output including Java.util</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Concurrency in Java</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Lambda Expressions</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Debugging and Unit Testing</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Databases</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Java Networking Programming</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Java 9 Module System</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Migrating Java Projects to Java 9</li>
                                                            <li className="collection-item"><i className="material-icons">content_paste</i> Course Remaster in Progress</li>
                                                            
                                                        </ul>
                                                    </div>
                                                </li>     
                                                <li className="moreLess" onClick={(e) => this.moreLess('content', 'list', e)}>
                                                    <div className="collapsible-header centr">27 More</div>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  

                            <div className="row" id="req">
                                <h2>Requirements.</h2>
                                <div className="row">
                                    <div className="col l12">
                                        <ul className="browser-default">
                                            <li>You will be taught everything. All you need is a computer.</li>
                                            <li>There is absolutely no pre-knowledge required. This is a 100% Comprehensive Course that will take you from Zero-skills to a Professional Level Developer, Step by Step with NO Step skipped.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  

                            <div className="row" id="for">
                                <h2>Who this Course is for?</h2>
                                <div className="row">
                                    <div className="col l12">
                                        <ul className="browser-default">
                                            <li>A Science/Technology/Engineering JAMBite looking for world class skill and an alternative path to B.Sc/B.Tech/B.Eng.</li>
                                            <li>A Science/Technology/Engineering Graduate looking for a better path to landing a job.</li>
                                            <li>Anyone looking for to make a career in Computer and Information Technology Industry</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col l4 hide-on-med-and-down">
                            <ul className="collection">
                                <li className="collection-header"><h3>This course includes:</h3></li>
                                <li className="collection-item">
                                    5 days per week for 12 months.
                                </li>
                                <li className="collection-item">
                                    15 Projects on Web Development.
                                </li>
                                <li className="collection-item">
                                    5 Projects on Mobile App Development.
                                </li>
                                <li className="collection-item">
                                    5 Projects on Desktop App Development.
                                </li>
                                <li className="collection-item">
                                    National Diploma or Professional Diploma Certificate on Completion.
                                </li>
                                <li className="collection-item">
                                    Platform to get jobs locally &amp; abroad or continue to a B.Sc in a Related Field.
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    
                </div>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Mac Davies &amp; g'OZieCHUKWU Technology Degree.</h5>
                            <p className="grey-text text-lighten-4">Get Equiped with In-Demand Tech. Skills, an OND or PDip &amp; be <b>AIDED</b> to either Continue your Education (B.Sc in Computer Sci. or related field) or get a Developer Job (Locally or Internationally).</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Quick Navigation</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#uWillLearn">What you will learn.</a></li>
                                <li><a className="grey-text text-lighten-3" href="#cert">Certificates Issued.</a></li>
                                <li><a className="grey-text text-lighten-3" href="#desc">Course Descriptions.</a></li>
                                <li><a className="grey-text text-lighten-3" href="#content">Course Content.</a></li>
                                <li><a className="grey-text text-lighten-3" href="#req">Requirements.</a></li>
                                <li><a className="grey-text text-lighten-3" href="#for">Who this Course is for?</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            Mac Davies &amp; gOZieCHUKWU &copy; 2019 - {this.state.currentDate}
                        </div>
                    </div>
                </footer>
                <div className="fixed-action-btn">
                    <a className="btn-floating btn-large red">
                    <i className="large material-icons">menu</i>
                    </a>
                    <ul>
                        <li><a className="btn-floating red tooltipped" href="#uWillLearn" data-position="left" data-tooltip="What you will learn."><i className="material-icons">school</i></a></li>
                        <li><a className="btn-floating yellow darken-1 tooltipped" href="#cert" data-position="left" data-tooltip="Certificates Issued."><i className="material-icons">class</i></a></li>
                        <li><a className="btn-floating green tooltipped" href="#desc" data-position="left" data-tooltip="Course Descriptions."><i className="material-icons">description</i></a></li>
                        <li><a className="btn-floating blue tooltipped" href="#content" data-position="left" data-tooltip="Course Content."><i className="material-icons">import_contacts</i></a></li>
                        <li><a className="btn-floating lime darken-4 tooltipped" href="#req" data-position="left" data-tooltip="Requirements."><i className="material-icons">check_box</i></a></li>
                        <li><a className="btn-floating purple darken-4 tooltipped" href="#for" data-position="left" data-tooltip="Who this Course is for?"><i className="material-icons">group</i></a></li>
                    </ul>
                </div>
                
            </div>
        );
    }
}

/*if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}*/
