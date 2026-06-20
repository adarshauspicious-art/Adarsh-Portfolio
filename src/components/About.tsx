import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I am a Full Stack Developer with professional experience building
          scalable, production-ready web applications using React.js, Next.js,
          TypeScript, Node.js, Express.js, and MongoDB.
          <br />
          <br />
          My expertise includes developing responsive user interfaces,
          designing secure RESTful APIs, implementing authentication and
          authorization systems, integrating third-party services, and building
          real-time features using modern web technologies.
          <br />
          <br />
          I have hands-on experience working with technologies such as Redis,
          Socket.io, Stripe, OpenAI, Tailwind CSS, Git, and Postman, while
          following industry best practices for performance, security, and
          maintainability.
          <br />
          <br />
          Passionate about continuous learning and problem-solving, I am
          currently expanding my knowledge in Cloud and DevOps technologies,
          including AWS, Docker, CI/CD, and modern deployment workflows.
        </p>
      </div>
    </div>
  );
};

export default About;