import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Internship</h4>
                <h5>Solitaire Infosys Pvt. Ltd.</h5>
              </div>
              <div>6+ Months · MOHALI</div>
            </div>
            <p>
              Gained hands-on experience in the MERN stack (MongoDB, Express.js,
              React.js, Node.js) by developing full-stack web applications.
              Built and implemented application logic, RESTful APIs, and dynamic
              user interfaces. Worked on database design, integration, and
              performance optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Jr. MERN STACK Developer</h4>
                <h5> Auspicious Soft Pvt. Ltd. </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Delivered two production-level web applications using the MERN
              stack.
              <br />
              Built a Court Booking System that enables users to book paddle
              courts in Chandigarh with real-time availability tracking.
              Developed the ROFL Ticketing Platform for ticket purchases and
              prize-based participation, featuring secure authentication,
              well-structured database design, and robust user flows. Focused on
              improving performance, reliability, and code quality through
              optimized backend logic and systematic debugging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
