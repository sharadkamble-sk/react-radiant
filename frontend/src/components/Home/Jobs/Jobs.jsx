// import React from 'react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css'
// import web from '../../assets/images/web.png';
import fullstack from '../../../assets/images/fullstack.png';
import datascience from '../../../assets/images/datascience.png';
import webdev from '../../../assets/images/webdev.png';
import powerbi from '../../../assets/images/powerbi.png';
import uiux from '../../../assets/images/uiux.png';
import salesforce from '../../../assets/images/salesforce.png';
import digitalmarketing from '../../../assets/images/digitalmarketing.png';
const Jobs = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuExpanded, setMenuExpanded] = useState(false);
  useEffect(() => {

      const handleScroll = () => {
          const scrollPosition = window.scrollY;
          if (scrollPosition > 0) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };

  }, []);
  // scroll to top
  const handleLinkClick = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler && window.innerWidth <= 991) {
          navbarToggler.click();
      }
      setMenuExpanded(false);
  };

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };
  // combined two fun
  const handleCombinedClick = () => {
      handleLinkClick();
      scrollToTop();
  };


  return (
    <div className="container">
      <h4 className="text-center joborientedText m-5"><strong>JOB ORIENTED COURSES</strong></h4>
      <div className="row">

        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px ", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={datascience}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Data Science</h4>
              <p className="card-text">
                Discover the power of data with our Data Science course. Gain hands-on experience in analytics, machine learning, and data visualization, and more.
              </p>
              <Link
                to="/courses/data-science-course"
                className=" btn btn-primary btn-block " onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={fullstack}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Full Stack Java</h4>
              <p className="card-text">
                Learn to code and develop both the frontend
                and backend of web applications
                using Java technologies, making
                them proficient full-stack Java
                developers.
              </p>
              <Link
                to="/courses/full-stack-development-course"
                className="btn btn-primary btn-block " onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={webdev}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Web Development</h4>
              <p className="card-text">
                Learn basic to advanced programming languages, such as
                HTML, CSS, Java, Angular, Node.Js, React, SQL and more. And apply your learnings
                on a live project.
              </p>
              <Link
                to="/courses/web-development-course"
                className="btn btn-primary btn-block "  onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={powerbi}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Power BI</h4>
              <p className="card-text">
                One will learn and implement data
                visualization, dashboard
                creation, data modelling, and
                analysis techniques using
                Microsoft's powerful
                business intelligence tool.
              </p>
              <Link
                to="/courses/powerbi-course"
                className="btn btn-primary btn-block " onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={uiux}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">UI/UX Design</h4>
              <p className="card-text">
                Learn the principles behind
                user interface design and user
                experience design, covering
                topics such as Wireframe,
                Prototype, usability testing &
                design thinking methodologies.
              </p>
              <Link
                to="/courses/ui-ux-design-course"
                className="btn btn-primary btn-block  " onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={salesforce}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Salesforce</h4>
              <p className="card-text">
                Learn and implement architect,
                design, SOQL & SOSL, automation and scalable
                business solutions using Salesforce's
                platform in our Salesforce
                Design course.
              </p>
              <Link
                to="/courses/salesforce-course"
                className="btn btn-primary btn-block " onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card" style={{ borderRadius: "35px", backgroundColor: "#D0F1F4", height: "500px" }}>
            <img
              src={digitalmarketing}
              className="card-img-top"
              alt="Course 3"
              style={{ borderTopLeftRadius: "35px", borderTopRightRadius: "35px" }}
            />
            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="card-title">Digital Marketing  </h4>
              <p className="card-text">
                Students will learn SEO, Social Media Marketing,
                SME, Canva, various DM tools and create a digital marketing
                projects.
              </p>
              <Link
                to="/courses/digital-marketing-course"
                className="btn btn-primary btn-block " onClick={handleCombinedClick}
                style={{ borderRadius: "15px", backgroundColor: "#025978" }}
              >
                <strong>VIEW DETAILS</strong>
              </Link>
            </div>
          </div>
        </div>
        {/* Radiant IT Services card content*/}
        <div className="col-md-8 mb-4">
          <div className="cardradiant card" style={{ borderRadius: "35px", backgroundColor: "#35C1D5", height: "500px" }}>

            <div className="card-body text-center"> {/* Added text-center class */}
              <h4 className="radianttitle  card-title">"Radiant IT Services is known for its
                industry standard, best quality training.
                Our innovative training methodologies
                help students build a strong technical
                base and secure a great career!" </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
