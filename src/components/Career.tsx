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

          {/* Internship */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Intern</h4>
                <h5>Solitaire Infosys Pvt. Ltd.</h5>
              </div>
              <div>Jan 2025 – Jun 2025 · Mohali</div>
            </div>

            <p>
              Developed full-stack web applications using React.js, Node.js,
              Express.js, and MongoDB. Built RESTful APIs following MVC
              architecture, implemented JWT-based authentication and role-based
              access control, designed MongoDB schemas, and performed CRUD
              operations across multiple business modules. Collaborated with
              senior developers to deliver responsive and maintainable
              applications.
            </p>
          </div>

          {/* Current Role */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack (MERN) Developer</h4>
                <h5>Auspicious Soft Pvt. Ltd.</h5>
              </div>
              <div>Sep 2025 – Present</div>
            </div>

            <p>
              Building and maintaining production-ready applications using
              React.js, Next.js, Node.js, Express.js, MongoDB, and TypeScript.
              Developed secure authentication systems with JWT and OAuth,
              integrated Stripe payment workflows, implemented real-time
              features using Socket.io and WebSockets, and leveraged Redis for
              caching and session management. Contributed to AI-powered
              solutions through OpenAI and Claude while
              delivering scalable, high-performance user experiences in an
              Agile development environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;